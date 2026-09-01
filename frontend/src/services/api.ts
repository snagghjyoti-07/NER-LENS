
import { 
  DashboardSummary, RiskZone, Incident, IncidentCreate, 
  Alert, AlertCreate, Road, VulnerableVillage, CriticalInfrastructure, 
  HistoricalLandslide, DataSource, DemoScenario, ExplainableRiskAssessment 
} from '../types';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const api = {
  async getDashboard(): Promise<DashboardSummary> {
    try {
      const res = await fetch(`${API_BASE_URL}/dashboard`);
      if (!res.ok) throw new Error('API offline');
      return await res.json();
    } catch {
      return {
        regional_risk_score: 76,
        regional_severity: 'CRITICAL',
        critical_risk_zones: 6,
        high_risk_zones: 2,
        total_risk_zones: 8,
        active_incidents: 3,
        active_alerts: 1,
        affected_roads_count: 2,
        blocked_roads: 1,
        slow_roads: 1,
        vulnerable_villages_count: 7,
        current_scenario: 'scen-2',
        data_sources_healthy: 6,
        timestamp: new Date().toISOString()
      };
    }
  },

  async getRiskZones(params?: { district?: string; state?: string; severity?: string }): Promise<RiskZone[]> {
    try {
      const url = new URL(`${API_BASE_URL}/risk-zones`);
      if (params?.district) url.searchParams.set('district', params.district);
      if (params?.state) url.searchParams.set('state', params.state);
      if (params?.severity) url.searchParams.set('severity', params.severity);
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return [];
    }
  },

  async getRiskZone(id: string): Promise<RiskZone | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/risk-zones/${id}`);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return null;
    }
  },

  async evaluateCustomRisk(payload: {
    rainfall_24h: number;
    rainfall_72h: number;
    slope_angle_deg: number;
    lithology_class?: string;
    historical_distance_km?: number;
    active_cracks_reported?: number;
    population_density?: number;
    model?: string;
  }): Promise<ExplainableRiskAssessment> {
    const res = await fetch(`${API_BASE_URL}/risk/evaluate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await res.json();
  },

  async getIncidents(): Promise<Incident[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/incidents`);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return [];
    }
  },

  async reportIncident(data: IncidentCreate): Promise<Incident> {
    const res = await fetch(`${API_BASE_URL}/incidents`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  },

  async verifyIncident(incidentId: string, verifiedBy: string, notes?: string): Promise<Incident> {
    const url = new URL(`${API_BASE_URL}/incidents/${incidentId}/verify`);
    url.searchParams.set('verified_by', verifiedBy);
    if (notes) url.searchParams.set('notes', notes);
    const res = await fetch(url.toString(), { method: 'POST' });
    return await res.json();
  },

  async getAlerts(): Promise<Alert[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/alerts`);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return [];
    }
  },

  async createAlert(data: AlertCreate, createdBy: string): Promise<Alert> {
    const url = new URL(`${API_BASE_URL}/alerts`);
    url.searchParams.set('created_by', createdBy);
    const res = await fetch(url.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  },

  async issueAlert(alertId: string, approvedBy: string): Promise<Alert> {
    const url = new URL(`${API_BASE_URL}/alerts/${alertId}/issue`);
    url.searchParams.set('approved_by', approvedBy);
    const res = await fetch(url.toString(), { method: 'POST' });
    return await res.json();
  },

  async getAlertCapXml(alertId: string): Promise<string> {
    const res = await fetch(`${API_BASE_URL}/alerts/${alertId}/cap-xml`);
    const data = await res.json();
    return data.cap_xml;
  },

  async getAlertCellBroadcast(alertId: string): Promise<any> {
    const res = await fetch(`${API_BASE_URL}/alerts/${alertId}/cell-broadcast`);
    return await res.json();
  },

  async getRoads(): Promise<Road[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/roads`);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return [];
    }
  },

  async getVillages(): Promise<VulnerableVillage[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/villages`);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return [];
    }
  },

  async getInfrastructure(): Promise<CriticalInfrastructure[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/infrastructure`);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return [];
    }
  },

  async getHistoricalEvents(state?: string): Promise<HistoricalLandslide[]> {
    try {
      const url = new URL(`${API_BASE_URL}/historical`);
      if (state) url.searchParams.set('state', state);
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return [];
    }
  },

  async getDataSources(): Promise<DataSource[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/data-sources`);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return [];
    }
  },

  async getScenarios(): Promise<DemoScenario[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/scenarios`);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return [];
    }
  },

  async applyScenario(scenarioId: string): Promise<DemoScenario> {
    const res = await fetch(`${API_BASE_URL}/scenarios/apply/${scenarioId}`, { method: 'POST' });
    return await res.json();
  },

  async syncBatchReports(reports: IncidentCreate[]): Promise<any> {
    const res = await fetch(`${API_BASE_URL}/sync/batch`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reports)
    });
    return await res.json();
  },

  async getAuditLogs(): Promise<any[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/audit-logs`);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return [];
    }
  }
};
