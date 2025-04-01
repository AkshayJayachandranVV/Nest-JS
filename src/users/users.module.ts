import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { HeloModule } from 'src/helo/helo.module';

@Module({
  imports:[HeloModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
