import React, { useEffect, useState } from 'react';
import { Train, Map } from 'lucide-react';
import StationSelect from './components/StationSelect';
import RouteDetails from './components/RouteDetails';
import LineStatus from './components/LineStatus';
import { fetchStations, fetchSystemStatus, calculateRoute } from './api/metro';
import type { Station, Route, SystemStatus } from './types/metro';

function App() {
  const [stations, setStations] = useState<Station[]>([]);
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [route, setRoute] = useState<Route | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadInitialData = async () => {
      const [stationsData, statusData] = await Promise.all([
        fetchStations(),
        fetchSystemStatus(),
      ]);
      setStations(stationsData);
      setSystemStatus(statusData);
    };
    loadInitialData();

    // Update system status periodically
    const interval = setInterval(async () => {
      const status = await fetchSystemStatus();
      setSystemStatus(status);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleCalculateRoute = async () => {
    if (!origin || !destination) return;
    
    setLoading(true);
    try {
      const routeData = await calculateRoute(origin, destination);
      setRoute(routeData);
    } catch (error) {
      console.error('Error calculating route:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (origin && destination) {
      handleCalculateRoute();
    } else {
      setRoute(null);
    }
  }, [origin, destination]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Train size={32} />
              <div>
                <h1 className="text-2xl font-bold">CPTM GO</h1>
                <p className="text-sm text-red-100">Sistema de Metrô</p>
              </div>
            </div>
            <button className="bg-red-700 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-800 transition-colors">
              <Map size={20} />
              <span>Ver Mapa</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="grid gap-6">
          {systemStatus && (
            <LineStatus
              lines={systemStatus.lines}
              lastUpdate={systemStatus.lastUpdate}
            />
          )}

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Planeje sua Viagem</h2>
            <div className="space-y-6">
              <StationSelect
                label="Estação de Origem"
                stations={stations}
                value={origin}
                onChange={setOrigin}
              />
              
              <StationSelect
                label="Estação de Destino"
                stations={stations.filter(s => s.id !== origin)}
                value={destination}
                onChange={setDestination}
                disabled={!origin}
              />
            </div>
          </div>

          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Calculando melhor rota...</p>
            </div>
          )}

          {route && !loading && <RouteDetails route={route} />}
        </div>
      </main>
    </div>
  );
}

export default App;