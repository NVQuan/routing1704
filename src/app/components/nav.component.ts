import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-nav',
    template: `
    <nav class="navbar navbar-default" style="margin-top: 10px">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand">Khoa Pham Page</a>
          </div>
          <ul class="nav navbar-nav" *ngIf="isSignedIn">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
            <li><a routerLink="/profile" routerLinkActive="active">Profile</a></li>
            <li><a routerLink="/friend" routerLinkActive="active">Friend</a></li>
            <li><a (click)="logOut();" style="cursor: pointer;">Log out</a></li>
          </ul>
          <ul class="nav navbar-nav" *ngIf="!isSignedIn">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
            <li><a routerLink="/signin" routerLinkActive="active">Sign In</a></li>
            <li><a routerLink="/signup" routerLinkActive="active">Sign Up</a></li>
          </ul>
        </div>
      </nav>
    `,
    styles: [`a.active { font-weight: bold; }`]
})

export class NavComponent {
  constructor(private userService: UserService) {}

  logOut() { this.userService.logOut(); }

  get isSignedIn(): boolean { return !!localStorage.getItem('token'); }
}
