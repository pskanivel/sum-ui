import { Component, OnInit } from '@angular/core';
import { Sum } from './sum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {

  num1!: number;
  num2!: number;
  results: any[] = [];

  constructor(private sumService: Sum) {}

  ngOnInit(): void {
    this.loadData();
  }

  add() {
    if (this.num1 == null || this.num2 == null) {
      alert("Please enter both numbers");
      return;
    }

    this.sumService.addNumbers(this.num1, this.num2)
      .subscribe(() => {
        this.loadData();
        this.num1 = 0;
        this.num2 = 0;
      });
  }

  loadData() {
    this.sumService.getAll()
      .subscribe((data: any) => {
        this.results = data;
      });
  }
}