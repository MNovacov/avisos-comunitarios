import { ApplicationConfig } from '@angular/core';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { appRouterProviders } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideIonicAngular(), ...appRouterProviders],
};
