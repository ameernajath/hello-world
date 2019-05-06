import { Injectable } from '@angular/core';
import { CourseDetail } from './course-detail.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {
  formData:CourseDetail;
  readonly rootURL = 'http://localhost:57598/api';
  list : CourseDetail[];

  constructor(private http:HttpClient) { }

  postCourseDetail(){
  return  this.http.post(this.rootURL+'/CourseDetail',this.formData);
  }

  putCourseDetail(){
  return  this.http.put(this.rootURL+'/CourseDetail/'+ this.formData.CId, this.formData);
  }
  
  deleteCourseDetail(id){
  return  this.http.delete(this.rootURL+'/CourseDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL+'/CourseDetail')
    .toPromise()
    .then(res => this.list = res as CourseDetail[]);
  }

}
