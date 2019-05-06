import { Injectable } from '@angular/core';
import { StudentDetail } from './student-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {
  formData:StudentDetail;
  readonly rootURL = 'http://localhost:57598/api';
  list : StudentDetail[];

  constructor(private http:HttpClient) { }

  postStudentDetail(){
  return  this.http.post(this.rootURL+'/StudentDetail',this.formData);
  }

  putStudentDetail(){
  return  this.http.put(this.rootURL+'/StudentDetail/'+ this.formData.STId, this.formData);
  }
  
  deleteStudentDetail(id){
  return  this.http.delete(this.rootURL+'/StudentDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL+'/StudentDetail')
    .toPromise()
    .then(res => this.list = res as StudentDetail[]);
  }
}
