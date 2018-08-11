import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Slide } from './shared/slide.model';
import * as _ from 'lodash';
import { Presentation } from './shared/presentation.model';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  presentation: Presentation;

  private slideSubject = new BehaviorSubject(this.presentation);
  slides$ = this.slideSubject.asObservable();

  private editSlideSubject = new BehaviorSubject(null);
  editSlide$ = this.editSlideSubject.asObservable();

  constructor() {
    this.presentation = new Presentation();
  }

  addSlide(slide: Slide) {
    if (slide) {
      this.presentation.slides.push(slide);
      this.slideSubject.next(_.cloneDeep(this.presentation));
    }
  }

  updateSlide(slide: Slide) {
    if (slide) {
      const index = this.presentation.slides.map(s => s.id).indexOf(slide.id);
      if (index > -1) {
        this.presentation.slides[index] = _.cloneDeep(slide);
        this.slideSubject.next(_.cloneDeep(this.presentation));
      }
    }
  }

  editSlide(slide: Slide) {
    if (slide) {
      this.editSlideSubject.next(slide);
    }
  }

  deleteSlide(slide: Slide) {
    if (slide) {
      this.presentation.slides = this.presentation.slides.filter(s => s.id !== slide.id);
      this.slideSubject.next(_.cloneDeep(this.presentation));
    }
  }



}

