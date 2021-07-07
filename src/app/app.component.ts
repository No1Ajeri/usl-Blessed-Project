//App.component.ts needs not be edited in API GET,POST,DELETE,PUT operations. They come Naturally
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usl-jude';
}



//The Major .ts files needed in API Routing operations includes:

//config.service.ts      to functionalize the API URL into the http client.
//user.ts                to declare All the elements in the JSON data.
//app.module.ts          to supervise All components.
//app-routing.module.ts  to fuctionalize page Routing.
//user-view.component.ts has ALL the operations of API GET,POST,DELETE, and PUT operations.