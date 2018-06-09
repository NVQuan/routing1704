import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { StoryService } from './services/story.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private userService: UserService, private storyService: StoryService) {
    this.userService.checkToken();
    this.storyService.getAllStories();
  }
}
