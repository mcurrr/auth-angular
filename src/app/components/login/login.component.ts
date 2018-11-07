import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });

        // this.loginForm.valueChanges.subscribe(console.warn);
    }

    get name() {
        return this.loginForm.get('name');
    }

    get password() {
        return this.loginForm.get('password');
    }

    onSubmit() {
        console.warn(this.loginForm.value);
    }
}
