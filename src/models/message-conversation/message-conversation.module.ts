import { Module } from '@nestjs/common';
import { MessageConversationGateway } from './message-conversation.gateway.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatConversa } from './entities/message-chat.entites.js';
import { MassageSend } from './entities/message-conversation.entities.js';

@Module({
  imports: [TypeOrmModule.forFeature([ChatConversa, MassageSend])],
  providers: [MessageConversationGateway],
})
export class MessageConversationModule {}
