import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ClinicOutcomesService } from './clinic-outcomes.service';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-clinic-outcomes',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './clinic-outcomes.component.html'
})
export class ClinicOutcomesComponent implements OnInit {
  barType: ChartType = 'bar';
  pieType: ChartType = 'pie';
  selectedRange: number = 30;
  activePatients = 120;
  dateRange = { start: '05/01/2025', end: '05/31/2025' };
  lastUpdated = '20/06/2025, 3:00 PM';
  timeInRangeChart: ChartConfiguration<'bar'>['data'] = { labels: [], datasets: [] };
  gmiChart: ChartConfiguration<'pie'>['data'] = { labels: [], datasets: [] };
  isBrowser = false;
  constructor(private api: ClinicOutcomesService,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadData(30);
    }
  }

  loadData(days: number) {
    this.selectedRange = days;
    this.api.getOutcomes(days).subscribe(data => {
      this.timeInRangeChart = {
        labels: ['Low', 'In Range', 'High'],
        datasets: [
          { label: 'TIR %', data: data.timeInRange, backgroundColor: ['#f00', '#0f0', '#ff0'] }
        ]
      };

      this.gmiChart = {
        labels: ['<7%', '7-8%', '>8%'],
        datasets: [
          { data: data.gmi, backgroundColor: ['#0f0', '#ffa500', '#f00'] }
        ]
      };
    });
  }
}