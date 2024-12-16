import { Component } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  constructor(private productService:ProductService,private router:Router){}
  residence: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    address: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    status:new FormControl('', [])
  })

  get name() {
    return this.product.get('name');
  }

  get description() {
    return this.product.get('description');
  }

  get price() {
    return this.product.get('price')
  }
  


  Add() {
    // console.log(this.name.value)
    // console.log(this.description.value);
    // console.log(this.price.value);
    // console.log(this.status.value);
    console.log(this.product.value)
    this.productService.addProduct(this.product.value);
    this.router.navigate(['/product'])
  }

}
