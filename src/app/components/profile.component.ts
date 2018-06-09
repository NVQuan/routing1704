import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Client } from '../type';

@Component({
    template: `
        <h4>Profile Component</h4>
        <pre>{{ client | json }}</pre>
    `
})

export class ProfileComponent {
    client: Client;
    constructor(private store: Store<AppState>) {
        this.store.select('client').subscribe(client => this.client = client);
    }
}
