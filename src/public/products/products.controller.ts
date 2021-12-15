import { Controller, Get, Param } from '@nestjs/common';
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

  @Get(':id/primary-category')
  findPrimaryCategory(@Param('id') productoId: number) {
    return this.productService.findPrimaryCategory(productoId);
  }
}
