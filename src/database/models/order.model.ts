import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';

@Table
export class Order extends Model<Order> {
    
  @AllowNull(false)
  @Column
  name: string;

  
  @AllowNull(false)
  @Column
  userId: string;

  @AllowNull(false)
  @Column
  address: string;


  @Column
  price: string ;
  
  @Column
  date: Date;

  @Column({
    values: ['pending', 'payment pending', 'processing', 'delivered', 'complete', 'canceled', 'returned'],
  })
  @AllowNull(false)
  status: string

}
