import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { Observable } from 'rxjs';
import { map, tap, concatMap } from 'rxjs/operators';
import * as moment from 'moment';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationComponent implements OnInit {
  lastUpdatedTime = new Date();
  sid$: Observable<string>;
  station$: Observable<any>;
  logs$: Observable<any>;
  qrCode: string;

  chartLegend = false;
  chartType = 'line';
  daysOf2weeks = 14;
  labelskWh2weeks: string[];
  datakWh2weeks = new Array<any>();

  // kWh 2weeks start:
  public optionskWh2weeks: any = {
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
        ticks: {
          maxRotation: 25,
          callback: function(tick: string, index: number, array: any[]) {
            return `${tick.split('-')[1]}/${tick.split('-')[2]}`;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
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

  public colourskWh2weeks: Array<any> = [
    {
      backgroundColor: hexToRgba(getStyle('--info'), 50),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    }
  ];
  // kWh 2weeks end

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.initLabels();
    this.loadQRcode();
    this.loadStation();
    this.loadkWh2weeksData();
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

  private loadkWh2weeksData() {
    this.dataService.getLogs().subscribe(data => {
      const dateFormatedData = data.map(r => {
        return {
          date: moment(r.start_date).format('YYYY-MM-DD'),
          kWh: r.kWh
        };
      });
      this.datakWh2weeks =
        this.fillChartData(this.labelskWh2weeks, dateFormatedData, 'date', ['kWh']);
    });
  }

  private initLabels() {
    // ['2018-03-17', ...'2018-03-30']
    const daysof2WeeksLabels =
      Array.from(new Array(this.daysOf2weeks), (val, index) => moment('2018-03-17').add(index, 'days').format('YYYY-MM-DD') );
    this.labelskWh2weeks = daysof2WeeksLabels;

  }

  private fillChartData(labels: string[], sourceData: any[], timeKey: string, keys: string[]): any[] {
    const output = keys.map((key) => {
      return {
        data: new Array<number>(),
        label: key
      };
    });

    for (const label of labels) {
      const data = sourceData.find(s => s[timeKey] === label);
      for (let i = 0; i < keys.length; i++) {
        output[i].data.push(data ? data[keys[i]] : null);
      }
    }

    return output;
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
