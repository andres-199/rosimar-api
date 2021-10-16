import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { Product } from '../products/products.entity'

@Table({
	schema: 'public',
	tableName: 'brands',
})

export class Brand extends Model<Brand> {

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



  @HasMany(() => Product, { as: 'Product', foreignKey: 'brand_id' })
	Product: Product[]


}
