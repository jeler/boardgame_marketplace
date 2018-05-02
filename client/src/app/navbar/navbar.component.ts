import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(
    private _httpService: HttpService, 
    private _router: Router,
    private location: Location) { }

  ngOnInit() {
  }


  userLogout() {
    let observable = this._httpService.userLogout();
    observable.subscribe(data => console.log(data, "this is data!"))
    this._router.navigateByUrl("/")
  }
  goBack(): void {
    this.location.back()
  }
}
