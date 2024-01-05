import { ApplicationConfig } from '@angular/core';
import { withDebugTracing, withPreloading, PreloadAllModules, provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [ provideAnimations(), provideHttpClient()
  ], 
};
