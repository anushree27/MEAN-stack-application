import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  todos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/todo').subscribe(data => {
      this.todos = data;
    });
  }
  }
