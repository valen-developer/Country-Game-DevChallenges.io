import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/domain/country';
import { CountryRepository } from '../services/countryService/countryRepository';
import { QuizStateService } from '../services/quiz-state/quizState.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  public loading = false;
  public countries: Country[] = [];
  public selectedCountry: Country;

  public isAnswered = false;
  public answeredCount = 0;
  private results = 0;

  public form: FormGroup;

  constructor(
    private countryRepository: CountryRepository,
    private fb: FormBuilder,
    private router: Router,
    private quizState: QuizStateService
  ) {
    this.form = fb.group({
      answer: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.setQuestion();
  }

  public onSubmit(): void {
    this.isAnswered = true;
    this.answeredCount++;

    this.checkAnswer();
  }

  public nextQuestion(): void {
    if (this.answeredCount === 10) {
      this.quizState.newResult(this.results);
      this.router.navigateByUrl('/result');
    }

    this.isAnswered = false;
    this.setQuestion();
  }

  public selectAnswerStyle(index: number): void {
    for (let i = 0; i < this.countries.length; i++) {
      const ele = document.getElementById(`${i}`);
      ele.classList.remove('selected');

      if (index === i) ele.classList.add('selected');
    }
  }

  private checkAnswer(): void {
    const capitalInForm = this.form.value.answer;

    for (let i = 0; i < this.countries.length; i++) {
      if (capitalInForm === this.countries[i].capital) {
        const ele = document.getElementById(`${i}`);
        if (capitalInForm !== this.selectedCountry.capital) {
          ele.style.backgroundColor = 'red';
        } else {
          this.results++;
        }
      }

      if (this.selectedCountry.capital === this.countries[i].capital) {
        const ele = document.getElementById(`${i}`);
        ele.style.backgroundColor = 'green';
      }
    }
  }

  private async setQuestion(): Promise<void> {
    this.countries = [];
    this.loading = true;

    for (let i = 0; i < 4; i++) {
      this.countries.push(await this.countryRepository.getRamdonCountry());
    }

    this.selectedCountry = this.countries[Math.floor(Math.random() * 4)];

    this.loading = false;
  }
}
