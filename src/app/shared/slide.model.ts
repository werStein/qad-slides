import * as uuid from 'uuid';
export class Slide {
  id: string;
  overlayColor: string;
  backgroundImageUrl: string;
  text = 'This is just some placeholder text';
  constructor() {
    this.id = uuid();
  }
}
