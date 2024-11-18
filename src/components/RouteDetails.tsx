import React from 'react';
import { Route } from '../types/metro';
import { Clock, Train, Wallet, ArrowRight } from 'lucide-react';

interface RouteDetailsProps {
  route: Route;
}

export default function RouteDetails({ route }: RouteDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Detalhes da Viagem</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <Clock className="text-red-600" size={24} />
          <div>
            <p className="text-sm text-gray-600">Tempo</p>
            <p className="font-semibold">{route.duration} min</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Train className="text-red-600" size={24} />
          <div>
            <p className="text-sm text-gray-600">Baldeações</p>
            <p className="font-semibold">{route.transfers}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Wallet className="text-red-600" size={24} />
          <div>
            <p className="text-sm text-gray-600">Tarifa</p>
            <p className="font-semibold">R$ {route.fare.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          {route.stops.map((station, index) => (
            <div key={station.id} className="flex items-start mb-4">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 rounded-full bg-red-600" />
                {index < route.stops.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-300 -mt-2" />
                )}
              </div>
              <div>
                <p className="font-semibold">{station.name}</p>
                <div className="flex items-center space-x-2">
                  {route.lines.map((line) => (
                    <div
                      key={line.id}
                      className="px-2 py-1 rounded text-xs text-white"
                      style={{ backgroundColor: line.color }}
                    >
                      {line.name.split(' - ')[0]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}