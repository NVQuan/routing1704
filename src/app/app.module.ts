import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FriendComponent } from './components/friend.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';
import { SignUpComponent } from './components/sign-up.component';
import { SignInComponent } from './components/sign-in.component';
import { NavComponent } from './components/nav.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friend', component: FriendComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
