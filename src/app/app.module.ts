import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { FriendComponent } from './components/friend.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';
import { SignUpComponent } from './components/sign-up.component';
import { SignInComponent } from './components/sign-in.component';
import { NavComponent } from './components/nav.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

// services
import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';

// guards
import { MustBeGuestGuard } from './guards/must-be-guest.guard';
import { MustBeUserGuard } from './guards/must-be-user.guard';

const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent, canActivate: [MustBeGuestGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [MustBeGuestGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [MustBeUserGuard] },
  { path: 'friend', component: FriendComponent, canActivate: [MustBeUserGuard] },
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
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [RequestService, UserService, MustBeGuestGuard, MustBeUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
