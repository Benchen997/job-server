import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST'],
  },
})
export class JobGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('JobsGateway');

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway Initialized');
    server.emit('connection', 'WebSocket Gateway Initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // Custom methods to emit events
  emitJobAdded(job: any) {
    this.server.emit('jobAdded', job);
  }

  emitJobUpdated(job: any) {
    this.server.emit('jobUpdated', job);
  }
}
