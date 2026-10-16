import { Logger } from '@nestjs/common';
import {
  Ack,
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
@WebSocketGateway({
  namespace: '/message-conversation',
  cors: {
    origin: 'http://localhost:3000',
  },
})
export class MessageConversationGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('MessageConversationGateway');

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ) {
    this.server.emit('msgToClient', payload, client.id);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connect: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnect: ${client.id}`);
  }
}
