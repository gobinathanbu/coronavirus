import { Component, OnInit } from '@angular/core';
import { ChartDB } from '../../../fack-db/chart-data';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dash-analytics',
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export class DashAnalyticsComponent implements OnInit {
  public chartDB: any;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  public deviceProgressBar: any;
  public worldCases: any;
  public worldTotalConfirmed: any;
  public worldTotalDeaths: any;
  public worldTotalRecovered: any;
  public newConfirmed: any;
  public newDeaths: any;
  public newRecovered: any;
  public countryList: any;
  p = 1;

  constructor(public apexEvent: ApexChartService, private apiService: ApiService) {
    this.chartDB = ChartDB;
    this.dailyVisitorStatus = '1y';

    this.deviceProgressBar = [
      {
        type: 'success',
        value: 66
      }, {
        type: 'primary',
        value: 26
      }, {
        type: 'danger',
        value: 8
      }
    ];
  }

  dailyVisitorEvent(status) {
    this.dailyVisitorStatus = status;
    switch (status) {
      case '1m':
        this.dailyVisitorAxis = {
          min: new Date('28 Jan 2013').getTime(),
          max: new Date('27 Feb 2013').getTime(),
        };
        break;
      case '6m':
        this.dailyVisitorAxis = {
          min: new Date('27 Sep 2012').getTime(),
          max: new Date('27 Feb 2013').getTime()
        };
        break;
      case '1y':
        this.dailyVisitorAxis = {
          min: new Date('27 Feb 2012').getTime(),
          max: new Date('27 Feb 2013').getTime()
        };
        break;
      case 'ytd':
        this.dailyVisitorAxis = {
          min: new Date('01 Jan 2013').getTime(),
          max: new Date('27 Feb 2013').getTime()
        };
        break;
      case 'all':
        this.dailyVisitorAxis = {
          min: undefined,
          max: undefined
        };
        break;
    }

    setTimeout(() => {
      this.apexEvent.eventChangeTimeRange();
    });
  }

  ngOnInit() {
    this.worldAffectCases();

  }

  worldAffectCases() {
    this.apiService.getData('summary').subscribe((data) => {
      this.worldCases = data;
      this.countryList = this.worldCases.Countries;
      this.worldTotalConfirmed = this.worldCases.Global.TotalConfirmed;
      this.worldTotalDeaths = this.worldCases.Global.TotalDeaths;
      this.worldTotalRecovered = this.worldCases.Global.TotalRecovered;
      this.newConfirmed = this.worldCases.Global.NewConfirmed;
      this.newDeaths = this.worldCases.Global.NewDeaths;
      this.newRecovered = this.worldCases.Global.NewRecovered;
      console.log(this.worldCases);
    });
  }

}
