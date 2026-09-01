import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Circle, Polyline, Popup, LayersControl, useMap } from 'react-leaflet';
import { 
  RiskZone, Road, VulnerableVillage, CriticalInfrastructure, 
  Incident, Alert 
} from '../types';

const { BaseLayer, Overlay } = LayersControl;

function MapFlyTo({ lat, lng }: { lat?: number; lng?: number }) {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], 11, { duration: 1.2 });
    }
  }, [lat, lng, map]);
  return null;
}

export const GisMap: React.FC<{
  riskZones: RiskZone[];
  roads: Road[];
  villages: VulnerableVillage[];
  infrastructure: CriticalInfrastructure[];
  incidents: Incident[];
  alerts: Alert[];
  onSelectZone?: (zone: RiskZone) => void;
  onSelectIncident?: (incident: Incident) => void;
  focusLat?: number;
  focusLng?: number;
}> = ({
  riskZones,
  roads,
  villages,
  infrastructure,
  incidents,
  alerts,
  onSelectZone,
  onSelectIncident,
  focusLat,
  focusLng
}) => {
  const centerLat = focusLat || 25.8;
  const centerLng = focusLng || 92.5;

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={7}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <MapFlyTo lat={focusLat} lng={focusLng} />

                <LayersControl position="topright">
          
          <BaseLayer checked name="Carto Dark Matter (Tactical)">
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a> | ISRO Bhuvan Grid'
              url="https://basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png?key=cb1_2pea_1_5d816ac716ed4b7f7402264f"
            />
          </BaseLayer>

          <BaseLayer name="Carto Voyager (Settlements & Contours)">
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a> | Topographic'
              url="https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_2pea_1_5d816ac716ed4b7f7402264f"
            />
          </BaseLayer>

          <BaseLayer name="OpenStreetMap Standard">
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>

          {/* 1. Risk Zones Layer */}
          <Overlay checked name="Landslide Risk Zones">
            <>
              {riskZones.map((zone) => {
                const color = 
                  zone.severity === 'CRITICAL' ? '#ef4444' :
                  zone.severity === 'HIGH' ? '#f97316' :
                  zone.severity === 'MODERATE' ? '#eab308' : '#10b981';

                return (
                  <React.Fragment key={zone.id}>
                    <Circle
                      center={[zone.coordinates.lat, zone.coordinates.lng]}
                      radius={12000}
                      pathOptions={{
                        color: color,
                        fillColor: color,
                        fillOpacity: 0.18,
                        weight: 2,
                        dashArray: '4, 4'
                      }}
                    />
                    <CircleMarker
                      center={[zone.coordinates.lat, zone.coordinates.lng]}
                      radius={zone.severity === 'CRITICAL' ? 9 : 7}
                      pathOptions={{
                        color: '#ffffff',
                        fillColor: color,
                        fillOpacity: 0.9,
                        weight: 2
                      }}
                      eventHandlers={{
                        click: () => onSelectZone && onSelectZone(zone)
                      }}
                    >
                      <Popup>
                        <div className="p-2 space-y-1 text-xs">
                          <div className="font-bold text-white flex items-center space-x-1">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                            <span>{zone.name}</span>
                          </div>
                          <div className="text-slate-400">{zone.district}, {zone.state}</div>
                          <div className="font-mono text-amber-400 font-bold">
                            Risk Score: {zone.risk_score}/100 ({zone.severity})
                          </div>
                          <button
                            onClick={() => onSelectZone && onSelectZone(zone)}
                            className="mt-2 w-full py-1 rounded bg-amber-500 text-slate-950 font-bold text-[10px]"
                          >
                            Inspect XAI Factor Profile ?
                          </button>
                        </div>
                      </Popup>
                    </CircleMarker>
                  </React.Fragment>
                );
              })}
            </>
          </Overlay>

          {/* 2. Lifeline Highways */}
          <Overlay checked name="Lifeline Highway Corridors">
            <>
              {roads.map((road) => {
                const color = 
                  road.status === 'BLOCKED' ? '#ef4444' :
                  road.status === 'SLOW' ? '#f97316' : '#10b981';

                const polyCoords = road.coordinates_path || [];

                return (
                  <Polyline
                    key={road.id}
                    positions={polyCoords as [number, number][]}
                    pathOptions={{
                      color: color,
                      weight: road.status === 'BLOCKED' ? 5 : 3.5,
                      dashArray: road.status === 'BLOCKED' ? '6, 6' : undefined
                    }}
                  >
                    <Popup>
                      <div className="p-2 text-xs space-y-1">
                        <div className="font-bold text-white">{road.name}</div>
                        <div className="text-slate-300 font-mono">Status: {road.status}</div>
                        <div className="text-slate-400 text-[11px]">{road.blockage_cause || 'Open for transit.'}</div>
                      </div>
                    </Popup>
                  </Polyline>
                );
              })}
            </>
          </Overlay>

          {/* 3. Field Incidents */}
          <Overlay checked name="Field Incidents & Tension Cracks">
            <>
              {incidents.map((inc) => (
                <CircleMarker
                  key={inc.id}
                  center={[inc.coordinates.lat, inc.coordinates.lng]}
                  radius={7}
                  pathOptions={{
                    color: '#fbbf24',
                    fillColor: inc.severity === 'CRITICAL' ? '#dc2626' : '#d97706',
                    fillOpacity: 1,
                    weight: 2
                  }}
                  eventHandlers={{
                    click: () => onSelectIncident && onSelectIncident(inc)
                  }}
                >
                  <Popup>
                    <div className="p-2 text-xs space-y-1">
                      <div className="font-bold text-amber-400">{inc.incident_type}</div>
                      <div className="text-slate-200">{inc.location_name}, {inc.district}</div>
                      <div className="text-slate-400 text-[11px]">{inc.description}</div>
                      <div className="font-mono text-[10px] text-slate-400">By: {inc.reported_by}</div>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </>
          </Overlay>

          {/* 4. Vulnerable Villages */}
          <Overlay checked name="Vulnerable Hill Hamlets">
            <>
              {villages.map((vil) => (
                <CircleMarker
                  key={vil.id}
                  center={[vil.coordinates.lat, vil.coordinates.lng]}
                  radius={4}
                  pathOptions={{
                    color: '#60a5fa',
                    fillColor: '#2563eb',
                    fillOpacity: 0.8,
                    weight: 1
                  }}
                >
                  <Popup>
                    <div className="p-2 text-xs space-y-1">
                      <div className="font-bold text-white">{vil.name}</div>
                      <div className="text-slate-400">Pop: {vil.population} ? Shelter: {vil.nearest_shelter_name}</div>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </>
          </Overlay>

        </LayersControl>
      </MapContainer>
    </div>
  );
};
