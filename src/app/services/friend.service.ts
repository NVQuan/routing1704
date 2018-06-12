import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Client } from '../type';
import { RequestService } from './request.service';

@Injectable()

export class FriendService {
    user: Client;
    constructor(
        private request: RequestService,
        private store: Store<AppState>
    ) {
        this.store.select('client').subscribe(client => this.user = client);
    }

    getPeople() {
        this.request.get('/friend')
        .then(response => {
            this.store.dispatch({ type: 'SET_PEOPLE', people: response.people });
        });
    }

    sendRequest(_id: string) {
        this.request.post('/friend/add/' + _id, null)
        .then(response => this.store.dispatch({ type: 'ADD_FRIEND', user: response.user }));
    }

    cancelRequest(_id: string) {
        this.request.post('/friend/cancel/' + _id, null)
        .then(response => this.store.dispatch({ type: 'CANCEL_REQUEST', user: response.user }));
    }
}
