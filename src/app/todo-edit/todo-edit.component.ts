import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoEditComponent implements OnInit {

  todo: any = {};

  constructor(private http: HttpClient,
     private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTodo(this.route.snapshot.params['id']);
  }

  getTodo(id) {
    this.http.get('/todo/' + id).subscribe(data => {
      this.todo = data;
    });
  }

  updateTodo(id, data) {
    this.todo.published_date = Date.now();
    this.http.put('/todo/' + id, this.todo)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/todo-details', id]);
          console.log('hellloooooo');
        }, (err) => {
          console.log(err);
        }
      );
  }

}
