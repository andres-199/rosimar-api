import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PasswordRecoveriesMiddleware } from './password-recoveries.middleware';
import { CommonModule } from '../../common/common.module';
import { PasswordRecoveriesService } from './password-recoveries.service';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
  providers: [PasswordRecoveriesService],
  exports: [PasswordRecoveriesService],
})
export class PasswordRecoveriesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PasswordRecoveriesMiddleware)
      .forRoutes('password_recoveries');
  }
}
