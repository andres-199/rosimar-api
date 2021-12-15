import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ProductsService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  findAll() {
    const { Product } = this.sequelize.models;
    return Product.findAll({ include: ['Brand', 'Category'] });
  }

  findAllOffers() {
    const { Product } = this.sequelize.models;
    return Product.findAll({
      include: [{ association: 'Offer', required: true }],
    });
  }

  findPrimaryCategory(productId: number) {
    const { Category } = this.sequelize.models;
    return Category.findOne({
      include: [
        {
          association: 'Categories',
          required: true,
          include: [
            {
              association: 'Product',
              where: { id: productId },
              required: true,
            },
          ],
        },
      ],
    });
  }
}
