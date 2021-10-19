import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { FindOptions } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import * as sequelise from 'sequelize';
import { PasswordRecovery } from './interfaces/password-recovery.interface';

@Injectable()
export class PasswordRecoveriesService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  async getValidCode(code: string): Promise<PasswordRecovery> {
    const { PasswordRecoveri } = this.sequelize.models;
    const options: FindOptions = {};
    const today = new Date();
    const Op = sequelise.Op;
    options.where = {
      codigo_verificacion: code,
      fecha_uso: null,
      fecha_expiracion: { [Op.gt]: today },
    };
    const validCode = await PasswordRecoveri.findOne(options);

    if (!validCode) throw new UnauthorizedException();

    await validCode.update({ fecha_uso: today });

    return validCode.toJSON();
  }
}
