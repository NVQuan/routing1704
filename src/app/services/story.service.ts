import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Client } from '../type';
import { RequestService } from './request.service';

@Injectable()

export class StoryService {
    user: Client;
    constructor(
        private request: RequestService,
        private store: Store<AppState>
    ) {
        this.store.select('client').subscribe(client => this.user = client);
    }

    getAllStories() {
        this.request.get('/story')
        .then(response => this.store.dispatch({ type: 'SET_STORIES', stories: response.stories }))
        .catch(() => alert('Kiểm tra kết nối mạng.'));
    }

    createStory(content: string) {
        this.request.post('/story', { content })
        .then(response => this.store.dispatch({ type: 'CREATE_STORY', story: response.story }))
        .catch(() => alert('Kiểm tra kết nối mạng.'));
    }

    likeStory(_id: string) {
        this.request.post(`/story/like/${_id}`, null)
        .then(response => {
            this.store.dispatch({ type: 'LIKE_STORY', _id, fan: this.user });
        })
        .catch(error => console.log(error));
    }

    dislikeStory(_id: string) {
        this.request.post(`/story/dislike/${_id}`, null)
        .then(response => {
            this.store.dispatch({ type: 'DISLIKE_STORY', _id, idUser: this.user._id });
        })
        .catch(error => console.log(error));
    }
}
