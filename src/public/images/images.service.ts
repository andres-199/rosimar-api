import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ImagesService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  findOne(name: string) {
    const { Image } = this.sequelize.models;
    return Image.findOne({ where: { name: { [Op.iLike]: `%${name}%` } } });
  }

  findMultiple(name: string) {
    const { Image } = this.sequelize.models;
    return Image.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
  }
}
