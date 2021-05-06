import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineComponent } from './inline/inline.component';

const routes: Routes = [
  {
    path: "", component: InlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
