import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './services/user-info.service';

export class user{
  constructor(public  username:string,public  userrole:string){

  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'UserAuthorizer';
  userIn:user;
  userList:user[];

  heading="PLEASE USE THIS TEST USERS for testing routes";

  constructor(private userServe:UserInfoService){

  }

  ngOnInit(){
    this.userList=this.userServe.getUsers();
    
    console.log(this.userServe.getUsers());
    console.log("userIn");
  }

  OnUser(userNm: string){
    
  
  this.userIn=this.userServe.getUser(userNm.toLowerCase());
  console.log(this.userIn.username);

  }

}
