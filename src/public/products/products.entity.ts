import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Offer } from '../offers/offers.entity';
import { Brand } from '../brands/brands.entity';
import { Category } from '../categories/categories.entity';

@Table({
  schema: 'public',
  tableName: 'products',
})
export class Product extends Model<Product> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
  })
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  brand_id: number;

  @Column
  category_id: number;

  @Column
  primary_category_id: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @Column
  quantity: number;

  @Column
  unit: string;

  @Column({ type: DataType.JSON })
  images: JSON;

  @BelongsTo(() => Brand, { foreignKey: 'brand_id', as: 'Brand' })
  Brand: Brand;

  @BelongsTo(() => Category, { foreignKey: 'category_id', as: 'Category' })
  Category: Category;

  @HasMany(() => Offer, { as: 'Offer', foreignKey: 'product_id' })
  Offer: Offer[];
}
