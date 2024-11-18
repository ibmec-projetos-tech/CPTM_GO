import { Station, Route } from '../types/station';

// Simulated API data
const stations: Station[] = [
  { id: '1', name: 'Brás', line: 'Line 10', connections: ['Line 11', 'Line 12'] },
  { id: '2', name: 'Luz', line: 'Line 10', connections: ['Line 11', 'Line 7'] },
  { id: '3', name: 'Pinheiros', line: 'Line 9', connections: ['Line 4'] },
  { id: '4', name: 'Tamanduateí', line: 'Line 10', connections: ['Line 2'] },
  { id: '5', name: 'Mauá', line: 'Line 10', connections: [] },
  { id: '6', name: 'Santo André', line: 'Line 10', connections: [] },
  { id: '7', name: 'Osasco', line: 'Line 8', connections: ['Line 9'] },
  { id: '8', name: 'Júlio Prestes', line: 'Line 8', connections: [] },
];

export const fetchStations = async (): Promise<Station[]> => {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return stations;
};

export const calculateRoute = async (
  originId: string,
  destinationId: string
): Promise<Route> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  const origin = stations.find(s => s.id === originId)!;
  const destination = stations.find(s => s.id === destinationId)!;
  
  // Simplified route calculation
  return {
    origin,
    destination,
    duration: Math.floor(Math.random() * 30) + 15,
    stops: Math.floor(Math.random() * 5) + 1,
  };
};