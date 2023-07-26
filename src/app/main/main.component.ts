import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  navOpen: boolean = false;

  onToggleNav() {
    if (window.innerWidth <= 1200) {
      this.navOpen = !this.navOpen;
    }
  }

  onCloseNav() {
    this.navOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    if (window.innerWidth > 1200) {
      this.onCloseNav();
    }
  }

}
