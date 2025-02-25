import React from 'react';
import { Tool } from '../types/Tool';
import { ToolCard } from './ToolCard';


export const ToolList = ({ tools }) => {
  return (
    <div className="space-y-4">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};