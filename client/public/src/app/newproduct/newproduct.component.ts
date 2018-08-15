import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  newProduct:any;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  onSubmit(){
    let observable = this._httpService.createProduct(this.newProduct);
    observable.subscribe(data=>{
      this._router.navigate(['/products']); 
      this.newProduct={title:" ",price: " ", image: " "}
    })
  }

  ngOnInit() {
    this.newProduct={title:" ",price: " ", image: " "}    
  }

}
