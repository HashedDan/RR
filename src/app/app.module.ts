import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { DashboardComponent } from './home/views/dashboard/index';
import { VoteEditorComponent } from './home/views/vote-editor/index';
import { EventsComponent } from './home/views/events/index';
import { VotesComponent } from './home/views/votes/index';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    VoteEditorComponent,
    EventsComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
