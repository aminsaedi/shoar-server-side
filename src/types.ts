export interface ServerToClientEvents {
  next: (message: string) => void;
}
export interface ClientToServerEvents {
  shoarFromAdmin: (shoar: string) => void;
  ping: (callback: () => void) => void;
}
export interface InterServerEvents {}
export interface SocketData {}
