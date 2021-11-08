import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class OffersService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  findAll() {
    const { Offer } = this.sequelize.models;
    return Offer.findAll({ include: ['Product'] });
  }

  findMultiple(limit: number) {
    const { Offer } = this.sequelize.models;
    return Offer.findAll({ include: ['Product'], limit });
  }
}
