import { Component, OnInit } from '@angular/core';
import { CourseDetailService } from 'src/app/shared/course-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-detailed',
  templateUrl: './course-detailed.component.html',
  styles: []
})
export class CourseDetailedComponent implements OnInit {

  constructor(private service:CourseDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      CId :0,
      Name : '',
      Subjects :'',
      Duration :'',
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.CId==0)
    this.insertRecord(form);
    else
    //Update
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postCourseDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted Successfully','Course Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  updateRecord(form:NgForm){
    this.service.putCourseDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Updated Successfully','Course Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
