import { Component, Input } from '@angular/core';
import { Story } from '../type';

@Component({
    selector: 'app-story',
    template: `
        <a>{{ story.author.name }}</a>
        <p>{{ story.content }}</p>
    `
})

export class StoryComponent {
    @Input() story: Story;
}
