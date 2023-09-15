import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
    @Input() nos?:string;
    path:string;

    constructor() {
      if (this.nos == "0") {
        this.path = "https://images.pexels.com/photos/712319/pexels-photo-712319.jpeg?auto=compress&cs=tinysrgb&w=600";
      } else if (this.nos == "1") {
        this.path = "https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=600";
      } else {
        this.path = "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=600";
      }
    }
    
}
