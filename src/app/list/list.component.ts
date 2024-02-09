import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datmodel } from './model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 Employeeform!:FormGroup;
 data:undefined|datmodel[];
  http: any;

  constructor(private formbuilder:FormBuilder,private api:ApiService,http:HttpClient ){

  }
  ngOnInit(){
    this.Employeeform=this.formbuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      pincode:['',Validators.required],
      phonenumber:['',Validators.required]
    })
    this. getemployee();
  }
 addemployee(data:any){
  //console.log(data)
  this.api.addemployee(data).subscribe((res=>{
    this.Employeeform.reset(); 

  }))
this. getemployee();
 }
 getemployee(){
this.api.getemployee().subscribe(res=>{
  this.data=res;
}) }
delete(id:any) { 
  this.api.deleteemployee(id).subscribe((res=>{
this.data=res;
  }))

}

}
