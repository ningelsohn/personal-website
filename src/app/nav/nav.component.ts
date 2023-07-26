import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ColorService } from '../color.service';
import { ColorProfile } from '../color-profile';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  i: number;

  colorProfiles: ColorProfile[];

  constructor(private colorService: ColorService){
    this.i = 0;
    this.colorProfiles = colorService.profiles;
  }

  onChangeColor(i: number) {
    document.documentElement.style.setProperty('--base-color', this.colorService.profiles[i].baseColor);
    document.documentElement.style.setProperty('--theme-color-1', this.colorService.profiles[i].themeColor1);
    document.documentElement.style.setProperty('--theme-color-2', this.colorService.profiles[i].themeColor2);
    document.documentElement.style.setProperty('--theme-color-3', this.colorService.profiles[i].themeColor3);
    document.documentElement.style.setProperty('--theme-color-4', this.colorService.profiles[i].themeColor4);

    // this.i = (this.i + 1)%this.colorService.profiles.length;
  }

  @ViewChild('menu', { static: true }) menu!: ElementRef<HTMLDivElement>;
  @Input() navOpen: boolean = false;

}
