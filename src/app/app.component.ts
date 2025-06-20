import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClinicOutcomesComponent } from './features/clinic-outcomes/clinic-outcomes.component';

@Component({
  selector: 'app-root',
  imports: [ClinicOutcomesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = 'clinicapp';
}
