import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCourseComponent } from './list-course/list-course.component';
import { InfoCourseComponent } from './info-course/info-course.component';
import { ContentCourseComponent } from './content-course/content-course.component';

const routes: Routes = [
  {
    path: '',
    component: ListCourseComponent
  },
  {
    path: 'info',
    component: InfoCourseComponent
  },
  {
    path: 'lesson',
    component: ContentCourseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
