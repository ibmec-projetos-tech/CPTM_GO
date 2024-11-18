export interface Station {
  id: string;
  name: string;
  line: string;
  connections: string[];
}

export interface Route {
  origin: Station;
  destination: Station;
  duration: number;
  stops: number;
}