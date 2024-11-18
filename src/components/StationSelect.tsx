import React from 'react';
import { Station } from '../types/station';
import { ChevronDown } from 'lucide-react';

interface StationSelectProps {
  label: string;
  stations: Station[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function StationSelect({
  label,
  stations,
  value,
  onChange,
  disabled = false,
}: StationSelectProps) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-8 shadow-sm focus:border-red-500 focus:ring-red-500 disabled:bg-gray-100"
        >
          <option value="">Selecione uma estação</option>
          {stations.map((station) => (
            <option key={station.id} value={station.id}>
              {station.name} - {station.line}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
      </div>
    </div>
  );
}