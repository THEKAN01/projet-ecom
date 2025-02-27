import React from 'react';
import { Tool } from '../types/Tool';



export const ToolCard = ({ tool }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-2xl font-bold mb-2">{tool.name}</h2>
      <p className="text-gray-600 mb-4">{tool.description}</p>
      <div>
        <h3 className="font-semibold mb-2">Avantages:</h3>
        <ul className="list-disc pl-5">
          {tool.advantages.map((advantage, index) => (
            <li key={index} className="text-gray-700">{advantage}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};