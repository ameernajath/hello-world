import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
// import { StudentsComponent }      from './students/students.component';
// import { StudentDetailComponent }  from './student-detail/student-detail.component';

// import { CoursesComponent }      from './courses/courses.component';
import { ViewCourseComponent } from './view-course/view-course.component';


const routes: Routes = [
  { path: '', redirectTo: '/StudentDetails', pathMatch: 'full' },
  { path: 'StudentDetails', component: StudentDetailsComponent },
  { path: 'CourseDetails', component: CourseDetailsComponent },
  { path: 'ViewCourse/:id', component: ViewCourseComponent },
//   { path: 'detail/:id', component: StudentDetailComponent },
//   { path: 'courses', component: CoursesComponent },
//   { path: 'coursedetail/:id', component: CourseDetailComponent },
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}