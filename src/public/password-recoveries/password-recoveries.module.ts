import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PasswordRecoveriesMiddleware } from './password-recoveries.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class PasswordRecoveriesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PasswordRecoveriesMiddleware).forRoutes('password_recoveries')
  }
}
