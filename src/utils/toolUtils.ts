import { Tool } from '../types/Tool';

export const sortToolsById = (tools: Tool[]): Tool[] => {
  return [...tools].sort((a, b) => a.id - b.id);
};

export const filterToolsByName = (tools: Tool[], searchTerm: string): Tool[] => {
  return tools.filter((tool) => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};