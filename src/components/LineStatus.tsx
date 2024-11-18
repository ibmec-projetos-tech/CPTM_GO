import React from 'react';
import { Line } from '../types/metro';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface LineStatusProps {
  lines: Line[];
  lastUpdate: string;
}

const StatusIcon = ({ status }: { status: Line['status'] }) => {
  switch (status) {
    case 'normal':
      return <CheckCircle className="text-green-500" size={20} />;
    case 'delayed':
      return <Clock className="text-yellow-500" size={20} />;
    case 'interrupted':
      return <AlertCircle className="text-red-500" size={20} />;
  }
};

const StatusText = ({ status }: { status: Line['status'] }) => {
  switch (status) {
    case 'normal':
      return <span className="text-green-500">Normal</span>;
    case 'delayed':
      return <span className="text-yellow-500">Atrasada</span>;
    case 'interrupted':
      return <span className="text-red-500">Interrompida</span>;
  }
};

export default function LineStatus({ lines, lastUpdate }: LineStatusProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Status das Linhas</h2>
        <span className="text-sm text-gray-500">
          Atualizado: {lastUpdate}
        </span>
      </div>
      <div className="space-y-3">
        {lines.map((line) => (
          <div
            key={line.id}
            className="flex items-center justify-between p-3 rounded-lg"
            style={{ backgroundColor: `${line.color}15` }}
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-8 rounded"
                style={{ backgroundColor: line.color }}
              />
              <span className="font-medium">{line.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <StatusIcon status={line.status} />
              <StatusText status={line.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}