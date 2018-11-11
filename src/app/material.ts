import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        MatProgressSpinnerModule,
        MatExpansionModule,
        MatDialogModule,
        MatCardModule,
        MatChipsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatTableModule,
        MatSlideToggleModule,
    ],
    exports: [
        MatProgressSpinnerModule,
        MatExpansionModule,
        MatDialogModule,
        MatCardModule,
        MatChipsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatTableModule,
        MatSlideToggleModule,
    ],
})
export class MaterialModule {}
