import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { product } from '../product';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup :FormGroup;
  constructor(private productServide:ProductService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({  //formGroup
      "username":['',[Validators.required,Validators.minLength(8)]],  //formControl
      "emailAddress":['',[Validators.required,Validators.minLength(8)]], //formControl
      "ConfirmPassword":['',[Validators.required,Validators.minLength(8)]], //formControl
    })
  }
  onSubmitForm(){
    console.log(this.formGroup.value);
    this.productServide.create(this.formGroup.value).subscribe((res:any) =>{
      console.log("ok");
      this.router.navigate(['/']);
    });
  }
  register(){
    // kiem tra form hop le
    if(this.formGroup.invalid){
      Object.keys(this.formGroup.controls).forEach(field =>{
        const control = this.formGroup.get(field); 
        control.markAllAsTouched();
      })
    }else {
      alert('dang nhap thanh cong!')
    }
  }

}
