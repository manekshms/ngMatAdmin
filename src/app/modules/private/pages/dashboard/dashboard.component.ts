import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

const USER_DATA = [
  {position: 1, name: 'Jane Doe', location: 'Durham', age: '34'},
  {position: 2, name: 'Josh	Garrett', location: 'Milwaukee', age: '54'},
  {position: 3, name: 'Blanche	Mcdaniel', location: 'Huntington', age: '23'},
  {position: 4, name: 'Jacob	Murphy', location: 'Los Angeles', age: '30'},
  {position: 5, name: 'Orlando	Ellis', location: 'Plano', age: '20'}
];

@Component({
    templateUrl: "./dashboard.component.html",
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    displayedColumns: string[] = ['position', 'name', 'location', 'age'];
    dataSource = USER_DATA;

    public barChartOptions: ChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: { xAxes: [{}], yAxes: [{}] },
        plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    };
    public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    //public barChartPlugins = [pluginDataLabels];
//            [plugins]="barChartPlugins"

    public barChartData: ChartDataSets[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];




}