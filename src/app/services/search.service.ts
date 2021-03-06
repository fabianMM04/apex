import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SEARCH, DETAIL, RECOMENDED } from './global';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
    public url: string;
    public url2: string;
    public url3: string;


    constructor(private http: HttpClient) { 
      this.url = SEARCH.url;
      this.url2 = DETAIL.url;
      this.url3 = RECOMENDED.url;


  }


  //YOUTUBE
  youtubeView(word): Observable<any> {

    let headers = new HttpHeaders(
      { 'trn-api-key': 'd26186cf-d270-473a-b552-a6357758f05e'
      });

    

    return this.http.get("/api/apex/v1/standard/profile/5/"+ word, {headers: headers} );

}

 //DETAIL
 detailView(id): Observable<any> {

  let headers = new HttpHeaders({ 'Content-Type': 'application/json',
 
          
  });

  return this.http.get(this.url2+"&id="+ id );

}

 //RECOMENDED
 recomendedView(id): Observable<any> {

  let headers = new HttpHeaders({ 'Content-Type': 'application/json',
 
          
  });

  return this.http.get(this.url3+"&relatedToVideoId="+ id+ "&maxResults=6");

}


}
