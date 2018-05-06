import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  isDeleted: boolean = false;
  @Input() game;
  @Input() session;
  @Output() gameDeleted = new EventEmitter<boolean>();
// @ = signifies decorator; session = property

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  onClick()
  {
    console.log(this.game._id);
    console.log(this.game)
  }

  openSellerDetails()
  {
    console.log(this.game," this is game from 27")
  }

  deleteGame(id)
  {
    let deleteGame = this._httpService.deleteGame(id).subscribe(data => {
      console.log("deleted!")
      this.isDeleted = true;
      this.gameDeleted.emit(this.isDeleted)           
    })
  }
}
