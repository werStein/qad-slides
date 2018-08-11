import { Component, OnInit, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { Slide } from '../../shared/slide.model';
import { PresentationService } from '../../presentation.service';

@Component({
  selector: 'app-slide-edit',
  templateUrl: './slide-edit.component.html',
  styleUrls: ['./slide-edit.component.css']
})
export class SlideEditComponent implements OnInit {
  slide: Slide = null;
  @ViewChild('text') text;

  constructor(private presentationService: PresentationService) {
    presentationService.editSlide$.subscribe(slide => {
      this.slide = slide;
    });
  }

  ngOnInit() {
  }

  onTextUnfocused(event: FocusEvent) {
    const text = this.text.nativeElement.innerText;
    this.slide.text = text;
    this.presentationService.updateSlide(this.slide);
  }

  onTextFocused() {
    console.log('focused!');
  }


}
