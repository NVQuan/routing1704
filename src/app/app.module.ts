import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

// components
import { AppComponent } from './app.component';
import { FriendComponent } from './components/friend.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';
import { SignUpComponent } from './components/sign-up.component';
import { SignInComponent } from './components/sign-in.component';
import { NavComponent } from './components/nav.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { StoryComponent } from './components/story.component';
import { StoryFormComponent } from './components/story-form.component';

// services
import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';
import { StoryService } from './services/story.service';
import { CommentService } from './services/comment.service';
import { FriendService } from './services/friend.service';

// guards
import { MustBeGuestGuard } from './guards/must-be-guest.guard';
import { MustBeUserGuard } from './guards/must-be-user.guard';

// reducers
import { clientReducer, storiesReducer, peopleReducer } from './reducers';

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
    PageNotFoundComponent,
    StoryComponent,
    StoryFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ client: clientReducer, stories: storiesReducer, people: peopleReducer }),
    RouterModule.forRoot(routesConfig)
  ],
  providers: [
    RequestService,
    UserService,
    StoryService,
    FriendService,
    CommentService,
    MustBeGuestGuard,
    MustBeUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
