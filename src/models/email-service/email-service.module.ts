import { Module } from '@nestjs/common';
import { EmailServiceService } from './email-service.service.js';
import { EmailServiceController } from './email-service.controller.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [EmailServiceController],
  providers: [EmailServiceService],
  exports: [EmailServiceService],
})
export class EmailServiceModule {}
