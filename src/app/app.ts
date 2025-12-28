import {Component} from '@angular/core';
import {EventButton} from 'src/app/eventbutton';
import {Image} from 'src/app/image/image';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LightgalleryModule } from 'lightgallery/angular';

import {changeState} from 'src/app/helper';

@Component({
  selector: 'app-root',
  imports: [EventButton, MatSlideToggleModule, LightgalleryModule, Image],
  template: `



  <button><</button>
    <button>></button>
<mat-slide-toggle>Toggle me!</mat-slide-toggle>

<app-image>  </app-image>
`,
  styleUrls: ['./app.css'],
})
export class App {
}



