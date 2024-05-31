import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appRoutingProviders } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), ...appRoutingProviders],
}).catch((err) => console.error(err));


