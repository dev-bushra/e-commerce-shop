import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
  
export class ProductsService {

  constructor(private http: HttpClient) { }

  // API call to get all categories
  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories')
  }

  // API call to get all products
  getAllProducts() {
    return this.http.get(environment.baseApi + 'products')
  }

  // API call to get all products by its categories
   getProductsByCategories(keyword: string) {
    return this.http.get(environment.baseApi + 'products/category' + keyword)
  }
}
