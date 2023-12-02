import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ngx-drag-drop';

import { QuestionRoutingModule } from './question-routing.module';
import { ListQuestionComponent } from './list-question/list-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { DetailQuestionComponent } from './detail-question/detail-question.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { QuestionCategoryTreeComponent } from './question-category-tree/question-category-tree.component';


@NgModule({
  declarations: [
    ListQuestionComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    DetailQuestionComponent,
    QuestionCategoryTreeComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    CollapseModule.forRoot(),
    DndModule
  ]
})
export class QuestionModule { }
