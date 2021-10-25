import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ImagesMiddleware } from './images.middleware';
import { CommonModule } from '../../common/common.module';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';

@Module({
  imports: [CommonModule],
  controllers: [ImagesController, CommonFunctionsController],
  providers: [ImagesService],
})
export class ImagesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ImagesMiddleware).forRoutes('images');
  }
}
