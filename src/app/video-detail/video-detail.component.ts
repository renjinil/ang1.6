import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.sass'],
  outputs:['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {
private editTitle:boolean = false;
public videoVal;
public updateVideoEvent= new EventEmitter();
public deleteVideoEvent= new EventEmitter();
@Input() 
get video(){
  return this.videoVal;
}
set video(val){
  this.videoVal = val;
   console.log("video",this.videoVal)
}
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.editTitle=false;
  }
onEditTitle(){
  this.editTitle=true;
}
updateVideo(){
  this.updateVideoEvent.emit(this.video);
}
deleteVideo(){
  this.deleteVideoEvent.emit(this.video);
}
}
