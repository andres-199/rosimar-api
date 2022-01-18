import { Controller, Get, Param } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller()
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Get('one/:name')
  findOne(@Param('name') name: string) {
    return this.imagesService.findOne(name);
  }

  @Get(':name')
  findMultiple(@Param('name') name: string) {
    return this.imagesService.findMultiple(name);
  }
}
