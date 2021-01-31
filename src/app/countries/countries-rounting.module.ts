import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { CountryComponent } from './country.component';

const countriesRoutes: Routes = [
  {
    path: '',
    component: CountryComponent,
    children: [
      { path: 'quiz', component: QuestionComponent },
      { path: 'result', component: ResultComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'quiz' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(countriesRoutes)],
  exports: [RouterModule],
})
export class CountriesRountingModule {}
