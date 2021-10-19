import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller()
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('primary')
  findAllPrimary() {
    return this.categoriesService.findAllPrimary();
  }
}
