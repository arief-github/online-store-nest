import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// Products Module
import { Product } from './models/product.entity';
import { ProductsService } from './models/product.service';
import { ProductsController } from './products.controller';

// TypeORM Module
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'online_store_nest',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
