import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { User } from '../users/users.entity'

@Table({
	schema: 'public',
	tableName: 'roles',
})

export class Rol extends Model<Rol> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
	})
	id: number



  @Column
	name: string

  @Column
	createdAt: Date

  @Column
	updatedAt: Date



  @HasMany(() => User, { as: 'User', foreignKey: 'rol_id' })
	User: User[]


}
