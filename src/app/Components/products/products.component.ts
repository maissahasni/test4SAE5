import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  x: Product = new Product();
  show: boolean = false;
  listProducts: Product[] = [];

  

  selectProduct(r: product) {
    if (r.description == 'inconnu') {
      alert('description inconnu');
    }
    else {
      this.show = true;
      this.x = r;
    }
  }


  searchText: string = ''
  
  filterProduct() {
    return this.listProducts.filter(
      (e) => e.description.toLowerCase()
        .includes(this.searchText.toLowerCase())
    )
  }
}
