import { RouterModule } from '@angular/router';
import { CompetitionComponent } from './competition/competition.component';
import { StandingComponent } from './standing/standing.component';
import { TeamComponent } from './team/team.component';;

// Route config let's you map routes to components
const routes= [
    {
      path: '',
      component: CompetitionComponent
    },
    {
        path: 'competition',
        component: CompetitionComponent
    },
    
    {
        path: 'standing/:id',
        component: StandingComponent
    },
    {
        path: 'team/:id',
        component: TeamComponent
    }
];

export const appRouting = RouterModule.forRoot(routes);
  