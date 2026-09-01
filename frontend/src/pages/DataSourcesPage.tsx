import React from 'react';
import { DataSource } from '../types';
import { DataSourcesPipeline } from '../components/DataSourcesPipeline';

export const DataSourcesPage: React.FC<{ dataSources: DataSource[] }> = ({ dataSources }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <DataSourcesPipeline dataSources={dataSources} />
    </div>
  );
};
