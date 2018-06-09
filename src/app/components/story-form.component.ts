import { Component } from '@angular/core';
import { Story } from '../type';

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
    createStory() {
        alert(this.txtContent);
        this.txtContent = '';
    }
}
