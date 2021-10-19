import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() user: UserDTO) {
    return this.usersService.create(user);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Delete(':personId')
  delete(@Param('personId') personId: number) {
    return this.usersService.delete(personId);
  }
}
