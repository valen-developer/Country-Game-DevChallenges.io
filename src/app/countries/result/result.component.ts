import { Component, OnInit } from '@angular/core';
import {
  QuizState,
  QuizStateService,
} from '../services/quiz-state/quizState.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  public quizState: QuizState = {
    attempts: 0,
    lastResult: 0,
    score: 0,
  };

  constructor(private quizStateService: QuizStateService) {
    this.quizStateService.state.subscribe((state) => {
      this.quizState = state;
    });
  }

  ngOnInit(): void {}

  public isApprovedLastChance(): boolean {
    if (this.quizState.lastResult > 5) return true;
    return false;
  }
}
