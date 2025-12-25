import {Component, Input} from '@angular/core';
@Component({
    selector: 'event-button',
    imports: [],
    template: `
     <button (click)="onClick($event)"> Ultimate </button> 
  `,

  

})

export class EventButton { 
    

    onClick(event: Event) { console.log("click", event); } }