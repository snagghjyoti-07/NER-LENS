import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AppLayout } from './components/AppLayout';

// Pages
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { LocationPage } from './pages/LocationPage';
import { Prediction } from './pages/Prediction';
import { Warnings } from './pages/Warnings';
import { Sensors } from './pages/Sensors';
import { Evacuation } from './pages/Evacuation';
import { ReportHazard } from './pages/ReportHazard';
import { Analytics } from './pages/Analytics';
import { Replay } from './pages/Replay';
import { DataHealth } from './pages/DataHealth';
import { Architecture } from './pages/Architecture';
import { Notifications } from './pages/Notifications';
import { Admin } from './pages/Admin';
import { Login } from './pages/Login';

const MainRouter: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <AppLayout>
      {activeTab === 'landing' && <Landing />}
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'location' && <LocationPage />}
      {activeTab === 'prediction' && <Prediction />}
      {activeTab === 'warnings' && <Warnings />}
      {activeTab === 'sensors' && <Sensors />}
      {activeTab === 'evacuation' && <Evacuation />}
      {activeTab === 'report' && <ReportHazard />}
      {activeTab === 'analytics' && <Analytics />}
      {activeTab === 'replay' && <Replay />}
      {activeTab === 'data-health' && <DataHealth />}
      {activeTab === 'architecture' && <Architecture />}
      {activeTab === 'notifications' && <Notifications />}
      {activeTab === 'admin' && <Admin />}
      {activeTab === 'login' && <Login />}
    </AppLayout>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  );
}
