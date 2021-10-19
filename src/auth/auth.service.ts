import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../public/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    let user = await this.userService.findOne(username);

    if (user) {
      const passwordIsValid = await bcrypt.compare(pass, user.password);
      if (passwordIsValid) {
        user = this.userService.getUserForAccess(user);
        return user;
      }
    }
    return null;
  }

  async loginWithCode(code: string) {
    let user = await this.userService.getUserByVerificationCode(code);
    user = this.userService.getUserForAccess(user);
    return this.login(user);
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
