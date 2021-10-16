import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ProductsMiddleware } from './products.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProductsMiddleware).forRoutes('products')
  }
}
