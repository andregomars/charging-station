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
  datakWh: any;

  // mainChart

  public hoursOfDay = 25;
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

  // ['00', '01', ..., '24']
  public mainChartLabels: Array<any> =
    Array.from(new Array(this.hoursOfDay), (val, index) => (index).toString().padStart(2, '0'));

  public optionskWh: any = {
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

  public colourskWh: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
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

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.loadkWhData();

    // generate random values for mainChart
    for (let i = 0; i <= this.hoursOfDay; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(55);
    }
  }

  private loadkWhData() {
    this.datakWh =
      Array.from(new Array(this.hoursOfDay), (val, index) =>
        (index).toString().padStart(2, '0')
      ).map(r => {
        return {
          kWh: 0,
          time: r
        };
      });

    this.dataService.getkWhToday().subscribe(data => {
      const timeFormatedData = data.map(r => {
        const obj = {};
        const key = r.time.replace(/:\d+/g, '').padStart(2, '0');
        obj[key] = r.kWh;
        return obj;
      });

      this.fillChartData(this.datakWh, timeFormatedData);

      console.log(this.datakWh);
    });
  }

  private fillChartData(chartData: any[], sourceData: any[]) {
    for (const row of chartData) {
      row.kWh = sourceData[row.time] ? sourceData[row.time] : 0;
    }
  }

}
