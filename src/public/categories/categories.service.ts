import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CategoriesService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  findAllPrimary() {
    const { Category } = this.sequelize.models;
    return Category.findAll({ where: { is_primary: true } });
  }

  findAllSubcategories(categoryId: number) {
    const { Category } = this.sequelize.models;
    return Category.findAll({ where: { category_id: categoryId } });
  }

  findAllProducts(categoryId: number) {
    const { Product } = this.sequelize.models;

    return Product.findAll({
      include: [
        {
          association: 'Category',
          where: { category_id: categoryId },
          required: true,
          attributes: [],
        },
      ],
    });
  }

  findAllBrands(categoryId: number) {
    const { Brand } = this.sequelize.models;
    return Brand.findAll({
      include: [
        {
          association: 'Product',
          required: true,
          attributes: [],
          include: [
            {
              association: 'Category',
              attributes: [],
              where: { category_id: categoryId },
              required: true,
            },
          ],
        },
      ],
    });
  }
}
