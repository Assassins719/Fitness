import { NgModule } from '@angular/core';
import { HealthTopDashComponent } from './health-top-dash/health-top-dash';
import { HealthYourselfComponent } from './health-yourself/health-yourself';
import { HealthGoalComponent } from './health-goal/health-goal';
import { PopoverComponent } from './popover/popover';
@NgModule({
	declarations: [HealthTopDashComponent,
    HealthYourselfComponent,
    HealthGoalComponent,
    PopoverComponent],
	imports: [],
	exports: [HealthTopDashComponent,
    HealthYourselfComponent,
    HealthGoalComponent,
    PopoverComponent]
})
export class ComponentsModule {}
