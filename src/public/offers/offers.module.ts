import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { OffersMiddleware } from './offers.middleware';
import { CommonModule } from '../../common/common.module';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';

@Module({
  imports: [CommonModule],
  controllers: [OffersController, CommonFunctionsController],
  providers: [OffersService],
})
export class OffersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(OffersMiddleware).forRoutes('offers');
  }
}
