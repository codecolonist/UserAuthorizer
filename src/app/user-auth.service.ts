import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router';
import { UserInfoService } from './services/user-info.service';
import { user } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService implements CanActivate {
   
  data:any=[];
  userIn:user;
  roles:string[];
 
  constructor(private userServe:UserInfoService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :Observable<boolean> | Promise<boolean> | boolean{
    this.userIn = this.userServe.getusr();
    this.roles=route.data.roles;
    console.log(this.userIn.userrole);
    console.log(this.roles);
    
    if (this.userIn) {
      console.log(this.roles.indexOf(this.userIn.userrole));
        // check if route is restricted by role
        console.log(this.roles.includes(this.userIn.userrole) )
        if (this.roles.includes(this.userIn.userrole)) {
            // role not authorised so redirect to home page
            return true;
            
        }

        // authorised so return true
        this.router.navigate(['/']);
            return false;
    }
}
}
