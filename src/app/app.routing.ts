import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { DashboardComponent } from './home/views/dashboard/index';
import { VoteEditorComponent } from './home/views/vote-editor/index';
import { EventsComponent } from './home/views/events/index';
import { VotesComponent } from './home/views/votes/index';

const appRoutes: Routes = [
	{ 
		path: '', 
		component: HomeComponent,
		children: [
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'vote-editor', component: VoteEditorComponent },
			{ path: 'events', component: EventsComponent },
			{ path: 'votes', component: VotesComponent }
		],
		canActivate: [AuthGuard]
	},
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);