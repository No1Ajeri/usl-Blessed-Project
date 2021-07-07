//User-table.ts needs not be edited in API GET,POST,DELETE,PUT operations. They come Naturally
//only the user-view should be edited since it is the view page.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
