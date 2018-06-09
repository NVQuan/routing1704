import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable()

export class UserService {
    constructor(private request: RequestService) {}

    signIn(email: string, password: string) {
        this.request.post('/user/signin', { email, password })
        .then(response => alert(JSON.stringify(response)))
        .catch(error => alert(JSON.stringify(error)));
    }
}
