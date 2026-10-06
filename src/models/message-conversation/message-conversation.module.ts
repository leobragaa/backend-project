import { Module } from '@nestjs/common';
import { MessageConversationGateway } from './message-conversation.gateway.js';

@Module({
  providers: [MessageConversationGateway],
})
export class MessageConversationModule {}
