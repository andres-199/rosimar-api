import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CategoriesMiddleware } from './categories.middleware';
import { CommonModule } from '../../common/common.module';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports: [CommonModule],
  controllers: [CategoriesController, CommonFunctionsController],
  providers: [CategoriesService],
})
export class CategoriesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CategoriesMiddleware).forRoutes('categories');
  }
}
