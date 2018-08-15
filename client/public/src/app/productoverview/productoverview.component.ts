import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-productoverview',
  templateUrl: './productoverview.component.html',
  styleUrls: ['./productoverview.component.css']
})
export class ProductoverviewComponent implements OnInit {

  products:any;

  constructor(private _httpService: HttpService) { }

  getProducts(){
    let observable=this._httpService.getProducts();
    observable.subscribe(data => {
      this.products=data['products']
    })
  }

  deleteAuthor(_id){
    let observable=this._httpService.deleteProduct(_id);
    observable.subscribe(data => {
      this.getProducts()
    })
  }

  ngOnInit() {
    this.getProducts()
  }

}
