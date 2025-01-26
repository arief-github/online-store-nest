import { Render, Get, Controller, Param } from '@nestjs/common';
import { ProductsService } from './models/product.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  @Render('products/index')
  async index() {
    const viewData = [];

    viewData['title'] = 'Products - Online Store';
    viewData['subtitle'] = 'List of Product';
    viewData['products'] = await this.productsService.findAll();

    return {
      viewData: viewData,
    };
  }

  @Get('/:id')
  @Render('products/show')
  async show(@Param() params) {
    const product = await this.productsService.findOne(params.id);
    if (!product) {
      // Throw a redirect error instead
      throw new Error('Redirect to /products'); // Use a redirect filter instead if needed
    }

    const viewData = {
      title: `${product.name} - Online Store`,
      subtitle: `${product.name} - Product Information`,
      product,
    };

    return { viewData };
  }
}
