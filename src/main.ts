import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';  // ← Import 'App' not 'AppComponent'

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));