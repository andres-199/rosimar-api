import { Controller, Get, Param } from '@nestjs/common';
import { OffersService } from './offers.service';

@Controller()
export class OffersController {
  constructor(private offerService: OffersService) {}

  @Get()
  findAll() {
    return this.offerService.findAll();
  }

  @Get('multiple/:limit')
  findMultiple(@Param('limit') limit: number) {
    return this.offerService.findMultiple(limit);
  }
}
