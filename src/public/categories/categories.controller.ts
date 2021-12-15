import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller()
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('primary')
  findAllPrimary() {
    return this.categoriesService.findAllPrimary();
  }

  @Get(':categoryId/subcategories')
  findAllSubcategories(@Param('categoryId') categoryId: number) {
    return this.categoriesService.findAllSubcategories(categoryId);
  }

  @Get(':categoryId/products')
  findAllProducts(@Param('categoryId') categoryId: number) {
    return this.categoriesService.findAllProducts(categoryId);
  }

  @Get(':categoryId/products/brands')
  findAllBrands(@Param('categoryId') categoryId: number) {
    return this.categoriesService.findAllBrands(categoryId);
  }
}
