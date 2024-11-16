import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {registerLocaleData} from "@angular/common";
import {es_ES, provideNzI18n} from "ng-zorro-antd/i18n";
import {provideAnimations} from "@angular/platform-browser/animations";
import {CookieService} from "ngx-cookie-service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import es from '@angular/common/locales/es';
import {FormsModule} from "@angular/forms";
// import {AuthInterceptor} from "@core/interceptors/auth.interceptor";

registerLocaleData(es); // Registra los datos de localización para el español

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNzI18n(es_ES),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    CookieService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
};