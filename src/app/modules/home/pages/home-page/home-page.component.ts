import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  private windowWidth: number;
  constructor(
    private cdr: ChangeDetectorRef,
  ) {
    this.windowWidth = window.innerWidth;
    // this.checkScreenSize();
  }

  // checkScreenSize() {
  //   this.isScreenSmall = window.innerWidth < 768;
  // }

  shouldAddBreakpoint(): boolean {
    return this.windowWidth <= 991;
  }
}
