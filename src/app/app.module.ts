//The app.module.ts is highly recognized as the central controller in Angular
//Hence, Every thing imported here is used to functionally work for your Good, depending on nature of project

import { NgModule } from '@angular/core'; //This need not be part of import, since it is the father of All
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
//imports are Above
//declarations are below
import { AppComponent } from './app.component';
import { UserTableComponent } from './component/user-table/user-table.component';
import { UserViewComponent } from './component/user-view/user-view.component';
import { UserFormComponent } from './component/user-form/user-form.component';


@NgModule({
  //what ever declarations done Above, must be expressed here
  declarations: [
    AppComponent,
//The UserTable, UserView, UserForm components and every other component must be delared here.
    UserTableComponent,
    UserViewComponent,
    UserFormComponent
  ],

  imports: [ //what ever is imported Above, must be expressed here
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
     NgbAlertModule
  ],
  providers: [], //Null
  bootstrap: [AppComponent] 
})
export class AppModule { }
