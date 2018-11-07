import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'components/login/login.component';
import { RegistrationComponent } from 'components/registration/registration.component';
import { RouteLinks } from 'types';

const routes: Routes = [
    { path: '', redirectTo: `/${RouteLinks.LOG_IN}`, pathMatch: 'full' },
    { path: RouteLinks.LOG_IN, component: LoginComponent },
    { path: RouteLinks.REGISTRATION, component: RegistrationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
