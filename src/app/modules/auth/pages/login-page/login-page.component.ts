import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import * as dataRaw from "../../../../data/user.json";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  errorSession: boolean = false;
  // formLogin: UntypedFormGroup = new UntypedFormGroup({});
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private router: Router,
    private cookieService: CookieService,
    // private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formLogin = new UntypedFormGroup({
      username: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(3),
        // Validators.maxLength(12)
      ]),
    });
    // this.cdr.detectChanges();
  }

  sendLogin(): void {
    const body = this.formLogin.value;
    // const { username, password } = this.formLogin.value;
    const { users }: any = (dataRaw as any).default;
    console.log('const value: any = (dataRaw as any).default;', users)
    const user = users.find((user: any) => (user.usuario_id === body.username && user.password === body.password))
    if (user) {
      console.log('body', body)
      // this.router.navigate(['', ''])
      const tokenSession = 'ahhasjkdksajfsjfsagfgsfsaf';
      this.cookieService.set('token', tokenSession, 4, '/');
      localStorage.setItem('username-aje', user.usuario_id);
      this.router.navigate(['/ejemplo-page']);
      this.errorSession = false;
    } else {
      this.errorSession = true;
    }
  }
}
