import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datmodel } from './list/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }
  //add employee//
  addemployee(data:datmodel){
    return this.http.post<datmodel>("http://localhost:3000/posts/",data)
  }
    //get employee//
    getemployee(){
      return this.http.get<datmodel[]>("http://localhost:3000/posts/");
    }
    //delete//
    deleteemployee(id:number){
      return this.http.delete<datmodel[]>("http://localhost:3000/posts/"+id);
  
    }
    //fetch data
    fetchdata(id:number){
      return this.http.get<datmodel>("http://localhost:3000/posts/"+id);
    }
    //updat emplyee
    updatemplyee(data:datmodel,id:number){
return this.http.put<datmodel>("http://localhost:3000/posts/"+id,data);
    }


}
