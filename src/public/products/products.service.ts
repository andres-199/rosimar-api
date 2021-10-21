import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ProductsService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  findAll() {
    const { Product } = this.sequelize.models;
    return Product.findAll({ include: ['Brand', 'Category'] });
  }
}
