import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from '../products/products.entity';

@Table({
  schema: 'public',
  tableName: 'offers',
})
export class Offer extends Model<Offer> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
  })
  id: number;

  @Column
  product_id: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @BelongsTo(() => Product, { foreignKey: 'product_id', as: 'Product' })
  Product: Product;
}
