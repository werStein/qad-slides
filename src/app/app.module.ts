import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorComponent } from './editor/editor.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SlideEditComponent } from './editor/slide-edit/slide-edit.component';
import { PreviewComponent } from './editor/preview/preview.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { SlidePreviewComponent } from './editor/preview/slide-preview/slide-preview.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HomeComponent } from './home/home.component';
import { SlideComponent } from './slideshow/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    SlideEditComponent,
    PreviewComponent,
    SlidePreviewComponent,
    SlideshowComponent,
    HomeComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
