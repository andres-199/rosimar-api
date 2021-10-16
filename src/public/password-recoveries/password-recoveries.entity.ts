import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { User } from '../users/users.entity'

@Table({
	schema: 'public',
	tableName: 'password_recoveries',
})

export class PasswordRecoveri extends Model<PasswordRecoveri> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
	})
	id: number



  @Column
	user_id: number

  @Column
	verification_code: string

  @Column
	use_date: Date

  @Column
	expiration_date: Date

  @Column
	createdAt: Date

  @Column
	updatedAt: Date


	@BelongsTo(() => User, { foreignKey: 'user_id', as: 'User'})
	User: User



}
