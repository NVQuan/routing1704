import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FriendService } from '../services/friend.service';
import { People, AppState } from '../type';

@Component({
    template: `
        <h4>Friends</h4>
        <h4>Sent Requests</h4>
        <div *ngFor="let user of people.sentRequests" class="user">
            <a class="user-link">{{ user.name }}</a>
            <button class="btn btn-warning" (click)="cancelRequest(user._id)">
                Cancel Request
            </button>
        </div>
        <h4>Incomming Requests</h4>
        <h4>Others</h4>
        <div *ngFor="let user of people.otherUsers" class="user">
            <a class="user-link">{{ user.name }}</a>
            <button class="btn btn-success" (click)="addFriend(user._id)">
                Add Friend
            </button>
        </div>
        <pre>{{ people | json }}</pre>
    `,
    styles: [`
        .user {
            background-color: #EDEBF5;
            padding: 10px;
            margin: 10px;
            border-radius: 5px;
        }

        .user-link { margin-right: 10px; }
    `]
})

export class FriendComponent implements OnInit {
    people: People;
    constructor(
        private friendService: FriendService,
        private store: Store<AppState>
    ) { this.store.select('people').subscribe(p => this.people = p); }

    ngOnInit() { this.friendService.getPeople(); }

    addFriend(_id: string) {
        this.friendService.sendRequest(_id);
    }

    cancelRequest(_id: string) {
        this.friendService.cancelRequest(_id);
    }
}
