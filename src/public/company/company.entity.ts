import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  schema: 'public',
  tableName: 'company',
})
export class Company extends Model<Company> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
  })
  id: number;

  @Column
  mision: string;

  @Column
  vision: string;

  @Column
  corporate_values: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @Column({ type: DataType.JSON })
  images: JSON;

  @Column
  monday_to_friday: string;

  @Column
  saturday: string;

  @Column
  phone: string;

  @Column
  whatsapp: string;

  @Column
  direction: string;

  @Column
  email: string;
}
