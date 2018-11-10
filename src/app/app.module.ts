import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'app.component';
import { MessagesComponent } from 'components/messages/messages.component';
import { AppRoutingModule } from 'app-routing.module';
import { MaterialModule } from 'material';
import { RoutsComponent } from 'components/routs/routs.component';
import { LoaderComponent } from 'components/loader/loader.component';
import { LoginComponent } from 'components/login/login.component';
import { RegistrationComponent } from 'components/registration/registration.component';
import { ThemeToggleComponent } from 'components/theme-toggle/theme-toggle.component';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        RoutsComponent,
        LoaderComponent,
        LoginComponent,
        RegistrationComponent,
        ThemeToggleComponent,
        AuthModalComponent,
    ],
    entryComponents: [AuthModalComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
