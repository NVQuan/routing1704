import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from './request.service';

@Injectable()

export class UserService {
    constructor(private request: RequestService, private router: Router) {}

    signIn(email: string, password: string) {
        this.request.post('/user/signin', { email, password })
        .then(response => {
            localStorage.setItem('token', response.user.token);
            this.router.navigate(['/profile']);
        })
        .catch(error => alert('Kiểm tra lại thông tin đăng nhập.'));
    }

    logOut() {
        localStorage.removeItem('token');
        this.router.navigate(['/signin']);
    }
}
