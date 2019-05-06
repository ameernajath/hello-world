import { Component, OnInit } from '@angular/core';
import { StudentDetailService } from 'src/app/shared/student-detail.service';
import { StudentDetail } from 'src/app/shared/student-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-detail-list',
  templateUrl: './student-detail-list.component.html',
  styles: []
})
export class StudentDetailListComponent implements OnInit {

  constructor(private service: StudentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(sd:StudentDetail){
    this.service.formData = Object.assign({},sd);
  }

  onDelete(STId){
    if(confirm('Are you sure to delete this record ?')){
    this.service.deleteStudentDetail(STId)
    .subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted Successfully','Student Detail Register');
    },
      err=>{
        console.log(err);
      }
      )
  }
}

}
