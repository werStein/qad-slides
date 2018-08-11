import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Slide } from '../../../shared/slide.model';
import { PresentationService } from '../../../presentation.service';

@Component({
  selector: 'app-slide-preview',
  templateUrl: './slide-preview.component.html',
  styleUrls: ['./slide-preview.component.css']
})
export class SlidePreviewComponent implements OnInit {
  @Input() slide: Slide;

  constructor(private presentationService: PresentationService) { }

  ngOnInit() {
  }

  onClicked() {
    this.presentationService.editSlide(this.slide);
  }

}
