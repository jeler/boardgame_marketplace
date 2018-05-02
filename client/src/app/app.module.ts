import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe }from './filter.pipe';
import { CreateBoardgameComponent } from './create-boardgame/create-boardgame.component';
import { AllboardgamesComponent } from './allboardgames/allboardgames.component';
import { EditBoardgamesComponent } from './edit-boardgames/edit-boardgames.component';
import { PopularGameInfoComponent } from './popular-game-info/popular-game-info.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDashboardComponent,
    NavbarComponent,
    FilterPipe,
    CreateBoardgameComponent,
    AllboardgamesComponent,
    EditBoardgamesComponent,
    PopularGameInfoComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      NgbModule.forRoot(),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
