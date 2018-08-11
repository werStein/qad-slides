import { Component, OnInit, Output } from '@angular/core';
import { Slide } from '../../shared/slide.model';
import { PresentationService } from '../../presentation.service';
import { Presentation } from '../../shared/presentation.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  presentation: Presentation = null;

  constructor(private presentationService: PresentationService) {
    presentationService.slides$.subscribe((presentation: Presentation) => {
      this.presentation = presentation;
    });
  }

  ngOnInit() {
  }

}
