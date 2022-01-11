import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

interface Filter {
  category?: number[];
  brand?: number[];
  weight?: { quantity: number; unit: string }[];
}

@Injectable()
export class CategoriesService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) { }

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

  filterProducts(categoryId: number, filter: Filter) {
    const { Product } = this.sequelize.models;

    const options = {};
    if (filter.category?.length) options['category_id'] = filter.category;
    if (filter.brand?.length) options['brand_id'] = filter.brand;
    if (filter.weight?.length) {
      for (const weight of filter.weight) {
        options['unit'] = weight.unit
        options['quantity'] = weight.quantity
      }
    }
    return Product.findAll({
      where: options,
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
}
