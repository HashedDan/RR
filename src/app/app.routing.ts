import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);