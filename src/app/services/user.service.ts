import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../type';
import { RequestService } from './request.service';

@Injectable()

export class UserService {
    constructor(
        private request: RequestService,
        private router: Router,
        private store: Store<AppState>
    ) {}

    signIn(email: string, password: string) {
        this.request.post('/user/signin', { email, password })
        .then(response => {
            localStorage.setItem('token', response.user.token);
            const { _id, name, token } = response.user;
            this.store.dispatch({ type: 'SET_CLIENT', client: { _id, name, token, email } });
            this.router.navigate(['/profile']);
        })
        .catch(error => alert('Kiểm tra lại thông tin đăng nhập.'));
    }

    logOut() {
        localStorage.removeItem('token');
        this.router.navigate(['/signin']);
    }

    checkToken() {
        this.request.post('/user/check', null)
        .then(response => {
            localStorage.setItem('token', response.user.token);
            const { _id, name, token, email } = response.user;
            this.store.dispatch({ type: 'SET_CLIENT', client: { _id, name, token, email } });
        })
        .catch(() => console.log('Invalid token'));
    }
}
