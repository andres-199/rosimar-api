import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
	schema: 'public',
	tableName: 'contact',
})

export class Contact  extends Model<Contact> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
	})
	id: number



  @Column
	call: string

  @Column
	whatsapp: string

  @Column
	address: string

  @Column
	email: string

  @Column
	createdAt: Date

  @Column
	updatedAt: Date




}
