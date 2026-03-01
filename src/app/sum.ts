import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Sum {

  // ⚠ Replace with your actual .NET port
  private apiUrl = 'https://localhost:7051/api/sum';

  constructor(private http: HttpClient) { }

  addNumbers(num1: number, num2: number) {
    return this.http.post(`${this.apiUrl}?num1=${num1}&num2=${num2}`, {});
  }

  getAll() {
    return this.http.get(this.apiUrl);
  }
}