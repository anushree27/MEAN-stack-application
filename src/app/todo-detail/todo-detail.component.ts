import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoDetailComponent implements OnInit {

  todo = {};

  constructor(private router: Router, private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    this.getTodoDetail(this.route.snapshot.params['id']);
  }

  getTodoDetail(id) {
    this.http.get('/todo/' + id).subscribe(data => {
      this.todo = data;
    });
  }

  deleteTodo(id) {
  this.http.delete('/todo/' + id)
    .subscribe(res => {
        this.router.navigate(['/todos']);
      }, (err) => {
        console.log(err);
      }
    );
}

}
