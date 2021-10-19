import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { Role } from '../../common/decorators/rol.decorator';
import { Roles } from '../roles/roles.enum';
import { RolesGuard } from '../roles/roles.guard';
import { UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @Role(Roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() user: UserDTO) {
    return this.usersService.create(user);
  }

  @Get()
  @Role(Roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Delete(':personId')
  @Role(Roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  delete(@Param('personId') personId: number) {
    return this.usersService.delete(personId);
  }
}
