import {Component} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LightgalleryModule } from 'lightgallery/angular';

import {Image} from 'src/app/image/image';

@Component({
  
  selector: 'gudstjanst',
  imports: [],
  template: `


<div class ="toolbarright">     <button (click)="onClickr()"> > </button>  </div>
  
<div class ="toolbarleft">
<button (click)="onClickl()"> < </button>  

</div>

<div class = "container">
    
    <img src = "{{list[index].url}}" /> 


      

    </div>
    
  `,styleUrl: "app.css",
  styles: `img{
    width: 50%;
    height: 50%;
    
    }

    button{
    width: 100px;
    height: 100px;
    }

    .container{
     display: flex; 
     justify-content: center; 
     align-items: center;
    }

    .toolbarright{
    position: fixed;
    right: 10px;
    top: 50%
    }


    .toolbarleft{
    position: fixed;
    left: 10px;
    top: 50%;
     
    }
  `,
}
)


export class Gudstjanst{
 index = 0;
  onClickr() {if (this.index < this.list.length){
    
      this.index = this.index+1;
    }}; 
    onClickl() {if (this.index > 0){
      this.index = this.index-1;
    }}; 
  

  list: Array<Image> = [];
  append(img:Image) {
    this.list.push(img);
  }
  
  constructor(){

    this.append(new Image("0.jpg"));
    this.append(new Image("1.jpg"));

    this.append(new Image("2.jpg"));
    this.append(new Image("3.jpg"));

    this.append(new Image("4.jpg"));
    this.append(new Image("5.jpg"));

    this.append(new Image("6.jpg"));
    this.append(new Image("7.jpg"));

  }
}
