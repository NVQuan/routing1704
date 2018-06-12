import { Component, Input } from '@angular/core';
import { StoryService } from '../services/story.service';
import { CommentService } from '../services/comment.service';
import { Story } from '../type';
import { Store } from '@ngrx/store';
import { AppState } from '../type';

@Component({
    selector: 'app-story',
    template: `
    <div class="story">
        <a>{{ story.author.name }}</a>
        <p>{{ story.content }}</p>
        <a (click)="toggleLike();">
            <img
                *ngIf="isLiked"
                src="https://www.freeiconspng.com/uploads/facebook-thumbs-up-icon-0.png"
            />
            {{ story.fans.length }} Like
        </a>
        <input
            class="form-control"
            placeholder="Enter your comment"
            style="margin-top: 10px; margin-bottom: 10px;"
            [(ngModel)]="txtComment"
            (keyUp.enter)="createComment();"
        />
        <div *ngFor="let comment of story.comments">
            <p><a>{{ comment.author.name }} </a>{{ comment.content }}</p>
        </div>
    </div>
    `,
    styles: [`
        .story {
            padding: 10px;
            margin: 10px;
            border-radius: 5px;
            background-color: #EDEBF5;
        }

        img { width: 15px; height: 15px; }

        a { cursor: pointer; }
    `]
})

export class StoryComponent {
    @Input() story: Story;
    idUser: string;
    txtComment = '';
    constructor(
        private storyService: StoryService,
        private commentService: CommentService,
        private store: Store<AppState>
    ) {
        this.store.select('client').subscribe(client => this.idUser = client._id);
    }

    get isLiked(): boolean {
        return this.story.fans.some(u => this.idUser === u._id);
    }

    toggleLike() {
        if (this.isLiked) return this.storyService.dislikeStory(this.story._id);
        this.storyService.likeStory(this.story._id);
    }

    createComment() {
        this.commentService.createComment(this.txtComment, this.story._id);
        this.txtComment = '';
    }
}
