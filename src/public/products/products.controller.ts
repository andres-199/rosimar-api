import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('offers')
  findAllOffers() {
    return this.productService.findAllOffers();
  }
}
