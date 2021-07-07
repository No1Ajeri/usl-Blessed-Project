//User-form.ts needs not be edited in API GET,POST,DELETE,PUT operations. They come Naturally
//only the user-view should be edited since it is the view page.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
