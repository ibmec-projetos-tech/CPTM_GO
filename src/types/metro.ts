export interface Station {
  id: string;
  name: string;
  line: string;
  status: 'normal' | 'delayed' | 'interrupted';
  connections: string[];
  coordinates: {
    x: number;
    y: number;
  };
}

export interface Line {
  id: string;
  name: string;
  color: string;
  status: 'normal' | 'delayed' | 'interrupted';
}

export interface Route {
  origin: Station;
  destination: Station;
  duration: number;
  stops: Station[];
  fare: number;
  lines: Line[];
  transfers: number;
}

export interface SystemStatus {
  lines: Line[];
  lastUpdate: string;
}