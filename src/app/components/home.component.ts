import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Story } from '../type';

@Component({
    selector: 'app-home',
    template: `
        <h4>Home Component</h4>
        <pre>{{ stories | json }}</pre>
    `
})

export class HomeComponent {
    stories: Story[];
    constructor(private store: Store<AppState>) {
        this.store.select('stories').subscribe(stories => this.stories = stories);
    }
}
