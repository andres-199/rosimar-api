import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ImagesService } from './images.service';

@Controller()
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Get('one/:name')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('name') name: string) {
    return this.imagesService.findOne(name);
  }

  @Get(':name')
  @UseGuards(JwtAuthGuard)
  findMultiple(@Param('name') name: string) {
    return this.imagesService.findMultiple(name);
  }
}
