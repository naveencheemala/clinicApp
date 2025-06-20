import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import 'zone.js';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PieController, ArcElement } from 'chart.js';

// ✅ Register chart types
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PieController,
  ArcElement
);
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient()
  ]
}).catch(err => console.error(err));
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// bootstrapApplication(App,{
//   providers: [
//     ...appConfig.providers,
//     provideStore({clinicOutcomes:clinicOutcomesReducer}) // ✅ even an empty object is OK to start
//   ]
// }).catch((err) => console.error(err));
