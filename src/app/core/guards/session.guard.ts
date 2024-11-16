import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';

export const sessionGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  try {
    const token: boolean = cookieService.check('token');
    if (!token) {
      // router.navigateByUrl('./login')
      router.navigate(['/', 'auth']);
    }
    return token;
  } catch (e) {
    console.log('Algo sucedio ?? 🔴', e);
    return false;
  }
};