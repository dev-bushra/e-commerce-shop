import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
  
export class AllProductsComponent implements OnInit {

  // Variables
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = []

  constructor(private service: ProductsService) { }

  // ngOnInit Life Cicle
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  // Methods

  filterCategories(event: any) {
    let value = event.target.value;
    console.log(value);

    (value=='all') ? this.getProducts() : this.getProductsCategory(value)
  }

  getCategories() {
    this.loading = true
    this.service.getAllCategories().subscribe((res: any) => {
      this.categories = res
      this.loading = false
      console.log("categories :", this.categories);
    }, error => {
      this.loading = false
      alert("Error")
    })
  }

  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res
      this.loading = false
      console.log("data :", this.products);
    }, error => {
      this.loading = false
      alert("Error")
    })
  }

  getProductsCategory(keyword: string) {
    this.loading = true
    this.service.getProductsByCategories(keyword).subscribe((res: any) => {
      this.products = res
      this.loading = false
    })
  }

  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if (exist) {
        alert("Product already in your cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }

}
