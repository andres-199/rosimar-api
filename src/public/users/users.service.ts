import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { UserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { FindOptions } from 'sequelize/types';
import { User } from './interfaces/user.interface';
import { PasswordRecoveriesService } from '../password-recoveries/password-recoveries.service';

@Injectable()
export class UsersService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize, private passwordRecoveryService: PasswordRecoveriesService) { }

  async findAll() {
    const { User } = this.sequelize.models;
    return User.findAll({ include: ['Person', 'Rol'] }).then(users =>
      users.map(user => {
        const name = `${user['Person'].first_name?.trim() || ''} ${user[
          'Person'
        ].last_name?.trim() || ''}`;
        return {
          name,
          email: user['username'],
          rol: user['Rol'].name,
          id: user['person_id'],
        };
      }),
    );
  }

  async create(user: UserDTO) {
    user.password = await this.hashPass(user.email);
    return this.sequelize.transaction(async transaction => {
      const { User, Person } = this.sequelize.models;
      const person = await Person.create(user, { transaction });
      user.person_id = person['id'];
      user.username = user.email;
      await User.create(user, { transaction });
      return { message: 'Created.' };
    });
  }

  private hashPass(password: string) {
    const saltOrRounds = 10;
    return bcrypt.hash(password, saltOrRounds);
  }

  delete(personId: number) {
    const { Person } = this.sequelize.models;
    return Person.destroy({ where: { id: personId } });
  }

  findOne(username: string) {
    const { User } = this.sequelize.models
    const options: FindOptions = {}
    options.where = { username }
    return User.findOne(options) as Promise<User>
  }



  getUserForAccess(user) {
    user = user?.toJSON()
    const {
      password,
      createdAt,
      updatedAt,
      ...result
    } = user
    return result
  }


  async getUserByVerificationCode(code: string) {
    const validCode = await this.passwordRecoveryService.getValidCode(code)
    const { User } = this.sequelize.models
    const user = await User.findByPk(validCode.user_id)
    if (!user) throw new UnauthorizedException()
    return user
  }
}
