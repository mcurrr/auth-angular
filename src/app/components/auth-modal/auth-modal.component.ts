import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AuthDialogData } from 'types';

@Component({
    selector: 'app-auth-modal',
    templateUrl: './auth-modal.component.html',
    styleUrls: ['./auth-modal.component.scss'],
})
export class AuthModalComponent {
    constructor(
        public dialogRef: MatDialogRef<AuthModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: AuthDialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
