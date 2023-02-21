import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private renderer: Renderer2, private elem: ElementRef){}

  onToggleExpand(div: HTMLDivElement) {

    // get all options
    let options = this.elem.nativeElement.querySelectorAll('.option');

    // get state of options whose toggle-button was clicked
    let expanded = div.classList.contains("expanded");

    // toggle 'hide'-class for the opther options
    options.forEach((element: HTMLDivElement) => {
      if (element != div){
        if (expanded) {
          this.renderer.removeClass(element, 'hide');
        } else {
          this.renderer.addClass(element, 'hide');
        }
      }
    });

    if (!expanded) {
      this.renderer.addClass(div, 'expanded');
    } else {
      this.renderer.removeClass(div, 'expanded');
    }

  }

}
