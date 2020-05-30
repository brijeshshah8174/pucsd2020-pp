import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';




const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "create"},
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  },
  {
    path: 'read',
    component: ReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
