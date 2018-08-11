import { Slide } from './slide.model';
import * as uuid from 'uuid';

export class Presentation {
  id: string;
  slides: Slide[] = [];
  constructor() {
    this.id = uuid();
  }
}
