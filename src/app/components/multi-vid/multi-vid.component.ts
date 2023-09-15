import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multi-vid',
  templateUrl: './multi-vid.component.html',
  styleUrls: ['./multi-vid.component.css']
})
export class MultiVidComponent {
  
  //videoPathWork:string=videoPath;
  videoPath:string="https://overflow.io/upload/o/public/presentation/canvas-view.mp4?v=1690792460362"
  CanvaView(videoPath="https://overflow.io/upload/o/public/presentation/canvas-view.mp4?v=1690792460362"){};
  PrototypeView(){this.videoPath=""}
  StoryView(){this.videoPath=""}
}
