import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizStateService {
  private score: number = 0;
  private attempts: number = 0;
  private lastResult: number = 0;

  public state: BehaviorSubject<QuizState>;

  constructor() {
    this.getState();

    this.state = new BehaviorSubject<QuizState>({
      attempts: this.attempts,
      lastResult: this.lastResult,
      score: this.score,
    });
  }

  public newResult(result: number): void {
    this.attempts++;
    this.lastResult = result;
    this.calculateMean(result);
    this.saveState();
    this.emit();
  }

  private calculateMean(result: number): void {
    if (this.attempts > 1) this.score = (this.score + result) / 2;
    else this.score = result;
  }

  private emit(): void {
    this.state.next({
      attempts: this.attempts,
      lastResult: this.lastResult,
      score: this.score,
    });
  }

  private getState(): void {
    const score = localStorage.getItem('score');
    const lastResult = localStorage.getItem('lastResult');
    const attempts = localStorage.getItem('attempts');

    if (score && lastResult && attempts) {
      this.attempts = Number(attempts);
      this.score = Number(score);
      this.lastResult = Number(lastResult);
    }
  }

  private saveState(): void {
    localStorage.setItem('score', this.score.toString());
    localStorage.setItem('attempts', this.attempts.toString());
    localStorage.setItem('lastResult', this.lastResult.toString());
  }
}

export interface QuizState {
  score: number;
  attempts: number;
  lastResult: number;
}
