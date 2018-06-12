import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Client } from '../type';
import { RequestService } from './request.service';

@Injectable()

export class CommentService {
    user: Client;
    constructor(
        private request: RequestService,
        private store: Store<AppState>
    ) {
        this.store.select('client').subscribe(client => this.user = client);
    }

    createComment(content: string, idStory: string) {
        this.request.post('/comment', { content, idStory })
        .then(response => {
            const action = {
                type: 'ADD_COMMENT',
                _id: idStory,
                comment: response.comment
            };
            this.store.dispatch(action);
        });
    }
}
