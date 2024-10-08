import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes), provideAnimationsAsync(),
  ]
})
  .then(() => console.log('Application bootstrapped successfully'))
  .catch(err => console.error('Bootstrap error:', err));
