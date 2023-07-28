import { Component, ElementRef, EventEmitter, HostListener, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('option1', { static: false }) option1Element!: ElementRef<HTMLDivElement>;
  @ViewChild('option2', { static: true }) option2Element!: ElementRef<HTMLDivElement>;
  @ViewChild('option3', { static: true }) option3Element!: ElementRef<HTMLDivElement>;
  @ViewChild('option4', { static: true }) option4Element!: ElementRef<HTMLDivElement>;

  @ViewChild('mobileScrollTargetFakeSurvey', { static: false }) mobileScrollTargetFakeSurvey!: ElementRef;

  @Output() closeNav = new EventEmitter<void>();

  divList: HTMLDivElement[] = [];

  btnsHiddenTempValue: boolean = true;
  btnsHidden: boolean = true;

  curr: number = -1;

  constructor(private renderer: Renderer2, private elem: ElementRef){}

  ngAfterViewInit() {
    this.divList = [
      this.option1Element.nativeElement,
      this.option2Element.nativeElement,
      this.option3Element.nativeElement,
      this.option4Element.nativeElement
    ];
  }

  onToggleExpand(div: HTMLDivElement) {

    // emit info to close nav if open
    this.closeNav.emit();

    // set current section
    this.curr = this.divList.indexOf(div);

    // get state of options whose toggle-button was clicked
    let expanded = div.classList.contains("expanded");

    // toggle 'hide'-class for the opther options
    this.divList.forEach((element: HTMLDivElement) => {
      if (element != div){
        if (expanded) {
          this.renderer.removeClass(element, 'hidden');
        } else {
          this.renderer.addClass(element, 'hidden');
        }
      }
    });

    // toggle expand state, set visibilty of navigation buttons accordingly
    if (!expanded) {
      this.renderer.addClass(div, 'expanded');
      this.btnsHiddenTempValue = false;
      setTimeout(() => {
        this.btnsHidden = this.btnsHiddenTempValue;
      }, 750);
    } else {
      this.renderer.removeClass(div, 'expanded');
      this.btnsHiddenTempValue = true;
      this.btnsHidden = true;

      // reset scroll
      setTimeout(() => {
        div.querySelector('.option-inner')!.scrollTo({top: 0, behavior: 'smooth'});
      }, 250);
    }

  }

  onSwitch(dir: number, event: Event) {

    event.stopPropagation();

    this.renderer.removeClass(this.divList[this.curr], 'expanded');
    this.renderer.addClass(this.divList[this.curr], 'hidden');

    this.renderer.removeClass(this.divList[this.curr + dir], 'hidden');
    this.renderer.addClass(this.divList[this.curr + dir], 'expanded');

    this.curr += dir;

    // reset scroll
    setTimeout(() => {
      this.divList[this.curr].querySelector('.option-inner')!.scrollTo({top: 0, behavior: 'smooth'});
    }, 250);
  }

  onClickOption(event: Event) {
    // On desktop, the click expands the view and lets the user see more info
    // On mobile (in this application, screens narrower than 1200px get the mobile view), we need to scroll down on click to reveal the same info
    if (window.innerWidth < 1200) {
      event?.stopPropagation();
      this.mobileScrollTargetFakeSurvey.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // prevents click from triggering multiple times
  // used for buttons for example, which are located in a big clickable container
  onClickHrefStopPropagation(event: Event) {
    event?.stopPropagation();
  }

}
