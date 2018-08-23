import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-malfunction',
  templateUrl: './malfunction.component.html',
  styleUrls: ['./malfunction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MalfunctionComponent implements OnInit {
  malfunctions$: Observable<any>;

  // Pie
  public pieChartLabels: string[] = ['ERR23', 'ERR36', 'ERR51'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';

  chartLegend = false;
  chartType = 'line';
  daysOf2weeks = 14;
  labelsAlertTimes2weeks: string[];
  dataAlertTimes2weeks = new Array<any>();

  // Alert times 2weeks start:
  public optionsAlertTimes2weeks: any = {
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
          suggestedMax: 5,
          stepSize: 1
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

  public coloursAlertTimes2weeks: Array<any> = [
    {
      backgroundColor: hexToRgba(getStyle('--info'), 50),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    }
  ];
  // Alert times 2weeks end

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.initLabels();

    this.malfunctions$ = this.dataService.getMalfunctions();
    this.loadAlertTimes2weeksData();
  }

  private loadAlertTimes2weeksData() {
    this.dataService.getMalfunctions().subscribe((data: any[]) => {
      const dateFormatedData = data.map(r => {
        return {
          date: moment(r.update_time).format('YYYY-MM-DD'),
          times: 1
        };
      });

      let aggregatedData = [];
      dateFormatedData.forEach(current => {
        const existed = aggregatedData.find(a => a.date === current.date);
        if (existed) {
          existed.times += current.times;
        } else {
          aggregatedData = [...aggregatedData, current];
        }
      });

      this.dataAlertTimes2weeks =
        this.fillChartData(this.labelsAlertTimes2weeks, aggregatedData, 'date', ['times']);
    });
  }

  private initLabels() {
    // ['2018-03-17', ...'2018-03-30']
    const daysof2WeeksLabels =
      Array.from(new Array(this.daysOf2weeks), (val, index) => moment('2018-03-17').add(index, 'days').format('YYYY-MM-DD') );
    this.labelsAlertTimes2weeks = daysof2WeeksLabels;

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

  // public random(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
