import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ProductService } from "../product.service";
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id = '';
  formGroup :FormGroup;
  constructor(private productServide:ProductService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      "username":['',Validators.required],
      "emailAddress":['',Validators.required],
      "ConfirmPassword":['',Validators.required],
    })
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.find(this.id);
  }
   // Dữ liệu Form nó null 
  onSubmitForm(){
    
    this.productServide.update(this.id,this.formGroup.value).subscribe((res:any) =>{
      console.log("ok");
      console.log(this.formGroup.value);
      this.router.navigate(['/']);
    });
  }
  find(id){
    this.productServide.findOne(id).subscribe(res=>{
      this.formGroup.setValue({
        username:res.username,
        emailAddress:res.emailAddress,
        ConfirmPassword:res.ConfirmPassword,
      })
    })
  }

}
