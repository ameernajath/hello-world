import { Component, OnInit } from '@angular/core';
import { CourseDetailService } from 'src/app/shared/course-detail.service';
import { CourseDetail } from 'src/app/shared/course-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-detail-list',
  templateUrl: './course-detail-list.component.html',
  styles: []
})
export class CourseDetailListComponent implements OnInit {

  constructor(private service: CourseDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(sd:CourseDetail){
    this.service.formData = Object.assign({},sd);
  }

  onDelete(CId){
    if(confirm('Are you sure to delete this record ?')){
    this.service.deleteCourseDetail(CId)
    .subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted Successfully','Course Detail Register');
    },
      err=>{
        console.log(err);
      }
      )
  }
}

}
