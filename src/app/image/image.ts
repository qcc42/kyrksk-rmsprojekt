import { Component, Input} from '@angular/core';



@Component({
  selector: 'app-image',
  imports: [],
  template: `

    <div class = "container">
    
    <img src = "{{src}}.jpeg"/> 
    <button (click)="onClick()"> Ultimate </button> 

      

    </div>
    
  `,
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
})
export class Image {
      
       src = 1;
       onClick() {if(this.src ===1){ this.src = 2}else{this.src = 1};} 
}
