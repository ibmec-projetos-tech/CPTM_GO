import React from 'react';
import { Route } from '../types/station';
import { Clock, Train } from 'lucide-react';

interface RouteResultProps {
  route: Route;
}

export default function RouteResult({ route }: RouteResultProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Informações da Viagem</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Clock className="text-red-600" size={24} />
          <div>
            <p className="text-sm text-gray-600">Tempo estimado</p>
            <p className="font-semibold">{route.duration} minutos</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Train className="text-red-600" size={24} />
          <div>
            <p className="text-sm text-gray-600">Paradas</p>
            <p className="font-semibold">{route.stops} estações</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-600">Origem</p>
              <p className="font-semibold">{route.origin.name}</p>
              <p className="text-sm text-gray-500">{route.origin.line}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600">Destino</p>
              <p className="font-semibold">{route.destination.name}</p>
              <p className="text-sm text-gray-500">{route.destination.line}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}