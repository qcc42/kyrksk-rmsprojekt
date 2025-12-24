import {Component} from '@angular/core';
import {Image} from 'src/app/image/image';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-root',
  imports: [Image, MatSlideToggleModule],
  template: `
    <h1>Default</h1>
    <app-image></app-image>
<mat-slide-toggle>Toggle me!</mat-slide-toggle>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'default';
}
