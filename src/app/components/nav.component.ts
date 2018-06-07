import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    template: `
    <nav class="navbar navbar-default" style="margin-top: 10px">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Khoa Pham Page</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/friend">Friend</a></li>
            <li><a href="/friend">Log out</a></li>
          </ul>
        </div>
      </nav>
    `
})

export class NavComponent {}
