import {Component} from '@angular/core';
import {Image} from 'src/app/image/image';
@Component({
  selector: 'app-root',
  imports: [Image],
  template: `
    <h1>Default</h1>
    <app-image></app-image>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'default';
}
