import { Module } from '@nestjs/common';
import { EmailServiceService } from './email-service.service.js';
import { EmailServiceController } from './email-service.controller.js';

@Module({
  controllers: [EmailServiceController],
  providers: [EmailServiceService],
  exports: [EmailServiceService],
})
export class EmailServiceModule {}
