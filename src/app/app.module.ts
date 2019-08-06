import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { KidsbedroomComponent } from './kidsbedroom/kidsbedroom.component';
import { UserInfoService } from './services/user-info.service';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserAuthService } from './user-auth.service';

const appRoutes: Routes = [
  { path: 'hall', component: HallComponent ,canActivate : [UserAuthService],data:{roles:['owner','guest','kids']}},
  { path: 'bedroom',      component: BedroomComponent,canActivate : [UserAuthService],data:{roles:['owner']}},
  {
    path: 'kidsbedroom',
    component: KidsbedroomComponent,canActivate : [UserAuthService],data:{roles:['owner','kids']}
  },
  { path: 'kitchen', component: KitchenComponent,canActivate : [UserAuthService],data:{roles:['owner']}},
  
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HallComponent,
    KitchenComponent,
    BedroomComponent,
    KidsbedroomComponent,
    PagenotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserInfoService,UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
