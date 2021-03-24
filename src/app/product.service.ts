import { Injectable,ɵConsole} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { product } from './product';
import { tap } from 'rxjs/operators'
const Url = 'https://5fc5ef3c4931580016e3c560.mockapi.io/api/register';
const httpOptions = {
  headers:new HttpHeaders({'content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient:HttpClient) { }
  // lay ra danh sach
  getAll():Observable<product[]>{
    return this.httpclient.get<product[]>(Url).pipe(
      tap(o=>console.log("ok"))
    )
  }
  // them moi
  create(newObj:product):Observable<product>{
    return this.httpclient.post<product>(Url,newObj,httpOptions).pipe(
      tap(o=> console.log(newObj))
    )
  }

  findOne(id:number):Observable<product>{
    return this.httpclient.get<product>(`${Url}/${id}`).pipe(
      tap(_s=>console.log(id))
    )
  }
  // xoa

  delete(id:any):Observable<product>{
    return this.httpclient.delete<product>(`${Url}/${id}`).pipe(
      tap(_s=>alert("Đã xóa thành công id " +  id))
    )
  }

  // update
  update(id:any,newObj:product):Observable<product>{
    return this.httpclient.put<product>(`${Url}/${id}`,newObj,httpOptions).pipe(
      tap(s=> alert("Sửa thành công"))
    )
  }
}
