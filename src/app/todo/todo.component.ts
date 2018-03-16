import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any;
  showplus: boolean;
  constructor(private http: HttpClient) { this.showplus = false; }

  ngOnInit() {
    this.http.get('/todo').subscribe(data => {
    this.todos = data;
  });

  }

  login1() {
    this.showplus = true;
  }


}
