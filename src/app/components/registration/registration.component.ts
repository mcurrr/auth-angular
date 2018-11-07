import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    matchPassword(AC: AbstractControl) {
        const password = AC.get('password').value;
        const password2 = AC.get('password2').value;

        if (password !== password2) {
            AC.get('password2').setErrors({ matchPassword: true });
        } else {
            return null;
        }
    }

    ngOnInit() {
        this.registrationForm = this.fb.group(
            {
                name: ['', [Validators.required, Validators.minLength(4)]],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(6)]],
                password2: ['', [Validators.required]],
            },
            {
                validator: this.matchPassword, // your validation method
            }
        );

        // this.registrationForm.valueChanges.subscribe(console.warn);
    }

    get name() {
        return this.registrationForm.get('name');
    }

    get email() {
        return this.registrationForm.get('email');
    }

    get password() {
        return this.registrationForm.get('password');
    }

    get password2() {
        return this.registrationForm.get('password2');
    }

    onSubmit() {
        console.warn(this.registrationForm.value);
    }
}
