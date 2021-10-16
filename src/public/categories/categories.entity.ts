import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { Product } from '../products/products.entity'

@Table({
	schema: 'public',
	tableName: 'categories',
})

export class Categori extends Model<Categori> {

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

  @Column({ type: DataType.JSON })
	images: JSON

  @Column
	is_primary: boolean

  @Column
	createdAt: Date

  @Column
	updatedAt: Date



  @HasMany(() => Product, { as: 'Product', foreignKey: 'category_id' })
	Product: Product[]


}
