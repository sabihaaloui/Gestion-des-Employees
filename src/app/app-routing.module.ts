import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {path:"list",component:ListComponent},
  {path:"",redirectTo:"list",pathMatch:"full"},
  {path:"update/:id",component:UpdateComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
