import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { Observable } from 'rxjs';
import { map, tap, concatMap } from 'rxjs/operators';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  lastUpdatedTime = new Date();
  sid$: Observable<string>;
  station$: Observable<any>;
  logs$: Observable<any>;
  qrCode: string;

  public mainChartElements = 24;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];
  public mainChartLabels: Array<any> = Array.from(new Array(25), (val, index) => (index).toString().padStart(2, '0'));

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];

    public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  public mainChartOptions: any = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function(tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false,
          },

        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
            max: 250
          }
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        }
      },
      legend: {
        display: false
      }
    };


  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loadQRcode();
    this.loadStation();
    this.loadCharts();
    this.loadLogs();
  }

  private loadQRcode() {
    this.qrCode = location.href;
  }

  private loadStation() {
    const stations$ = this.dataService.getStations();
    this.sid$ = this.route.paramMap.pipe(
        map((params: ParamMap) => params.get('id'))
    );

    console.log(this.route.snapshot.url);
    console.log(location.href);

    this.station$ = this.sid$.pipe(
      concatMap(id => {
        return stations$.pipe(
          map(stations => {
            const station = stations.find(s =>
              s.code.toUpperCase() === id.toUpperCase()
            );
            return this.attachBackgroundImageCss(station);
          })
        );
      })
    );
  }

  private loadCharts() {
        // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(55);
    }
  }

  private loadLogs() {
    this.logs$ = this.dataService.getLogs();
  }

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  private attachBackgroundImageCss(station: any): any {
    if (!station || !station.status) {
      return station;
    }

    const imgcss = { imageClass: `cs-bg-${station.status}`};
    return {...station, ...imgcss};
  }
}
