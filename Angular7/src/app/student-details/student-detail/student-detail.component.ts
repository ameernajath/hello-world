import { Component, OnInit } from '@angular/core';
import { StudentDetailService } from 'src/app/shared/student-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CourseDetailService } from 'src/app/shared/course-detail.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: []
})
export class StudentDetailComponent implements OnInit {
  
  constructor(private service:StudentDetailService,
    private accessCourse: CourseDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.accessCourse.refreshList();
  }
  
  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      STId :0,
      Age : '',
      Address :'',
      Name :'',
      Course :''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.STId==0)
    this.insertRecord(form);
    else
    //Update
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postStudentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted Successfully','Student Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  updateRecord(form:NgForm){
    this.service.putStudentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Updated Successfully','Student Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
