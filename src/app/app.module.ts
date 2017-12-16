import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {MyAccountComponent} from './components/my-account/my-account.component';
import {MyProfileComponent} from './components/my-profile/my-profile.component';

import { routing } from './app.routing';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [LoginService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
