import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { BrandsMiddleware } from './brands.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class BrandsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BrandsMiddleware).forRoutes('brands')
  }
}
