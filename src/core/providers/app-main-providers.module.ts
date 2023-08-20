import { Module } from '@nestjs/common';
import { authorsProviders } from './authors.providers';
import { authorsBooksProviders } from './authors-books.providers';
import { booksProviders } from './books.providers';
import { categoriesProviders } from './categories.providers';
import { categoriesBooksProviders } from './categories-books.providers';
import { ordersBooksProviders } from './orders-books.providers';
import { ordersProviders } from './orders.providers';
import { usersProviders } from './users.providers';
import { publishingsProviders } from './publishing.providers';
import { publishingBooksProviders } from './publishing-books.provider';

@Module({

    providers: [
        ...authorsProviders,
        ...authorsBooksProviders,
        ...booksProviders,
        ...categoriesProviders,
        ...categoriesBooksProviders,
        ...ordersBooksProviders,
        ...ordersProviders,
        ...usersProviders,
        ...publishingsProviders,
        ...publishingBooksProviders
    ],
    exports: [
        ...authorsProviders,
        ...authorsBooksProviders,
        ...booksProviders,
        ...categoriesProviders,
        ...categoriesBooksProviders,
        ...ordersBooksProviders,
        ...ordersProviders,
        ...usersProviders,
        ...publishingsProviders,
        ...publishingBooksProviders
    ]
})
export class ProvidersModule { }