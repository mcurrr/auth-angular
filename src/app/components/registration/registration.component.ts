import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    AbstractControl,
} from '@angular/forms';
import { MatDialog } from '@angular/material';

import { ApiClientService } from 'services/api-client.service';
import { ApiUrlNames } from 'types';
import { AuthModalComponent } from 'components/auth-modal/auth-modal.component';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;
    success: boolean;
    error: boolean;
    errorText: string;

    constructor(
        private fb: FormBuilder,
        private api: ApiClientService,
        public dialog: MatDialog
    ) {
        this.success = false;
        this.error = false;
        this.errorText = '';
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
        this.api.getData(ApiUrlNames.REGISTRATION, {} as any).subscribe(res => {
            [this.success, this.error] = res.ok ? [true, false] : [false, true];
            this.errorText = res.statusText || '';
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(AuthModalComponent, {
            width: '500px',
            data: {
                success: this.success,
                error: this.error,
                errorText: this.errorText,
            },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
