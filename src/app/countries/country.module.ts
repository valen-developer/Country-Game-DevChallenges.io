import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CountryComponent } from './country.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [CountryComponent, QuestionComponent, ResultComponent],
  exports: [CountryComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
})
export class CountryModule {}
