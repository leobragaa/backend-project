import { Module } from '@nestjs/common';
import { EmailService } from './email-service.service.js';
import { EmailServiceController } from './email-service.controller.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [EmailServiceController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailServiceModule {}
