//The app-routing.module.ts is used for Routing accross different pages
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserTableComponent } from './component/user-table/user-table.component';
import { UserViewComponent } from './component/user-view/user-view.component';
//imports here are needed for Routing accross pages 

const routes: Routes = [    //<== This code is the major Routing operator.
  {path: "", component: UserFormComponent},
  {path:"user-view", component: UserViewComponent},
  {path:"user-table", component: UserTableComponent}
];

@NgModule({   //<==RouterModule, Routes must be expressed too.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

