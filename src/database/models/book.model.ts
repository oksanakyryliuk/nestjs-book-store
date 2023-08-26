import { Column, Model, Table, DataType, AllowNull, ForeignKey } from 'sequelize-typescript';
import { CategoryBook } from './category-book.model';
import { AuthorBook } from './author-book.model';
import { Category } from './category.model';
import { Author } from './author.model';
import { BelongsToMany, BelongsTo } from 'sequelize-typescript';
import { Publishing } from './publishing.model';

@Table({
  tableName: 'books'  
})
export class Book extends Model<Book> {


    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column(DataType.TEXT('medium')) 
    image: string   
    
    @AllowNull(false)
    @Column
    language: string;

   
    @ForeignKey(()=> Publishing)
    @AllowNull(false)
    @Column
  //   ({
  //     type: DataType.INTEGER,
  //     allowNull: false,
  //     defaultValue: null,
  //     references:{
  //       model: Publishing,
  //       key: 'id'}
  // })
    publishingId: number;


    @AllowNull(false)
    @Column({
        type: DataType.DATE,
        allowNull: false,
      })
      publicateDate: Date;
    
    
    @AllowNull(false)
    @Column
    pages: number;

    @AllowNull(false)
    @Column
    price: number;

    @BelongsToMany(() => Category, { as: 'bookCategories', through: () => CategoryBook, foreignKey: 'bookId' })
    bookCategories: Category[];

    @BelongsToMany(() => Author, { as: 'bookAuthors', through: () => AuthorBook, foreignKey: 'bookId' })
    bookAuthors: Author[];

    // @BelongsTo( () => Publishing ,{ foreignKey: 'publishingId'})
    // publishing: Publishing;

    // toJSON(): any {
    //     const values = Object.assign({}, this.get());
    
    //     delete values.image;
    //     return values;
    //   }


}