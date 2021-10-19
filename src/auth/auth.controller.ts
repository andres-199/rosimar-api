import {
  Body,
  Controller,
  Logger,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './localAuth.guard';

@Controller()
export class AuthController {
  logger = new Logger('AuthController');
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('login/with-code')
  async loginWithCode(@Body() { code }) {
    return await this.authService.loginWithCode(code);
  }
}
