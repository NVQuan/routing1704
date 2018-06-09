import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Story } from '../type';

@Component({
    selector: 'app-home',
    template: `
        <h4>Home Component</h4>
        <app-story *ngFor="let story of stories" [story]="story"></app-story>
    `
})

export class HomeComponent {
    stories: Story[];
    constructor(private store: Store<AppState>) {
        this.store.select('stories').subscribe(stories => this.stories = stories);
    }
}
