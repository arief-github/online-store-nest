import { Render, Get, Controller, Param } from '@nestjs/common';

@Controller('/products')
export class ProductsController {
  static products = [
    {
      id: '1',
      name: 'TV',
      description: 'Best tv',
      image: 'game.png',
      price: '1000',
    },
    {
      id: '2',
      name: 'iPhone',
      description: 'Best iPhone',
      image: 'safe.png',
      price: '999',
    },
    {
      id: '3',
      name: 'Chromecast',
      description: 'Best Chromecast',
      image: 'submarine.png',
      price: '30',
    },
    {
      id: '4',
      name: 'Glasses',
      description: 'Best Glasses',
      image: 'game.png',
      price: '100',
    },
  ];

  @Get('/')
  @Render('products/index')
  index() {
    const viewData = [];

    viewData['title'] = 'Products - Online Store';
    viewData['subtitle'] = 'List of Product';
    viewData['products'] = ProductsController.products;

    return {
      viewData: viewData,
    };
  }

  @Get('/:id')
  @Render('products/show')
  show(@Param('id') id: string) {
    const product = ProductsController.products.find((p) => p.id === id);
    if (!product) {
      // Handle product not found case
      return {
        viewData: {
          title: 'Product Not Found - Online Store',
          subtitle: 'Product Not Found',
          product: null,
        },
      };
    }

    const viewData = [];

    viewData['title'] = product.name + ' - Online Store';
    viewData['subtitle'] = product.name + ' - Product Information';
    viewData['product'] = product;

    return {
      viewData: viewData,
    };
  }
}
