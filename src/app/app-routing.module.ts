import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [{
  path: '', component: IntroComponent
},
{path: "todo", component: TodoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
