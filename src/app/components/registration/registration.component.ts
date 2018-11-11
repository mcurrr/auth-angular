import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    AbstractControl,
} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { delay, tap } from 'rxjs/operators';

import { ApiClientService } from 'services/api-client.service';
import { ApiUrlNames, RouteLinks, ModalData } from 'types';
import { AuthModalComponent } from 'components/auth-modal/auth-modal.component';
import { MESSAGES } from 'custom-constants';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;
    success: boolean;
    error: boolean;
    message: string;
    details: string;
    fetching: boolean;
    loginLink: RouteLinks;
    modalData: ModalData;

    constructor(
        private fb: FormBuilder,
        private api: ApiClientService,
        public dialog: MatDialog
    ) {
        this.success = false;
        this.error = false;
        this.message = '';
        this.fetching = false;
        this.loginLink = RouteLinks.LOG_IN;
        this.modalData = {
            message: '',
            title: '',
            details: '',
            buttons: [{ link: RouteLinks.LOG_IN, title: 'Log in' }],
        };
    }

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
        this.api
            .getData(ApiUrlNames.REGISTRATION, {} as any)
            .pipe(
                tap(() => {
                    this.fetching = true;
                })
            )
            .pipe(delay(2000))
            .subscribe(res => {
                [this.success, this.error] = res.ok
                    ? [true, false]
                    : [false, true];
                this.message = res.statusText || '';
                // this.details = !res.ok ? res.message : '';
                this.fetching = false;
                this.openDialog();
            });
    }

    getCurrentData() {
        return {
            ...this.modalData,
            title: this.error
                ? MESSAGES.errors.login.title
                : MESSAGES.success.login.title,
            message: this.error
                ? MESSAGES.errors.login.message
                : MESSAGES.success.login.message,
            buttons: this.error
                ? [{ link: RouteLinks.LOG_IN, title: 'Log in' }]
                : [{ link: RouteLinks.LOG_IN, title: 'Home' }],
            details: this.details,
        };
    }

    openDialog(): void {
        const data = this.getCurrentData();

        console.warn(data);

        const dialogRef = this.dialog.open(AuthModalComponent, {
            data,
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
