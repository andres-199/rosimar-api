import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { routes } from './app.routes';
import { PublicModule } from './public/public.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    PublicModule,
    AuthModule
  ],
})
export class AppModule {}
