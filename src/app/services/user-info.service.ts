import { Injectable ,OnInit} from '@angular/core';
import { user } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  users:user[];
  userIn:user;

  constructor() { }

  
  
  setUsers(){
    this.users=[new user('ram','owner'),
                new user('divya','owner'),
                new user('mahanya','kids'),
                new user('naresh','guest')];
  }

  getUsers(){
    this.setUsers();
    return this.users;
  }

getUser(usernm:string){
  console.log(this.users);
  console.log(usernm);
  this.userIn=this.users.find(e => e.username === usernm);
  return this.users.find(e => e.username === usernm);
}

getusr(){
  return this.userIn;
}



}
