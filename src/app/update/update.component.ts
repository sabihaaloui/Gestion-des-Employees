import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router, } from '@angular/router';
import { ApiService } from '../api.service';
import { datmodel } from '../list/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public dataid!:number;
  public employee!:datmodel;
  constructor(private activatedroute:ActivatedRoute,private router:Router,private api:ApiService){

  }
  ngOnInit():void{
    this.activatedroute.paramMap.subscribe((param:Params)=>{
    this.dataid=param['get']("id");
//console.log("data is dataid",this.dataid);
    })
    this.api.fetchdata(this.dataid).subscribe((data:datmodel)=>{

this.employee = data;

    })
 
  }

  update(){
    this.api.updatemplyee(this.employee,this.dataid).subscribe((res:datmodel)=>{
      this.router.navigate(["/"])

    })

  }
}
