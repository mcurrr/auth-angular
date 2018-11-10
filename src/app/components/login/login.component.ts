import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { ApiClientService } from 'services/api-client.service';
import { ApiUrlNames, RouteLinks, ModalData } from 'types';
import { AuthModalComponent } from 'components/auth-modal/auth-modal.component';
import { MESSAGES } from 'custom-constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    success: boolean;
    error: boolean;
    message: string;
    details: string;
    modalData: ModalData;

    constructor(
        private fb: FormBuilder,
        private api: ApiClientService,
        public dialog: MatDialog
    ) {
        this.success = false;
        this.error = false;
        this.message = '';
        this.modalData = {
            message: '',
            title: '',
            details: '',
            buttons: [{ link: RouteLinks.REGISTRATION, title: 'Register' }],
        };
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    get name() {
        return this.loginForm.get('name');
    }

    get password() {
        return this.loginForm.get('password');
    }

    onSubmit() {
        this.api.getData(ApiUrlNames.LOGIN, {} as any).subscribe(res => {
            [this.success, this.error] = res.ok ? [true, false] : [false, true];
            this.message = res.statusText || '';
            // this.details = !res.ok ? res.message : '';
            console.warn(res);
            this.openDialog();
        });
    }

    openDialog(): void {
        const data = {
            ...this.modalData,
            title: this.error
                ? MESSAGES.errors.login.title
                : MESSAGES.success.login.title,
            message: this.error
                ? MESSAGES.errors.login.message
                : MESSAGES.success.login.message,
            buttons: this.error
                ? [{ link: RouteLinks.REGISTRATION, title: 'Register' }]
                : [{ link: RouteLinks.REGISTRATION, title: 'Home' }],
            details: this.details,
        };

        console.warn(data);

        const dialogRef = this.dialog.open(AuthModalComponent, {
            data,
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    onRegistrationRedirect() {
        console.warn('redirect to registration');
    }
}
