import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    template: `
    <nav class="navbar navbar-default" style="margin-top: 10px">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand">Khoa Pham Page</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
            <li><a routerLink="/signin" routerLinkActive="active">Sign In</a></li>
            <li><a routerLink="/signup" routerLinkActive="active">Sign Up</a></li>
            <li><a routerLink="/profile" routerLinkActive="active">Profile</a></li>
            <li><a routerLink="/friend" routerLinkActive="active">Friend</a></li>
            <li><a>Log out</a></li>
          </ul>
        </div>
      </nav>
    `,
    styles: [`a.active { font-weight: bold; }`]
})

export class NavComponent {}
