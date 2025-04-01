import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HeloModule } from './helo/helo.module';

@Module({
  imports: [UsersModule, HeloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
