import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CompanyMiddleware } from './company.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class CompanyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CompanyMiddleware).forRoutes('company')
  }
}
