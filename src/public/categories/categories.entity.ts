import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from '../products/products.entity';

@Table({
  schema: 'public',
  tableName: 'categories',
})
export class Category extends Model<Category> {
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

  @Column({ type: DataType.JSON })
  images: JSON;

  @Column
  is_primary: boolean;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @Column
  category_id: number;

  @BelongsTo(() => Category, { as: 'Category', foreignKey: 'category_id' })
  Category: Category;

  @HasMany(() => Product, { as: 'Product', foreignKey: 'category_id' })
  Product: Product[];

  @HasMany(() => Category, { as: 'Categories', foreignKey: 'category_id' })
  Categories: Category[];
}
