import { Component, OnInit } from '@angular/core';
import { FilterPipe }from '../filter.pipe';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-allboardgames',
  templateUrl: './allboardgames.component.html',
  styleUrls: ['./allboardgames.component.css']
})
export class AllboardgamesComponent implements OnInit 
{

  
  constructor(private _httpService: HttpService, private _router: Router) { }
  user_info: any;
  games: any;
  session: any;
  searchText: any;
  
  ngOnInit() {
    this.getGames();    
    this.checkSessionUserComponent()
  }

  checkSessionUserComponent()
  {
    var session_data = this._httpService.checkSessionUser();
    session_data.subscribe(data => {
      if(data["session"]== false)
      {
        this._router.navigateByUrl("/")                  
      }
      else 
      {
        this.user_info = data["user"]
        this.session = data["session"]
      }
    })
  }

  getGames()
  {
    let allGames = this._httpService.getAllGames().subscribe(data => {
      this.games = data["games"];
    })
  }
}
