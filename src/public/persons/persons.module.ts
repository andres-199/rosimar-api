import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PersonsMiddleware } from './persons.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class PersonsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PersonsMiddleware).forRoutes('persons')
  }
}
