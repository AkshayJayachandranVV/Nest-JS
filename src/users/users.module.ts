import { Module,MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { HeloModule } from 'src/helo/helo.module';
import { LoggerMiddleware } from 'src/middleware/logger/logger.middleware';

@Module({
  imports:[HeloModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UsersController);
  }
}
