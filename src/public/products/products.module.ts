import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ProductsMiddleware } from './products.middleware';
import { CommonModule } from '../../common/common.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [CommonModule],
  controllers: [ProductsController, CommonFunctionsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProductsMiddleware).forRoutes('products');
  }
}
