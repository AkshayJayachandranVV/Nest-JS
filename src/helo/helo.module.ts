import { Module } from '@nestjs/common';
import { HeloService } from './helo.service';
import { HeloController } from './helo.controller';

@Module({
  controllers: [HeloController],
  providers: [HeloService],
  exports:[HeloService]
})
export class HeloModule {}
