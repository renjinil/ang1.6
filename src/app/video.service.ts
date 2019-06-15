import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders   } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video } from './video';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient  :HttpClient ) { }
  getVideos(){
    return this.httpClient .get("/api/videos");
  }
  addVideo( video:Video){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options ={ headers: headers };
    return this.httpClient.post('/api/video',video,options)
  };
    updateVideo( video:Video){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options ={ headers: headers };
    return this.httpClient.put('/api/video/'+video._id,video,options)
  };

  deleteVideo(video:Video){
  return this.httpClient.delete('/api/video/'+video._id);
  }

}
