import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { OffersMiddleware } from './offers.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class OffersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(OffersMiddleware).forRoutes('offers')
  }
}
