import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { MaterialControlsFormComponent } from './material-controls-form/material-controls-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialControlsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [],  
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
