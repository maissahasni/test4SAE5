import { Component } from '@angular/core';

@Component({
  selector: 'app-consult-products',
  templateUrl: './consult-products.component.html',
  styleUrls: ['./consult-products.component.css']
})
export class ConsultProductsComponent {
  listProducts: Product[] = [];

  id!: number;
  selectedProduct: Product = new Product();
  currentIndex: number = 0;
  constructor(
    private a: ActivatedRoute,
    private r: Router,
    private productService: productService
  ) {
    this.listProducts = this.productService.listProducts;
    console.log(this.a.snapshot);
    this.id = this.a.snapshot.params['id'];
    this.selectedProduct = this.listProducts.find((r) => r.id == this.id)!;
    this.currentIndex = this.listProducts.findIndex((r) => r.id == this.id);
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.r.navigate([
        '/details/',
        this.listProducts[this.currentIndex]['id'],
      ]);
      this.selectedProduct = this.listProducts[this.currentIndex];
    }
  }
  next() {
    if (this.currentIndex < this.listProducts.length - 1) {
      this.currentIndex++;
      this.r.navigate([
        '/details/',
        this.listProducts[this.currentIndex]['id'],
      ]);
      this.selectedProduct = this.listProducts[this.currentIndex];
    }
  }
}
