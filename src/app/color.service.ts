import { Injectable } from '@angular/core';
import { ColorProfile } from './color-profile';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  readonly profiles: ColorProfile[] = [
    {baseColor: '#2c2c2c', themeColor1: '#C0D8C0', themeColor2: '#F5EEDC', themeColor3: '#DD4A48', themeColor4: '#ECB390'},
    {baseColor: '#2c2c2c', themeColor1: '#6C00FF', themeColor2: '#2166f0', themeColor3: '#2DCDDF', themeColor4: '#F2DEBA'},
    {baseColor: '#2c2c2c', themeColor1: '#EA047E', themeColor2: '#FF6D28', themeColor3: '#FCE700', themeColor4: '#00F5FF'},
    {baseColor: '#2c2c2c', themeColor1: '#4542E4', themeColor2: '#F637EC', themeColor3: '#FBB454', themeColor4: '#FAEA48'},
    {baseColor: '#2c2c2c', themeColor1: '#FBB454', themeColor2: '#A0937D', themeColor3: '#E7D4B5', themeColor4: '#F6E6CB'},
    {baseColor: '#2c2c2c', themeColor1: '#B7C4CF', themeColor2: '#EEE3CB', themeColor3: '#D7C0AE', themeColor4: '#967E76'},
  ]
  
  constructor() { }

  // getServices

}
