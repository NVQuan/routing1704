import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    template: `
        <h4>Sign In</h4>
        <form class="form-group" [formGroup]="formSignIn" (ngSubmit)="signIn();">
            <input
                class="form-control"
                placeholder="Email"
                formControlName="email"
            />
            <br />
            <input
                class="form-control"
                placeholder="Password"
                formControlName="password"
                type="password"
            />
            <br />
            <button class="btn btn-success form-control" [disabled]="formSignIn.invalid">
                Sign In
            </button>
        </form>
    `,
    styles: [`
        form { width: 300px; }
    `]
})

export class SignInComponent implements OnInit {
    formSignIn: FormGroup;

    constructor() {}

    ngOnInit() {
        this.formSignIn = new FormGroup({
            email: new FormControl('teo@gmail.com'),
            password: new FormControl('123'),
        });
    }

    signIn() {
        const { email, password } = this.formSignIn.value;
        alert(email + ' ' + password);
    }

}
