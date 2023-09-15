import { Component } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent {
  numb:number[] = [];
  constructor(){
    for (let i=0;i<3;i++){
      this.numb.push(i);
    }
  }
}
