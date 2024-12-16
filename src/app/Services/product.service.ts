import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  listProducts: Product[] = [
    {
      id: 1,
      name: 'parfum',
      description: 'lancome',
      price: 500,
      available: true,
      likes: 5
    },
    {
      id: 2,
      name: 'makeup',
      description: 'ysl',
      price: 1000,
      available: true,
      likes: 10
    }
   
  ];
  constructor() { }
  
  addProducts(product:Product) {
    this.listProducts.push(product)
  }
}
