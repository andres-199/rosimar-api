import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ContactMiddleware } from './contact.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class ContactModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContactMiddleware).forRoutes('contact')
  }
}
