import { Controller, Get } from '@nestjs/common';
import { OffersService } from './offers.service';

@Controller()
export class OffersController {
  constructor(private offerService: OffersService) {}

  @Get()
  findAll() {
    return this.offerService.findAll();
  }
}
