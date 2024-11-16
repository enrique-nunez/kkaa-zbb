import { Component } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Router, RouterLink } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    NzLayoutModule,
    NzButtonModule,
    NzMenuModule,
    NzIconModule,
    NzCollapseModule,
    NzDropDownModule,
    NzSelectModule,
    RouterLink,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  role: string = '';
  constructor(
    private router: Router,
    private cookieService: CookieService,
    // private authService: AuthService
  ) {
  }

  ngOnInit() {}

  async logout() {
    this.cookieService.delete('token', '/');
    // Pequeña pausa antes de redirigir
    setTimeout(() => {
      this.router.navigate(['/', 'auth']);
      console.log('Redirigiendo a auth');
    }, 100);
  }

  // getRole() {
  //   return this.authService.getUserRol();
  // }

}
