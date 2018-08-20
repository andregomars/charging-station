import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { DataService } from '../../services/data.service';

@Component({
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  hoursOfDay = 25;
  daysOf2weeks = 14;
  labelskWhToday: string[];
  labelsCurrentToday: string[];
  labelskWh2weeks: string[];
  labelsAlertTimes2weeks: string[];
  datakWhToday = new Array<any>();
  dataCurrentToday = new Array<any>();
  datakWh2weeks = new Array<any>();
  datakAlertTimes2weeks = new Array<any>();

  public mainChartLabels: Array<string> = [];
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

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

  // kWhToday start:
  public optionskWhToday: any = {
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
          maxRotation: 0,
          callback: function(tick, index, array) {
                return (index % 2) ? null : tick;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          // stepSize: Math.ceil(400 / 5),
          // max: 400
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

  public colourskWhToday: Array<any> = [
    {
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    }
  ];
  // kWhToday end

  // CurrentToday start:
  public optionsCurrentToday: any = {
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
          maxRotation: 0,
          callback: function(tick, index, array) {
                return (index % 2) ? null : tick;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5
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

  public coloursCurrentToday: Array<any> = [
    {
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    {
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    }
  ];
  // CurrentToday end

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
          maxRotation: 0,
          callback: function(tick, index, array) {
                return tick.toString().split('-')[2];
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          // stepSize: Math.ceil(400 / 5),
          // max: 400
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
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    }
  ];
  // kWh 2weeks end

  // alert times 2weeks start:
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
          maxRotation: 0,
          callback: function(tick, index, array) {
                return tick.toString().split('-')[2];
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          // stepSize: Math.ceil(400 / 5),
          // max: 400
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
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    }
  ];
  // alert times 2weeks end

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
        ticks: {
          maxRotation: 0,
          callback: function(tick, index, array) {
                return (index % 2) ? null : tick;
          }
        }
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

  public mainChartLegend = false;
  public mainChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.initLabels();

    this.loadkWhTodayData();
    this.loadCurrentTodayData();
    this.loadkWh2weeksData();
    this.loadAlertTimes2weeksData();

    // generate random values for mainChart
    for (let i = 0; i <= this.hoursOfDay; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(55);
    }
  }

  private initLabels() {
    // ['00', '01', '02', ...'24']
    const hoursOfDayLabels =
      Array.from(new Array(this.hoursOfDay), (val, index) => (index).toString().padStart(2, '0'));
    this.labelskWhToday = hoursOfDayLabels;
    this.labelsCurrentToday = hoursOfDayLabels;

    // ['2018-03-17', ...'2018-03-30']
    const daysof2WeeksLabels =
      Array.from(new Array(this.daysOf2weeks), (val, index) => moment('2018-03-17').add(index, 'days').format('YYYY-MM-DD') );
    this.labelskWh2weeks = daysof2WeeksLabels;
    this.labelsAlertTimes2weeks = daysof2WeeksLabels;

    this.mainChartLabels = hoursOfDayLabels;
  }

  private loadkWhTodayData() {
    this.dataService.getkWhToday().subscribe(data => {
      const timeFormatedData = data.map(r => {
        return {
          time: r.time.replace(/:\d+/g, '').padStart(2, '0'),
          kWh: r.kWh
        };
      });
      this.datakWhToday =
        this.fillChartData(this.labelskWhToday, timeFormatedData, 'time', ['kWh']);
    });
  }

  private loadCurrentTodayData() {
    this.dataService.getCurrentToday().subscribe(data => {
      const timeFormatedData = data.map(r => {
        return {
          time: r.time.replace(/:\d+/g, '').padStart(2, '0'),
          mincurrent: r.mincurrent,
          maxcurrent: r.maxcurrent
        };
      });
      this.dataCurrentToday =
        this.fillChartData(this.labelsCurrentToday, timeFormatedData, 'time', ['mincurrent', 'maxcurrent']);
    });
  }

  private loadkWh2weeksData() {
    this.dataService.getkWh2week().subscribe(data => {
      const dateFormatedData = data.map(r => {
        return {
          date: r.date,
          kWh: r.kWh
        };
      });
      this.datakWh2weeks =
        this.fillChartData(this.labelskWh2weeks, dateFormatedData, 'date', ['kWh']);
    });
  }

  private loadAlertTimes2weeksData() {
    this.dataService.getAlertTimes2week().subscribe(data => {
      const dateFormatedData = data.map(r => {
        return {
          date: r.date,
          alerttimes: r.alerttimes
        };
      });
      this.datakAlertTimes2weeks =
        this.fillChartData(this.labelsAlertTimes2weeks, dateFormatedData, 'date', ['alerttimes']);
    });
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
        output[i].data.push(data ? data[keys[i]] : 0);
      }
    }

    return output;
  }

}
