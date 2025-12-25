import {Component} from '@angular/core';
import {Image} from 'src/app/image/image';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LightgalleryModule } from 'lightgallery/angular';
import {EventButton }from 'src/app/eventbutton';

@Component({
  selector: 'app-root',
  imports: [EventButton, Image, MatSlideToggleModule, LightgalleryModule],
  template: `

 <event-button> </event-button> 

  <button><</button>
    <button>></button>
<mat-slide-toggle>Toggle me!</mat-slide-toggle>

<app-image src = "pic.png"> </app-image>
`,
  styleUrls: ['./app.css'],
})
export class App {
}



