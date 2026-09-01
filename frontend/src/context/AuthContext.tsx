
import React, { createContext, useContext, useState } from 'react';
import { UserRole } from '../types';

interface AuthContextType {
  role: UserRole;
  userName: string;
  setRole: (role: UserRole) => void;
  setUserName: (name: string) => void;
  availableRoles: { role: UserRole; title: string; description: string; badge: string }[];
}

const ROLES_META: { role: UserRole; title: string; description: string; badge: string }[] = [
  {
    role: 'DISTRICT_OFFICER',
    title: 'District Disaster Management Officer (DDMA)',
    description: 'EOC Operations, priority queues, road blockage tracking, verification, warning issuance.',
    badge: 'DDMA / EOC'
  },
  {
    role: 'STATE_AUTHORITY',
    title: 'State / Regional Authority (SDMA / MDoNER / NESAC)',
    description: 'Cross-district ranking, regional resource movement, macro risk analytics, NDRF coordination.',
    badge: 'SDMA / Regional'
  },
  {
    role: 'FIELD_OFFICER',
    title: 'Field Officer & Patrol (PWD / GREF / Police)',
    description: 'Mobile-first crack observation, geo-tagged photo uploads, offline draft queuing.',
    badge: 'Field Patrol'
  },
  {
    role: 'COMMUNITY',
    title: 'Local Community / Citizen',
    description: 'Simplified danger meters, nearest relief shelters, multilingual guidance, emergency contacts.',
    badge: 'Public View'
  },
  {
    role: 'SYSTEM_ADMIN',
    title: 'System Administrator & GIS Specialist',
    description: 'Data ingestion pipeline telemetry, model threshold calibration, audit trail inspector.',
    badge: 'System Admin'
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('DISTRICT_OFFICER');
  const [userName, setUserName] = useState<string>('Er. Kevich?sa Angami');

  return (
    <AuthContext.Provider value={{
      role,
      userName,
      setRole,
      setUserName,
      availableRoles: ROLES_META
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
