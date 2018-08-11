import { Component, OnInit, Input, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';
import { Presentation } from '../shared/presentation.model';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  isInFullscreen = false;
  @Input() presentation: Presentation;

  @HostListener('keyup') onKeyUp(event: KeyboardEvent) {
    console.log('keyup occured');
      if (event.keyCode === 37) {
          // case: left arrow
          console.log('move backwards');
          // moveSlideBackwards();
      } else if (event.keyCode === 39) {
          // case: right arrow
          console.log('mvoe forewards');
          // moveSlideForwards();
      }
  }

  constructor() { }

  ngOnInit() {
  }

  onFullscreenButtonClicked() {
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isInFullscreen = !this.isInFullscreen;
    }
  }

}
