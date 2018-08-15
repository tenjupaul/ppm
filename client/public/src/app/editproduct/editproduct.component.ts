import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product:any;

  constructor(
    private _route: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router
  ) { }

  onSubmit(){
    let observable=this._httpService.editProduct(this.product);
    observable.subscribe(data=>{
      this._router.navigate(['']);
    })
  }

  ngOnInit() {
    this.product={}
    this._route.params.subscribe((params: Params) => {
      let observable=this._httpService.getProductById(params['id']);
      observable.subscribe(data =>{
        this.product=data['product']
      })
    });
  }

}
