import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

class SearchItem {
  constructor(public name: string,
              public artist: string,
              public link: string,
              public thumbnail: string,
              public artistId: string,
              public artworkUrl30:string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  apiMusic: string = `https://itunes.apple.com/search`; 
  loading: boolean;
 public DataResults: SearchItem[];

  constructor(private http: HttpClient) { 
    this.DataResults = [];
    this.loading = false;
  }

  search(term:string) {
    let promise = new Promise<void>((resolve, reject) => {
      let apiURL = `${this.apiMusic}?term=${term}&media=music&limit=20`;
      console.log('search url :' + apiURL);
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            this.DataResults =JSON.parse(JSON.stringify(res)).results.map(item => {
              return new SearchItem(
                  item.trackName,
                  item.artistName,
                  item.trackViewUrl,
                  item.trackName,
                  item.artistId,
                  item.artworkUrl30
              );
            });
            resolve();
          }
        );
    });
    return promise;
  }


}
