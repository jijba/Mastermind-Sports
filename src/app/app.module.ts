import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { StandingComponent } from './standing/standing.component';
import { TeamComponent } from './team/team.component';
import { appRouting } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    StandingComponent,
    TeamComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
