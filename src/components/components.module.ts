import { NgModule } from '@angular/core';
import { HealthTopDashComponent } from './health-top-dash/health-top-dash';
import { HealthYourselfComponent } from './health-yourself/health-yourself';
import { HealthGoalComponent } from './health-goal/health-goal';
import { PopoverComponent } from './popover/popover';
import { HealthExerciseComponent } from './health-exercise/health-exercise';
import { HealthFeedComponent } from './health-feed/health-feed';
import { HealthRecipesComponent } from './health-recipes/health-recipes';
import { HealthWatchComponent } from './health-watch/health-watch';
@NgModule({
	declarations: [HealthTopDashComponent,
    HealthYourselfComponent,
    HealthGoalComponent,
    PopoverComponent,
    HealthExerciseComponent,
    HealthFeedComponent,
    HealthRecipesComponent,
    HealthWatchComponent,
    ],
	imports: [],
	exports: [HealthTopDashComponent,
    HealthYourselfComponent,
    HealthGoalComponent,
    PopoverComponent,
    HealthExerciseComponent,
    HealthFeedComponent,
    HealthRecipesComponent,
    HealthWatchComponent]
})
export class ComponentsModule {}
