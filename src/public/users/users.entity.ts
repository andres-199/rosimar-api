import { Table, Model, Column, DataType, HasMany, BelongsTo } from 'sequelize-typescript'
import { PasswordRecoveri } from '../password-recoveries/password-recoveries.entity'
import { Person } from '../persons/persons.entity'
import { Rol } from '../roles/roles.entity'

@Table({
	schema: 'public',
	tableName: 'users',
})

export class User extends Model<User> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
	})
	id: number



  @Column
	username: string

  @Column
	password: string

  @Column
	person_id: number

  @Column
	createdAt: Date

  @Column
	updatedAt: Date

  @Column
	rol_id: number


	@BelongsTo(() => Person, { foreignKey: 'person_id', as: 'Person'})
	Person: Person

	@BelongsTo(() => Rol, { foreignKey: 'rol_id', as: 'Rol'})
	Rol: Rol


  @HasMany(() => PasswordRecoveri, { as: 'PasswordRecoveri', foreignKey: 'user_id' })
	PasswordRecoveri: PasswordRecoveri[]


}
