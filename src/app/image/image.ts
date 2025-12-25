import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  template: `

    <div class = "container"><img  class="images" src = {{source}}/></div>
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
@Input('src') source ?:  string | "";

}
