import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashAnalyticsRoutingModule } from './dash-analytics-routing.module';
import { DashAnalyticsComponent } from './dash-analytics.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DashAnalyticsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    NgbPopoverModule,
    NgbTabsetModule,
    NgxPaginationModule
  ],
  declarations: [
    DashAnalyticsComponent,
  ]
})
export class DashAnalyticsModule { }
