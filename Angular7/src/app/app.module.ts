import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule }     from './app-routing.module';


import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentDetailComponent } from './student-details/student-detail/student-detail.component';
import { StudentDetailListComponent } from './student-details/student-detail-list/student-detail-list.component';
import { StudentDetailService } from './shared/student-detail.service';

import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDetailComponent } from './course-details/course-detail/course-detail.component';
import { CourseDetailListComponent } from './course-details/course-detail-list/course-detail-list.component';
import { CourseDetailService } from './shared/course-detail.service';
import { ViewCourseComponent } from './view-course/view-course.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentDetailComponent,
    StudentDetailListComponent,
    CourseDetailsComponent,
    CourseDetailComponent,
    CourseDetailListComponent,
    ViewCourseComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    
  ],
  // providers: [StudentDetailService,CourseDetailService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
