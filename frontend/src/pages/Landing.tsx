import React from 'react';
import { 
  ArrowRight, Siren, Brain, Shield, Radio, MapPin, 
  WifiOff, Languages, Activity, CheckCircle2, ChevronRight, 
  ExternalLink, Layers, Sparkles, AlertTriangle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Landing: React.FC = () => {
  const { setActiveTab, triggerEmergency, t } = useApp();

  return (
    <div className="-m-4 sm:-m-6 lg:-m-7 flex flex-col font-sans text-slate-900 selection:bg-emerald-500 selection:text-slate-950">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Image 1) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden px-4 sm:px-8 lg:px-12 py-16">
        {/* Background Mountain Photo with Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-slate-950/70 to-slate-950/90" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-left space-y-6 pt-4">
          
          {/* Subtitle Badge */}
          <div className="text-[11px] sm:text-xs font-black tracking-widest text-emerald-400 uppercase">
            NORTH EASTERN REGION ? DISASTER DECISION SUPPORT
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            AI-Based Early Warning &<br />
            Landslide Risk Monitoring
          </h1>

          {/* Green Subhead */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
            Predict. Warn. Protect.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            Every monsoon, slope failures across the NER cut off roads, isolate villages and cost lives. 
            This platform fuses rainfall, soil moisture, ground movement, terrain and historical data 
            to estimate landslide risk ? and warn before slopes fail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>Open Monitoring Dashboard</span>
              <ArrowRight className="w-4 h-4 text-slate-950 font-black" />
            </button>

            <button
              onClick={() => triggerEmergency('Emergency Mode Test', 'North Eastern Region')}
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm shadow-xl shadow-red-600/20 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
            >
              <Siren className="w-4 h-4 text-white animate-pulse" />
              <span>Emergency Mode</span>
            </button>
          </div>

          {/* Bottom Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-white/10 text-xs font-mono text-slate-400">
            <div>
              <span className="text-xl sm:text-2xl font-black text-white block font-sans">12</span>
              <span>monitored zones</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-white block font-sans">8</span>
              <span>NER states</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-white block font-sans">48+</span>
              <span>IoT sensors</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 block font-sans">Live</span>
              <span>Open-Meteo & AI</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE PROBLEM SECTION (Image 2) */}
      {/* ========================================================================= */}
      <section className="bg-[#f8fafc] py-20 px-4 sm:px-8 lg:px-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-black tracking-widest text-slate-500 uppercase">
                THE PROBLEM
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Landslides in the NER are frequent, deadly ? and often foreseeable
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The North Eastern Region combines steep young geology, extreme monsoon rainfall and rapid road cutting. 
                District administrations rarely get more than minutes of warning. An early warning system doesn't just predict ? 
                it buys time for evacuation.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Some NER stations receive >2,000 mm of monsoon rainfall",
                  "Saturated soils lose shear strength and fail on steep slopes",
                  "Fragile Himalayan & Purvanchal geology amplifies susceptibility"
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-semibold text-slate-800 flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Image with Floating Card */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80" 
                  alt="Mountain Road Landslide Debris"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
              </div>

              {/* Floating Dark Card (matching Screenshot 2) */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 max-w-sm bg-[#0b1329] text-white p-5 rounded-2xl shadow-2xl border border-slate-800 space-y-2">
                <h4 className="text-xs font-black text-red-400 uppercase tracking-wider">
                  The cost of no warning
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Blocked lifeline roads, buried homes, stranded communities. Hours of advance warning change outcomes.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOW THE SYSTEM WORKS (Image 3) */}
      {/* ========================================================================= */}
      <section className="bg-white py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="space-y-2">
            <div className="text-xs font-black tracking-widest text-slate-500 uppercase">
              HOW THE SYSTEM WORKS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              From sensor to siren in four stages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Sense",
                desc: "IoT sensors, weather feeds, terrain data and satellite indicators stream into the platform.",
                icon: Activity
              },
              {
                num: "02",
                title: "Estimate",
                desc: "The risk engine fuses rainfall, soil moisture, slope, movement and history into a 0?100 risk score.",
                icon: Brain
              },
              {
                num: "03",
                title: "Classify",
                desc: "Zones are classified LOW ? MODERATE ? HIGH ? CRITICAL with explainable factors.",
                icon: Shield
              },
              {
                num: "04",
                title: "Warn",
                desc: "Alerts route through internet, SMS, cell broadcast or offline gateways to authorities and communities.",
                icon: Siren
              }
            ].map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/80 hover:border-emerald-500/50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all space-y-4 relative group"
                >
                  <div className="text-xs font-mono font-bold text-slate-400">
                    {stage.num}
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-black text-slate-900">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BUILT FOR AUTHORITIES, FIELD TEAMS & COMMUNITIES (Image 4) */}
      {/* ========================================================================= */}
      <section className="bg-[#f8fafc] py-20 px-4 sm:px-8 lg:px-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Built for authorities, field teams and communities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Assisted Risk Estimation",
                desc: "Multi-parameter heuristic engine estimates landslide probability with confidence scores and explainable contributing factors. Architecture-ready for trained ML models.",
                icon: Brain
              },
              {
                title: "NER-Focused Monitoring",
                desc: "Purpose-built for the terrain, geology and rainfall patterns of all 8 North Eastern states ? from Sikkim's glacial valleys to Mizoram's laterite ridges.",
                icon: MapPin
              },
              {
                title: "Offline-First Operation",
                desc: "PWA with service worker caching, local risk data storage and an offline alert queue. Keeps working where connectivity fails ? because disasters do.",
                icon: WifiOff
              },
              {
                title: "Emergency Warning Workflow",
                desc: "Full alert lifecycle: generate ? queue ? gateway ? transmit ? acknowledge. Multi-channel delivery incl. SMS, cell broadcast, LoRa and sirens.",
                icon: Siren
              },
              {
                title: "11-Language Interface",
                desc: "Alerts and evacuation instructions in English, Hindi, Telugu, Assamese, Bengali, Nepali, Manipuri, Mizo, Khasi, Garo and Nagamese.",
                icon: Languages
              },
              {
                title: "Sensor & Field Integration",
                desc: "Rain gauges, inclinometers, tilt sensors and crowd-sourced field reports feed a single operational picture.",
                icon: Radio
              }
            ].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-black text-slate-900">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. COMMAND CENTER PREVIEW & FOOTER (Image 5) */}
      {/* ========================================================================= */}
      <section className="bg-[#0a0f1d] text-white py-20 px-4 sm:px-8 lg:px-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Preview Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-black tracking-widest text-emerald-400 uppercase">
                COMMAND CENTER PREVIEW
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                A live operational picture of every monitored slope
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Interactive risk map, AI prediction panel, historical event replay, sensor health 
                and a full early-warning workflow ? in a single dark command interface designed for 
                control rooms and field devices alike.
              </p>

              <div>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 flex items-center space-x-2 transition-all hover:scale-105"
                >
                  <span>Explore the Dashboard</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 font-black" />
                </button>
              </div>
            </div>

            {/* Right Preview Graphic */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 p-2">
                <div className="bg-[#07090e] rounded-xl p-4 border border-white/5 space-y-3 font-mono text-[11px] text-slate-300">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-emerald-400 font-bold">? COMMAND CENTER TELEMETRY</span>
                    <span className="text-slate-400">ISRO / GSI BHUVAN GRID</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                      <div className="text-slate-400 text-[10px]">MANGAN RIDGE (SIKKIM)</div>
                      <div className="text-lg font-bold text-red-400">88 / 100 CRITICAL</div>
                      <div className="text-[10px] text-slate-400">FoS: 1.08 ? Rain: 285mm</div>
                    </div>
                    <div className="bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                      <div className="text-slate-400 text-[10px]">SOHRA RIM (MEGHALAYA)</div>
                      <div className="text-lg font-bold text-amber-400">82 / 100 HIGH</div>
                      <div className="text-[10px] text-slate-400">FoS: 1.14 ? Rain: 340mm</div>
                    </div>
                  </div>
                  <div className="p-2.5 bg-emerald-950/30 border border-emerald-500/20 rounded-lg text-emerald-300 text-[10px]">
                    ? Groq AI Reasoning Engine & Open-Meteo Telemetry Stream Active
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bar matching Screenshot 5 */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center space-x-3">
              <span className="font-black text-white tracking-wide">NER LANDSLIDE EWS</span>
              <span>?</span>
              <span className="text-slate-500">SIH 2026</span>
            </div>

            <div className="text-center text-slate-400 max-w-md text-[11px]">
              Risk estimation and decision support only. This platform uses real-time open weather feeds and geotechnical intelligence for disaster decision support.
            </div>

            <div className="flex items-center space-x-4 font-semibold">
              <button 
                onClick={() => setActiveTab('architecture')}
                className="text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
              >
                <span>System Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setActiveTab('login')}
                className="text-slate-300 hover:text-white"
              >
                Authority Login ?
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
