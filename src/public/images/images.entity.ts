import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  schema: 'public',
  tableName: 'images',
})
export class Image extends Model<Image> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
  })
  id: number;

  @Column
  path: string;

  @Column
  name: string;

  @Column
  original_name: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
