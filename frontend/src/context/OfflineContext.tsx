
import React, { createContext, useContext, useState, useEffect } from 'react';
import { get, set } from 'idb-keyval';
import { IncidentCreate } from '../types';
import { api } from '../services/api';

interface OfflineContextType {
  isOnline: boolean;
  offlineQueueCount: number;
  isSyncing: boolean;
  toggleSimulatedOffline: () => void;
  queueOfflineReport: (report: IncidentCreate) => Promise<void>;
  syncNow: () => Promise<void>;
  lastSyncTime: string | null;
}

const OFFLINE_QUEUE_KEY = 'ner_lens_offline_reports';

const OfflineContext = createContext<OfflineContextType | undefined>(undefined);

export const OfflineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [offlineQueueCount, setOfflineQueueCount] = useState<number>(0);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(new Date().toLocaleTimeString());

  // Load existing offline items
  useEffect(() => {
    const checkQueue = async () => {
      const queued = (await get<IncidentCreate[]>(OFFLINE_QUEUE_KEY)) || [];
      setOfflineQueueCount(queued.length);
    };
    checkQueue();

    const handleOnline = () => {
      setIsOnline(true);
      syncNow();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const toggleSimulatedOffline = () => {
    setIsOnline(prev => !prev);
  };

  const queueOfflineReport = async (report: IncidentCreate) => {
    const existing = (await get<IncidentCreate[]>(OFFLINE_QUEUE_KEY)) || [];
    existing.push({
      ...report,
      is_offline_draft: true,
      client_created_at: new Date().toISOString()
    });
    await set(OFFLINE_QUEUE_KEY, existing);
    setOfflineQueueCount(existing.length);
  };

  const syncNow = async () => {
    const queued = (await get<IncidentCreate[]>(OFFLINE_QUEUE_KEY)) || [];
    if (queued.length === 0) return;

    setIsSyncing(true);
    try {
      await api.syncBatchReports(queued);
      await set(OFFLINE_QUEUE_KEY, []);
      setOfflineQueueCount(0);
      setLastSyncTime(new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Sync failed:", err);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <OfflineContext.Provider value={{
      isOnline,
      offlineQueueCount,
      isSyncing,
      toggleSimulatedOffline,
      queueOfflineReport,
      syncNow,
      lastSyncTime
    }}>
      {children}
    </OfflineContext.Provider>
  );
};

export const useOffline = () => {
  const context = useContext(OfflineContext);
  if (!context) throw new Error('useOffline must be used within an OfflineProvider');
  return context;
};
