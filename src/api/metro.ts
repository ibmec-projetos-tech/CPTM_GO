import { Station, Route, SystemStatus, Line } from '../types/metro';

const lines: Line[] = [
  { id: 'L1', name: 'Linha 1 - Azul', color: '#0455A1', status: 'normal' },
  { id: 'L2', name: 'Linha 2 - Verde', color: '#007E5E', status: 'normal' },
  { id: 'L3', name: 'Linha 3 - Vermelha', color: '#EE1C25', status: 'delayed' },
  { id: 'L4', name: 'Linha 4 - Amarela', color: '#FED100', status: 'normal' },
  { id: 'L5', name: 'Linha 5 - Lilás', color: '#A94F9C', status: 'normal' },
];

const stations: Station[] = [
  { 
    id: '1', 
    name: 'Luz', 
    line: 'L1',
    status: 'normal',
    connections: ['L4'],
    coordinates: { x: 50, y: 50 }
  },
  { 
    id: '2', 
    name: 'República', 
    line: 'L3',
    status: 'normal',
    connections: ['L4'],
    coordinates: { x: 45, y: 55 }
  },
  { 
    id: '3', 
    name: 'Pinheiros', 
    line: 'L4',
    status: 'normal',
    connections: ['L9'],
    coordinates: { x: 30, y: 60 }
  },
  { 
    id: '4', 
    name: 'Sé', 
    line: 'L1',
    status: 'normal',
    connections: ['L3'],
    coordinates: { x: 55, y: 52 }
  },
];

export const fetchStations = async (): Promise<Station[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return stations;
};

export const fetchSystemStatus = async (): Promise<SystemStatus> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    lines,
    lastUpdate: new Date().toLocaleTimeString(),
  };
};

export const calculateRoute = async (
  originId: string,
  destinationId: string
): Promise<Route> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  const origin = stations.find(s => s.id === originId)!;
  const destination = stations.find(s => s.id === destinationId)!;
  
  const usedLines = [
    lines.find(l => l.id === origin.line)!,
    ...(origin.connections.map(c => lines.find(l => l.id === c)!)),
  ];

  return {
    origin,
    destination,
    duration: Math.floor(Math.random() * 30) + 15,
    stops: stations.slice(0, Math.floor(Math.random() * 3) + 2),
    fare: 4.40,
    lines: usedLines,
    transfers: usedLines.length - 1,
  };
};