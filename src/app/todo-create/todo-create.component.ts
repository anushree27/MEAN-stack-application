import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoCreateComponent implements OnInit {

  todo = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveTodo() {
    this.http.post('/todo', this.todo)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/todo-details', id]);
          // this.router.post();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
