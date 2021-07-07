//User-view controls the major synergy of the API project since it's the view page
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  users: User[] = [];  //initiaizer of User[] is used to make users functional.
  //Note: Always use the user keyword for proffesionalism sake.
  constructor(private _configServe: ConfigService) { } //ConfigService is the constructor for the API JSON data

  ngOnInit(): void {
    this.GetUsers();  // Get method is used to fetch data from the API
  }

  //Code below is used to print the API JSON data on the console.
  GetUsers() {
    this._configServe.getAllUsers().subscribe(res => {  
      console.log("fetched Users ++++++++++")
      console.log("fetched Users ++++++++++", res)
      this.users = res;
      console.log("fetched Users ++++++++++", this.users)
    });
  }

  //Code below is used to delete each row on the API table at user-table component
  delete(id: number) {
    this.users = this.users.filter(_t => _t.id !== id);
    // this.users.slice(id); not needed again
    // this.users.splice(id, 1); not needed again

  }

}
