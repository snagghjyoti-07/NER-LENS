import React from 'react';
import { DataSource } from '../types';
import { AdminSystemHealth } from '../components/AdminSystemHealth';

export const AdminPage: React.FC<{
  dataSources: DataSource[];
  auditLogs: any[];
}> = ({ dataSources, auditLogs }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <AdminSystemHealth dataSources={dataSources} auditLogs={auditLogs} />
    </div>
  );
};
