import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { User } from '../users/users.entity'

@Table({
	schema: 'public',
	tableName: 'persons',
})

export class Person extends Model<Person> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
	})
	id: number



  @Column
	first_name: string

  @Column
	last_name: string

  @Column
	createdAt: Date

  @Column
	updatedAt: Date



  @HasMany(() => User, { as: 'User', foreignKey: 'person_id' })
	User: User[]


}
