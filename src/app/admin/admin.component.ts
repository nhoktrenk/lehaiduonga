import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { product } from '../product';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  datas:product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getproduct();
  }
  getproduct(){
    this.productService.getAll().subscribe((res:any)=>{
      this.datas = res;
    })
  }
  deleteProduct(id:any){
    this.productService.delete(id).subscribe(res=>{
      this.getproduct()
    })
  }
}
