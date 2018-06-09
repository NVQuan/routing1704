import { Component } from '@angular/core';
import { Story } from '../type';
import { StoryService } from '../services/story.service';

@Component({
    selector: 'app-story-form',
    template: `
        <textarea
            rows="5"
            class="form-control"
            placeholder="Enter your story"
            [(ngModel)]="txtContent"
            (keyUp.enter)="createStory()"
        ></textarea>
    `
})

export class StoryFormComponent {
    txtContent = '';
    constructor(private storyService: StoryService) {}

    createStory() {
        this.storyService.createStory(this.txtContent);
        this.txtContent = '';
    }
}
