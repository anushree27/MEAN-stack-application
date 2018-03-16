import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { TodoComponent } from './todo/todo.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { LoginComponent } from './login/login.component';
import { UserviewComponent } from './userview/userview.component';

const appRoutes: Routes = [
  {
    path: 'todos',
    component: TodoComponent,
    data: { title: 'Todo List' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'todo-details/:id',
    component: TodoDetailComponent,
    data: { title: 'Todo Details' }
  },
  {
    path: 'todo-create',
    component: TodoCreateComponent,
    data: { title: 'Create Todo' }
  },
  {
    path: 'todo-edit/:id',
    component: TodoEditComponent,
    data: { title: 'Edit Todo' }
  },
  {
    path: 'user-view',
    component: UserviewComponent,
    data: {title: 'View Assignments'}
  },
  { path: '',
    redirectTo: '/user-view',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TodoComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoDetailComponent,
    LoginComponent,
    UserviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
