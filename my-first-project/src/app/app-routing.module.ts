import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSampleComponent } from './form-sample/form-sample.component';
import { TravelCalendarComponent } from './travel-calendar/travel-calendar.component';
import { TableOfContentComponent } from './table-of-content/table-of-content.component';

const routes: Routes = [
  { path: '', component: TableOfContentComponent },
  { path: 'form-sample', component: FormSampleComponent },
  { path: 'travel-calendar', component: TravelCalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
