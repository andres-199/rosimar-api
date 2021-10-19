import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CategoriesService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  findAllPrimary() {
    const { Category } = this.sequelize.models;
    return Category.findAll({ where: { is_primary: true } });
  }
}
