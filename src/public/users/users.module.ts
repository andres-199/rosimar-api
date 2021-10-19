import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersMiddleware } from './users.middleware';
import { CommonModule } from '../../common/common.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PasswordRecoveriesModule } from '../password-recoveries/password-recoveries.module';

@Module({
  imports: [CommonModule, PasswordRecoveriesModule],
  controllers: [UsersController, CommonFunctionsController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsersMiddleware).forRoutes('users');
  }
}
