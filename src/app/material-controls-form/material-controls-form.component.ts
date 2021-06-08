import { Component } from '@angular/core';

import { MaterialControls } from '../data/material-controls';

@Component({
  selector: 'app-material-controls-form',
  templateUrl: './material-controls-form.component.html',
  styleUrls: ['./material-controls-form.component.scss']
})
export class MaterialControlsFormComponent {

  jsonValue: string;
  materialControls: MaterialControls;
    
  constructor() { }
  
  enterJsonButtonClicked(): void {  

    this.materialControls = this.tryParseJSON(this.jsonValue);
  }
  
  private tryParseJSON(jsonString: string): MaterialControls{

    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o == "object") {
            return o;
        }
    }
    catch (e) {
      alert(e); 
     }

    return undefined;
  };
}
