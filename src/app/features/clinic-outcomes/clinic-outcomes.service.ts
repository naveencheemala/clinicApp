import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ClinicOutcomesService {
  getOutcomes(days: number): Observable<{ timeInRange: number[]; gmi: number[] }> {
    const mockData:any = {
      30: { timeInRange: [6, 80, 14], gmi: [70, 25, 5] },
      60: { timeInRange: [4, 78, 18], gmi: [65, 30, 5] },
      90: { timeInRange: [5, 82, 13], gmi: [72, 23, 5] }
    };

    return of(mockData[days]).pipe(delay(500)); // simulate latency
  
  }
}
