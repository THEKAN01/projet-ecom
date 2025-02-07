import React from 'react';
import { Tool } from '../types/Tool';
import { ToolCard } from './ToolCard';

interface ToolListProps {
  tools: Tool[];
}

export const ToolList: React.FC<ToolListProps> = ({ tools }) => {
  return (
    <div className="space-y-4">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};