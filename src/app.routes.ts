import { Routes } from 'nest-router';
import { AuthModule } from './auth/auth.module';
import { publicRoutes } from './public/public.routes';

export const routes: Routes = [
  { path: '', children: publicRoutes },
  { path: 'auth', module: AuthModule },
];
