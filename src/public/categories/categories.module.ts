import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CategoriesMiddleware } from './categories.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class CategoriesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CategoriesMiddleware).forRoutes('categories')
  }
}
