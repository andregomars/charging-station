import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  hoursOfDay = 25;
  labelskWhToday: string[];
  labelsCurrentToday: string[];
  datakWhToday = new Array<any>();
  dataCurrentToday = new Array<any>();


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
    }
  ];
  // CurrentToday end

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
        this.fillChartData(this.labelskWhToday, timeFormatedData, ['kWh']);
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
        this.fillChartData(this.labelsCurrentToday, timeFormatedData, ['mincurrent', 'maxcurrent']);
    });
  }

  private fillChartData(labels: string[], sourceData: any[], keys: string[]): any[] {
    const output = keys.map((key) => {
      return {
        data: new Array<number>(),
        label: key
      };
    });

    for (const label of labels) {
      const data = sourceData.find(s => s.time === label);
      for (let i = 0; i < keys.length; i++) {
        output[i].data.push(data ? data[keys[i]] : 0);
      }
    }

    return output;
  }

}
