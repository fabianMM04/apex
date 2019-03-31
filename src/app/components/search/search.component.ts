
import { Component, OnInit, DoCheck } from '@angular/core';
import {Youtube} from '../../models/search';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public youtube: Youtube;
  public dataLis =[];
  public level =String;
  public rank = String;
  public kills = String;
  public damages = String;
  public headshots = String;
  

  constructor(
  
    private _route: ActivatedRoute,
    private _router: Router,
    private _searchService: SearchService,
   
  ) { 
    this.youtube = new Youtube('');

  }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log(this.dataLis);

  }


  onSubmit(){

    this._searchService.youtubeView(this.youtube.name).subscribe(
        response=>{
        
         this.dataLis = response.data.children;
         this.level = response.data.metadata.level;
         //this.rank = response.data.stats[3].rank;
         //this.kills = response.data.stats[1].value;
         //this.damages = response.data.stats[2].value;
         //this.headshots = response.data.stats[3].value;
         
         
        }, 
        error =>{
          console.log(<any>error);
        }
    );

  }
}
