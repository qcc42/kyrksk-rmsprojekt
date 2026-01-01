import {Component} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LightgalleryModule } from 'lightgallery/angular';

import {Image} from 'src/app/image/image';

@Component({
  
  selector: 'app-root',
  imports: [ MatSlideToggleModule, LightgalleryModule],
  template: `



  <button><</button>
    <button>></button>
<mat-slide-toggle>Toggle me!</mat-slide-toggle>


    <div class = "container">
    
    <img src = "{{list[index].url}}"/> 
    <button (click)="onClick()"> Ultimate </button> 

      

    </div>
    
  `,styleUrl: "app.css",
  styles: `.images{
    width: 50%;
    height: 50%;
    
    }

    .container{
     display: flex; 
     justify-content: center; 
     align-items: center;
    }

  `,
}
)


export class App{
  onClick() {this.index = (this.index+1)%2;}; 
  index = 0;
  img1 = new Image("1.jpeg");
 
  list: Array<Image> = [];
  append(img:Image) {
    this.list.push(img);
  }
  constructor(){

    this.append(new Image("0.jpeg"));
    this.append(new Image("1.jpeg"));

  }
}

 


  


