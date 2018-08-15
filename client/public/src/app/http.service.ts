import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createProduct(newProduct){
    return this._http.post('/product',newProduct)
  }
  getProducts(){
    return this._http.get('/product')
  }
  deleteProduct(id){
    return this._http.delete(`/product/${id}`)
  }
  getProductById(id){
    return this._http.get(`/product/${id}`)
  }
  editProduct(product){
    return this._http.put(`/product/${product._id}`,product)
  }
}
