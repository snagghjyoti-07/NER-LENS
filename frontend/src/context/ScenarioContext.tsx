
import React, { createContext, useContext, useState, useEffect } from 'react';
import { DemoScenario } from '../types';
import { api } from '../services/api';

interface ScenarioContextType {
  scenarios: DemoScenario[];
  currentScenario: DemoScenario | null;
  isLoading: boolean;
  switchScenario: (scenarioId: string) => Promise<void>;
  isJudgeTourActive: boolean;
  startJudgeTour: () => void;
  stopJudgeTour: () => void;
}

const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined);

export const ScenarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scenarios, setScenarios] = useState<DemoScenario[]>([]);
  const [currentScenario, setCurrentScenario] = useState<DemoScenario | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isJudgeTourActive, setIsJudgeTourActive] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      const list = await api.getScenarios();
      setScenarios(list);
      if (list.length > 0) {
        // default to Heavy Cloudburst (scen-2) or first
        const init = list.find(s => s.id === 'scen-2') || list[0];
        setCurrentScenario(init);
      }
    };
    load();
  }, []);

  const switchScenario = async (scenarioId: string) => {
    setIsLoading(true);
    try {
      const updated = await api.applyScenario(scenarioId);
      setCurrentScenario(updated);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const startJudgeTour = () => setIsJudgeTourActive(true);
  const stopJudgeTour = () => setIsJudgeTourActive(false);

  return (
    <ScenarioContext.Provider value={{
      scenarios,
      currentScenario,
      isLoading,
      switchScenario,
      isJudgeTourActive,
      startJudgeTour,
      stopJudgeTour
    }}>
      {children}
    </ScenarioContext.Provider>
  );
};

export const useScenario = () => {
  const context = useContext(ScenarioContext);
  if (!context) throw new Error('useScenario must be used within a ScenarioProvider');
  return context;
};
