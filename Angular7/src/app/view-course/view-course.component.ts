// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CourseDetail } from '../shared/course-detail.model';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  // styleUrls: ['./view-course.component.css']
  styles: []
})
export class ViewCourseComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  @Input() course: CourseDetail;

  private coursesUrl = 'http://localhost:57598/api/CourseDetail';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCourse();
  }

   /** GET course by Id. Will 404 if Id not found */
   getCourse2(Id: number): Observable<CourseDetail> {
    const url = `${this.coursesUrl}/${Id}`;
    return this.http.get<CourseDetail>(url);
  }

  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCourse2(id)
      .subscribe(course => this.course = course);
  }

  goBack(): void {
    this.location.back();
  }

 

   

}
