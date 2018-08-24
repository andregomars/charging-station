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
  topNum = 3;

  public pieErrorCodesLabels: string[];
  public pieErrorCodesTimes: number[];
  public pieErrorStationsLabels: string[];
  public pieErrorStationsTimes: number[];

  chartLegend = false;
  chartType = 'line';
  daysOf2weeks = 14;
  labelsAlertTimes2weeks: string[];
  dataAlertTimes2weeks = new Array<any>();

  // pie
  pieOptions = {
    legend: {
      position: 'right'
    }
  };

  // Alert times 2weeks start:
  optionsAlertTimes2weeks: any = {
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
    this.loadData();
  }

  private loadData() {
    this.dataService.getMalfunctions().subscribe((data: any[]) => {

      // chart data
      const dateFormatedData = data.map(x => {
        return {
          date: moment(x.update_time).format('YYYY-MM-DD'),
          times: 1
        };
      });
      const aggregatedTimesByDate = this.getAggregateData(dateFormatedData, 'date', 'times');
      this.dataAlertTimes2weeks =
        this.fillChartData(this.labelsAlertTimes2weeks, aggregatedTimesByDate, 'date', ['times']);

      // pie of error codes
      const errorCodesData = data.map(x => {
        return {
          error_code: x.error_code,
          times: 1
        };
      });
      const aggregatedCodesOfError = this.getAggregateData(errorCodesData, 'error_code', 'times');
      this.pieErrorCodesLabels = aggregatedCodesOfError.map(x => x.error_code);
      this.pieErrorCodesTimes = aggregatedCodesOfError.map(x => x.times);

      // pie of error codes
      const errorStationsData = data.map(x => {
        return {
          station_id: x.station_id,
          times: 1
        };
      });
      const aggregatedStationsOfError = this.getAggregateData(errorStationsData, 'station_id', 'times');
      aggregatedStationsOfError.sort((a, b) => b.times - a.times).splice(this.topNum);
      this.pieErrorStationsLabels = aggregatedStationsOfError.map(x => x.station_id);
      this.pieErrorStationsTimes = aggregatedStationsOfError.map(x => x.times);

    });
  }

  private getAggregateData(sourcList: any[], keyName: string, valueName: string): any[] {
      let output = [];
      sourcList.forEach(current => {
        const scannedObj = output.find(sourceObj => sourceObj[keyName] === current[keyName]);

        if (scannedObj) {
          scannedObj[valueName] += current[valueName];
        } else {
          output = [...output, current];
        }
      });

      return output;
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

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }
}
