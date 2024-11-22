import {Component, OnInit} from '@angular/core';
import {InputGroupModule} from 'primeng/inputgroup';
import {ButtonDirective} from 'primeng/button';
import {ChipsModule} from 'primeng/chips';
import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    InputGroupModule,
    ButtonDirective,
    ChipsModule,
    ChartModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  data2: any;

  options2: any;

  data1: any;

  options1: any;

  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'bar',
          label: 'Energy stations',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          data: [50, 25, 12, 48, 90, 76, 42]
        },
        {
          type: 'bar',
          label: 'Factory',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          data: [21, 84, 24, 75, 37, 65, 34]
        },
        {
          type: 'bar',
          label: 'Agriculture',
          backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
          data: [41, 52, 24, 74, 23, 21, 32]
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        },
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    const documentStyle1 = getComputedStyle(document.documentElement);
    const textColor1 = documentStyle1.getPropertyValue('--text-color');

    this.data1 = {
      labels: ['HFCs', 'CO2', 'N20', 'PFCs', 'SF6', 'F gases'],
      datasets: [
        {
          data: [2700, 23100, 67, 622, 3, 2718],
          backgroundColor: [documentStyle1.getPropertyValue('--blue-500'), documentStyle1.getPropertyValue('--yellow-500'), documentStyle1.getPropertyValue('--green-500'), documentStyle1.getPropertyValue('--red-500'),documentStyle1.getPropertyValue('--cyan-500'),documentStyle1.getPropertyValue('--purple-500')],
          hoverBackgroundColor: [documentStyle1.getPropertyValue('--blue-400'), documentStyle1.getPropertyValue('--yellow-400'), documentStyle1.getPropertyValue('--green-400'), documentStyle1.getPropertyValue('--red-500'),documentStyle1.getPropertyValue('--cyan-500'), documentStyle1.getPropertyValue('--red-500'),documentStyle1.getPropertyValue('--purple-500')]
        }
      ]
    };

    this.options1 = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };


    const documentStyle2 = getComputedStyle(document.documentElement);
    const textColor2 = documentStyle2.getPropertyValue('--text-color');
    const textColorSecondary2 = documentStyle2.getPropertyValue('--text-color-secondary');
    const surfaceBorder2 = documentStyle2.getPropertyValue('--surface-border');

    this.data2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Actual',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle2.getPropertyValue('--blue-500'),
          tension: 0.4
        },
        {
          label: 'Prediction',
          data: [28, 48, 40, 19, 60, 55, 40],
          fill: false,
          borderColor: documentStyle2.getPropertyValue('--pink-500'),
          tension: 0.4
        }
      ]
    };

    this.options2 = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            color: textColor2
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary2
          },
          grid: {
            color: surfaceBorder2,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary2
          },
          grid: {
            color: surfaceBorder2,
            drawBorder: false
          }
        }
      }
    };
  }
}
