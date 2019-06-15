import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import {FormsModule} from "@angular/forms";
import { VideoService } from '../video.service';
@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.sass']
})
export class VideoCenterComponent implements OnInit {
selectedVideo :any;
private  hidenewVideo:boolean =true;
  videos:any;

  constructor(private _videoservice :VideoService ) { }

  ngOnInit() {
    this._videoservice.getVideos().subscribe(resVideoData => this.videos = resVideoData);
  }
    onSelectVideo(video :any){
      this.selectedVideo = video;
      this.hidenewVideo=true;
      console.log(this.selectedVideo);
    }
     onSubmitVideo(video : Video){
       this._videoservice.addVideo(video).subscribe( resNewVideo =>{
         this.videos.push(resNewVideo);
        this.selectedVideo = resNewVideo;
           this.hidenewVideo=true;
       });
     }
    newVideo(){
     this.hidenewVideo=false;
    }
    onUpdateVideoEvent(video:any){
       this._videoservice.updateVideo(video).subscribe( resupdatedVideo =>{
         video = resupdatedVideo;
       });
       this.selectedVideo = null;
    }
    onDeleteVideoEvent(video:any){
      let videoarray = this.videos;
      this._videoservice.deleteVideo(video).subscribe( resdeletedVideo =>{
         for(let i=0;i<=videoarray.length;i++){
            if((videoarray[i]._id)==video._id){
              videoarray.splice(i,1);
            }
         }
       });
         this.selectedVideo = null;
    }
}
