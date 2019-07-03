(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/allboardgames/allboardgames.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/allboardgames/allboardgames.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<textarea rows=\"2\" cols=\"75\" class=\"search\" [(ngModel)]=\"searchText\" placeholder=\"Search for a Game!\"></textarea>\n<br>\n<h1>Welcome {{user_info?.first_name}}</h1>\n<app-boardgame \n*ngFor=\"let game of games| filter:'title':searchText\" \n[game]=\"game\" \n[session]=\"session\"\n(gameDeleted)=\"getGames()\"></app-boardgame>\n<!-- [session] = attribute from @input in boardgame component-->\n<!-- \"session\" = variable containing session information from allboardgames -->\n<!-- [session] = \"session\" : bound atrribute session to session variable from allboardgames -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/boardgame/boardgame.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/boardgame/boardgame.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h2>{{game.title}}</h2>\n      </div>\n      <div class=\"col-6 text-right\">\n        <button *ngIf=\"(game._user._id) === (session)\" class=\"btn btn-danger\" (click)=\"deleteGame(game._id)\">Delete</button>\n        <button *ngIf=\"(game._user._id) == (session)\" class=\"btn btn-info\" routerLink='/edit/{{game._id}}'>Edit Listing</button>\n        <button *ngIf=\"(game._user._id) != (session)\" class=\"btn btn-info\" (modalClick)=\"openSellerDetails()\" >Contect Seller</button>\n        <!-- <div class=\"modal fade\" id=\"contactInfoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"contactInfoLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"contactInfoLabel\">Seller Details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                {{game._id}} {{game._user._id}} {{game._user.email}} {{game._user.first_name}} {{game._user.last_name}}\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              </div>\n            </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <p>Description: {{game.description}}</p>\n        <p>Condition: {{game.condition}}</p>\n      </div>\n      <div class=\"col-6 text-right\">\n        <h2>${{game.price}}</h2>\n        <p>{{game.location}}</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-boardgame/create-boardgame.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-boardgame/create-boardgame.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col creategame\">\n    <form #createbgform=\"ngForm\" (submit) = createNewBoardgame(BoardGameCreate)>\n      <p>Title</p>\n      <input type=\"text\" \n      name=\"title\" \n      required\n      [(ngModel)]=\"BoardGameCreate.title\"\n      #title=\"ngModel\"\n      />\n      <div class=\"error\" *ngIf=\"!title.valid && (title.touched)\">Title is required!</div>  \n      <br><br>\n      <p><textarea rows=\"4\" cols=\"50\" \n      name=\"description\" \n      required\n      maxlength=\"200\"\n      [(ngModel)]=\"BoardGameCreate.description\"\n      #description =\"ngModel\"></textarea></p>\n      <div class=\"error\" *ngIf=\"!description.valid && (description.touched)\">Description is required!</div>\n      <p>Price</p>\n      <input type=\"number\"\n      name=\"price\"\n      required\n      [(ngModel)]=\"BoardGameCreate.price\"\n      #price =\"ngModel\"/>\n      <div class=\"error\" *ngIf=\"!price.valid && (price.touched)\">Price is required!</div> \n      <br><br>\n      <p>Location</p> \n      <p><input type=\"text\"\n      name=\"location\"\n      required\n      [(ngModel)]=\"BoardGameCreate.location\"\n      #location=\"ngModel\"/></p>\n      <div class=\"error\" *ngIf=\"!location.valid && (location.touched)\">Location is required!</div>\n      <p>Condition</p>\n      <p><select\n        name=\"BoardGameCreate.condition\"\n        [(ngModel)]=\"BoardGameCreate.condition\">\n          <option value=\"Used\">Used</option>\n          <option value=\"Like New\">Like New</option>\n          <option value=\"New\">New</option>\n      </select>\n      </p>\n      <input type=\"submit\"[disabled]=\"!createbgform.form.valid\">  \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dynamic-modal/dynamic-modal.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dynamic-modal/dynamic-modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dynamic-modal works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-boardgames/edit-boardgames.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-boardgames/edit-boardgames.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\">\n  <div class=\"row\">\n    <div class=\"col-8 editgame\">\n      <div class=\"alert alert-success\" *ngIf=\"saveSuccess\">\n        <strong>Success! Your Game Has Been Updated!</strong>\n      </div>\n      <div *ngIf=\"game\">\n          <form #editbgform=\"ngForm\" (submit)=editBoardgame()>\n            <p>Title</p>\n            <input name=\"title\" required [(ngModel)]=\"game.title\" #title=\"ngModel\" />\n            <div class=\"error\" *ngIf=\"!title.valid && (title.touched)\">Title is required!</div>\n            <p>Description</p>\n              <textarea rows=\"4\" cols=\"50\" name=\"description\" required maxlength=\"200\" [(ngModel)]=\"game.description\" #description=\"ngModel\"></textarea>\n            <div class=\"error\" *ngIf=\"!description.valid && (description.touched)\">Description is required!</div>\n            <p>Price</p>\n            <input type=\"number\" name=\"price\" required [(ngModel)]=\"game.price\" #price=\"ngModel\" />\n            <div class=\"error\" *ngIf=\"!price.valid && (price.touched)\">Price is required!</div>\n            <p>Location</p>\n              <input type=\"text\" name=\"location\" required [(ngModel)]=\"game.location\" #location=\"ngModel\" />\n            <div class=\"error\" *ngIf=\"!location.valid && (location.touched)\">Location is required!</div>\n            <p>Condition</p>\n              <select name=\"game.condition\" [(ngModel)]=\"game.condition\">\n                <option value=\"Used\">Used</option>\n                <option value=\"Like New\">Like New</option>\n                <option value=\"New\">New</option>\n              </select>\n              <br><br>\n            <p><input type=\"submit\" [disabled]=\"!editbgform.form.valid\"></p>\n          </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row justify-content-center\">\n        <h2 class=\"bgoftheday\">Popular Board Games!</h2>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\" *ngFor=\"let game of games\">\n            <div *ngIf=\"game.rank < 5\">\n                <a routerLink=\"/popular/{{game.gameId}}\">\n                    <div class=\"badge\">\n                        {{game?.rank}}. {{game?.name}} \n                        <p><img class=\"game_pic\" src=\"{{game.thumbnail}}\"></p>\n                        <p>Published: {{game?.yearPublished}}</p>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n        <br><br>\n    <div class=\"col forms\">\n        <div class= \"row\">\n            <div class=\"col-md-6 justify-content-center\">\n                <div class=\"col-2-sm register\">\n                    <form #registerform=\"ngForm\" (submit) = onSubmit(UserReg)>\n                        <div class=\"form-group row my-2\">\n                            <label for=\"email_reg\" class=\"col-sm-4 col-form-label text-right\">Email</label>\n                            <div class=\"col-sm-8\">         \n                                <input type=\"text\" \n                                name=\"UserReg.email\" required [(ngModel)]=\"UserReg.email\" #email =\"ngModel\" class=\"col-md-12\"/>\n                                <div class=\"error\"*ngIf=\"!email.valid && email.touched\">Email is not valid!</div> \n                            </div>\n                        </div>\n                        <div class=\"form-group row my-2\">\n                            <label for=\"first_name\" class=\"col-sm-4 col-form-label text-right\">First Name</label>\n                            <div class=\"col-sm-8\"> \n                                <input type=\"text\" name=\"UserReg.first_name\" [(ngModel)]=\"UserReg.first_name\" required minlength=\"2\" #firstname =\"ngModel\" class=\"col-md-12\"/>\n                                <div class=\"error\"*ngIf=\"!firstname.valid && firstname.touched\">First name must contain 2 characters!</div>\n                            </div>                            \n                        </div>\n                        <div class=\"form-group row my-2\">\n                            <label for=\"last_name\" class=\"col-sm-4 col-form-label text-right\">Last Name</label>\n                            <div class=\"col-sm-8\">\n                                <input type=\"text\" name=\"UserReg.last_name\" [(ngModel)]=\"UserReg.last_name\"  required minlength=\"2\" #lastname=\"ngModel\" class=\"col-md-12\"/>\n                                <div class=\"error\"*ngIf=\"!lastname.valid && lastname.touched\">Last name must contain 2 characters!</div>\n                            </div>\n                        </div>   \n                        <div class=\"form-group row my-2\">\n                            <label for=\"password_reg\" class=\"col-sm-4 col-form-label text-right\">Password</label>\n                            <div class=\"col-sm-8\"> \n                                <input type=\"password\" name=\"UserReg.password\" [(ngModel)]=\"UserReg.password\" #passwordreg=\"ngModel\" required minlength=\"8\" class=\"col-md-12\"/>\n                                <div class=\"error\"*ngIf=\"!passwordreg.valid && passwordreg.touched\">Password must contain at least 8 characters!</div>  \n                            </div>   \n                        </div>   \n                        <div class=\"form-group row my-2\">\n                            <label for=\"pw_confirm\" class=\"col-sm-4 col-form-label text-right\">Password Confirmation</label>\n                            <div class=\"col-sm-8\"> \n                                <input type=\"password\" name=\"UserReg.password_confirm\" [(ngModel)]=\"UserReg.password_confirm\" class=\"col-md-12\" #passwordconfirm=\"ngModel\"/>\n                                <div class=\"error\" *ngIf=\"UserReg.password != UserReg.password_confirm\">Passwords do not match!</div>\n                            </div>\n                        </div>\n                        <div class=\"row justify-content-end my-2\">\n                            <div class=\"col-sm-3 mr-3\">\n                                <input type=\"submit\"[disabled]=\"!registerform.form.valid\" class=\"btn btn-success\" value=\"Register\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-6 justify-content-center\"> \n                <div class=\"col-2-sm login\">     \n                    <form #loginform = \"ngForm\" (submit) = onLogin(UserLog)>\n                        <div class=\"form-group row my-2\"> \n                            <label for=\"email_reg\" class=\"col-sm-4 col-form-label text-right\">Email</label>\n                            <div class=\"col-sm-8\">                   \n                                <input type=\"email\" name=\"UserLog.email\" [(ngModel)]=\"UserLog.email\" required #logemail=\"ngModel\" class=\"col-md-12\">\n                                <div class=\"error\"*ngIf=\"!logemail.valid && logemail.touched\">You need to enter an email!</div>\n                            </div>\n                        </div>     \n                        <div class=\"form-group row my-2\"> \n                            <label for=\"password_reg\" class=\"col-sm-4 col-form-label text-right\">Password</label>\n                            <div class=\"col-sm-8\"> \n                                <input type=\"password\" name=\"UserLog.password\" [(ngModel)]=\"UserLog.password\" #passwordlog=\"ngModel\"required class=\"col-md-12\">\n                                <div class=\"error\" *ngIf=\"!passwordlog.valid &&passwordlog.touched\">You need to enter a password!</div>\n                                <div class=\"error\" *ngIf=\"LogError\">{{LogError}}</div>\n                            </div>\n                        </div>\n                        <div class=\"row justify-content-end my-2\">\n                            <div class=\"col-sm-3 mr-3\">\n                                <input class=\"btn btn-primary\" type=\"submit\" [disabled] =\"!loginform.form.valid\" value=\"Login\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- <div class=\"bgmarketplace fixed-top\"> -->\n  <div class=\"bgmarketplace\">\n    <h1>Board Game Marketplace</h1>\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Home\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/createboardgame']\">Create New Listing</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/myboardgames']\">My Listings</a>\n          </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n          <button class=\"btn btn-outline-primary mr-4\" (click)=\"goBack()\">Go Back</button>\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)= userLogout()>Logout</button>\n        </form>\n      </div>\n    </nav>\n    <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Category</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"#\">Angular</a>\n          <a class=\"dropdown-item\" href=\"#\">React</a>\n          <a class=\"dropdown-item\" href=\"#\">Vue.js</a>\n        </div>\n      </li> -->\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/popular-game-info/popular-game-info.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/popular-game-info/popular-game-info.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <span class=\"game_info\" *ngIf=\"game_info\">\n    <h2>{{game_info.name}}</h2>\n    <p>\n      <img src=\"{{game_info.thumbnail}}\">\n    </p>\n    <p>{{game_info.description}}</p>\n    <span class=\"players\">Players: </span>{{game_info.minPlayers}} - {{game_info.maxPlayers}}\n    <p>Type:</p>\n    <ul>\n      <li *ngFor=\"let game of game_info.mechanics\">\n          <span>{{game}}</span>\n      </li>\n    </ul>\n  </span>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-dashboard/user-dashboard.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-dashboard/user-dashboard.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-allboardgames></app-allboardgames>\n  <!-- <div class=\"container\">\n    <textarea rows=\"2\" cols=\"75\" class=\"search\" [(ngModel)]=\"searchText\" placeholder=\"Search...\"></textarea>\n    <br>\n    <h2>Welcome {{user_info?.first_name}}</h2> -->\n      <!-- <div [ngStyle]=\"{\n        'background-color': 'grey'}\"> -->\n      <!-- <div class=\"game\" *ngFor=\"let games of allGames | filter:'title':searchText\">\n        <div class=\"row\">\n          <div class=\"col\">\n              <h2>{{games.title}}</h2>\n              <p>{{games.description}}</p>\n              <p>Condition: {{games.condition}}</p>\n          </div> \n          <div class=\"col\">\n            <h2>{{games.price}}</h2>\n            <p>{{games.location}}</p>\n            <p *ngIf=\"(games._user) === (session)\">\n            <button>Delete</button></p>\n            <p *ngIf=\"games._user != session\">\n              <button>Placeholder</button>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/allboardgames/allboardgames.component.css":
/*!***********************************************************!*\
  !*** ./src/app/allboardgames/allboardgames.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n    font-size: 16pt;\n}\n.game {\n    border: 2px solid black;\n    overflow: scroll;\n    z-index:-1\n}\n.row\n{\n    margin: 0px;\n    padding: 0px;\n}\n.search\n{\n    margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsYm9hcmRnYW1lcy9hbGxib2FyZGdhbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCO0FBQ0o7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBOztJQUVJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FsbGJvYXJkZ2FtZXMvYWxsYm9hcmRnYW1lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0IHtcbiAgICBmb250LXNpemU6IDE2cHQ7XG59XG4uZ2FtZSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB6LWluZGV4Oi0xXG59XG4ucm93XG57XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uc2VhcmNoXG57XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/allboardgames/allboardgames.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/allboardgames/allboardgames.component.ts ***!
  \**********************************************************/
/*! exports provided: AllboardgamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllboardgamesComponent", function() { return AllboardgamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AllboardgamesComponent = /** @class */ (function () {
    function AllboardgamesComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    AllboardgamesComponent.prototype.ngOnInit = function () {
        this.getGames();
        this.checkSessionUserComponent();
    };
    AllboardgamesComponent.prototype.checkSessionUserComponent = function () {
        var _this = this;
        var session_data = this._httpService.checkSessionUser();
        session_data.subscribe(function (data) {
            if (data["session"] == false) {
                _this._router.navigateByUrl("/");
            }
            else {
                _this.user_info = data["user"];
                _this.session = data["session"];
            }
        });
    };
    AllboardgamesComponent.prototype.getGames = function () {
        var _this = this;
        var allGames = this._httpService.getAllGames().subscribe(function (data) {
            _this.games = data["games"];
        });
    };
    AllboardgamesComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AllboardgamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allboardgames',
            template: __webpack_require__(/*! raw-loader!./allboardgames.component.html */ "./node_modules/raw-loader/index.js!./src/app/allboardgames/allboardgames.component.html"),
            styles: [__webpack_require__(/*! ./allboardgames.component.css */ "./src/app/allboardgames/allboardgames.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AllboardgamesComponent);
    return AllboardgamesComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _create_boardgame_create_boardgame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-boardgame/create-boardgame.component */ "./src/app/create-boardgame/create-boardgame.component.ts");
/* harmony import */ var _edit_boardgames_edit_boardgames_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-boardgames/edit-boardgames.component */ "./src/app/edit-boardgames/edit-boardgames.component.ts");
/* harmony import */ var _popular_game_info_popular_game_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popular-game-info/popular-game-info.component */ "./src/app/popular-game-info/popular-game-info.component.ts");








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "createboardgame", component: _create_boardgame_create_boardgame_component__WEBPACK_IMPORTED_MODULE_5__["CreateBoardgameComponent"] },
    { path: "dashboard", component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["UserDashboardComponent"] },
    { path: "edit/:id", component: _edit_boardgames_edit_boardgames_component__WEBPACK_IMPORTED_MODULE_6__["EditBoardgamesComponent"] },
    { path: "popular/:id", component: _popular_game_info_popular_game_info_component__WEBPACK_IMPORTED_MODULE_7__["PopularGameInfoComponent"] },
    { path: "", pathMatch: 'full', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _create_boardgame_create_boardgame_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-boardgame/create-boardgame.component */ "./src/app/create-boardgame/create-boardgame.component.ts");
/* harmony import */ var _allboardgames_allboardgames_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./allboardgames/allboardgames.component */ "./src/app/allboardgames/allboardgames.component.ts");
/* harmony import */ var _edit_boardgames_edit_boardgames_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-boardgames/edit-boardgames.component */ "./src/app/edit-boardgames/edit-boardgames.component.ts");
/* harmony import */ var _popular_game_info_popular_game_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./popular-game-info/popular-game-info.component */ "./src/app/popular-game-info/popular-game-info.component.ts");
/* harmony import */ var _dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dynamic-modal/dynamic-modal.component */ "./src/app/dynamic-modal/dynamic-modal.component.ts");
/* harmony import */ var _boardgame_boardgame_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./boardgame/boardgame.component */ "./src/app/boardgame/boardgame.component.ts");
/* harmony import */ var _dynamic_modal_content_dynamic_modal_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dynamic-modal-content/dynamic-modal-content.component */ "./src/app/dynamic-modal-content/dynamic-modal-content.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["UserDashboardComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipe"],
                _create_boardgame_create_boardgame_component__WEBPACK_IMPORTED_MODULE_12__["CreateBoardgameComponent"],
                _allboardgames_allboardgames_component__WEBPACK_IMPORTED_MODULE_13__["AllboardgamesComponent"],
                _edit_boardgames_edit_boardgames_component__WEBPACK_IMPORTED_MODULE_14__["EditBoardgamesComponent"],
                _popular_game_info_popular_game_info_component__WEBPACK_IMPORTED_MODULE_15__["PopularGameInfoComponent"],
                _dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_16__["DynamicModalComponent"],
                _boardgame_boardgame_component__WEBPACK_IMPORTED_MODULE_17__["BoardgameComponent"],
                _dynamic_modal_content_dynamic_modal_content_component__WEBPACK_IMPORTED_MODULE_18__["DynamicModalContentComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/boardgame/boardgame.component.css":
/*!***************************************************!*\
  !*** ./src/app/boardgame/boardgame.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkZ2FtZS9ib2FyZGdhbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/boardgame/boardgame.component.ts":
/*!**************************************************!*\
  !*** ./src/app/boardgame/boardgame.component.ts ***!
  \**************************************************/
/*! exports provided: BoardgameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardgameComponent", function() { return BoardgameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var BoardgameComponent = /** @class */ (function () {
    // @ = signifies decorator; session = property
    function BoardgameComponent(_httpService) {
        this._httpService = _httpService;
        this.isDeleted = false;
        this.gameDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BoardgameComponent.prototype.ngOnInit = function () {
    };
    BoardgameComponent.prototype.openSellerDetails = function () {
        console.log(this.game, " this is game from 27");
    };
    BoardgameComponent.prototype.deleteGame = function (id) {
        var _this = this;
        var deleteGame = this._httpService.deleteGame(id).subscribe(function (data) {
            console.log("deleted!");
            _this.isDeleted = true;
            _this.gameDeleted.emit(_this.isDeleted);
        });
    };
    BoardgameComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoardgameComponent.prototype, "game", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoardgameComponent.prototype, "session", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoardgameComponent.prototype, "gameDeleted", void 0);
    BoardgameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boardgame',
            template: __webpack_require__(/*! raw-loader!./boardgame.component.html */ "./node_modules/raw-loader/index.js!./src/app/boardgame/boardgame.component.html"),
            styles: [__webpack_require__(/*! ./boardgame.component.css */ "./src/app/boardgame/boardgame.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], BoardgameComponent);
    return BoardgameComponent;
}());



/***/ }),

/***/ "./src/app/create-boardgame/create-boardgame.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/create-boardgame/create-boardgame.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n    color: red;\n}\n\n.right {\n    /* padding-left: 100px; */\n    font-size: 16pt;\n}\n\n.game {\n    border: 2px solid black;\n}\n\n.creategame \n{\n    margin-top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWJvYXJkZ2FtZS9jcmVhdGUtYm9hcmRnYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYm9hcmRnYW1lL2NyZWF0ZS1ib2FyZGdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnJpZ2h0IHtcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDEwMHB4OyAqL1xuICAgIGZvbnQtc2l6ZTogMTZwdDtcbn1cbi5nYW1lIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cbi5jcmVhdGVnYW1lIFxue1xuICAgIG1hcmdpbi10b3A6IDY0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/create-boardgame/create-boardgame.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-boardgame/create-boardgame.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateBoardgameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBoardgameComponent", function() { return CreateBoardgameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateBoardgameComponent = /** @class */ (function () {
    function CreateBoardgameComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    CreateBoardgameComponent.prototype.ngOnInit = function () {
        this.checkSessionUserComponent();
        this.BoardGameCreate = {
            title: "",
            description: "",
            price: 0,
            location: "",
            condition: ""
        };
    };
    CreateBoardgameComponent.prototype.checkSessionUserComponent = function () {
        var _this = this;
        var session_data = this._httpService.checkSessionUser();
        session_data.subscribe(function (data) {
            console.log(data, "this is data!");
            console.log(data["session"]);
            if (data["session"] == false) {
                console.log("got here!");
                _this._router.navigateByUrl("/");
            }
            else {
                console.log("got here to give user data!");
                _this.user_info = data["user"];
                console.log(_this.user_info);
            }
        });
    };
    CreateBoardgameComponent.prototype.createNewBoardgame = function (BoardGameCreate) {
        var _this = this;
        var newGame = this._httpService.createBoardGame(this.BoardGameCreate)
            .subscribe(function (data) {
            console.log(data, "this is bg data from form!");
            console.log(_this.BoardGameCreate);
        });
        this._router.navigateByUrl("/dashboard");
    };
    CreateBoardgameComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CreateBoardgameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-boardgame',
            template: __webpack_require__(/*! raw-loader!./create-boardgame.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-boardgame/create-boardgame.component.html"),
            styles: [__webpack_require__(/*! ./create-boardgame.component.css */ "./src/app/create-boardgame/create-boardgame.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateBoardgameComponent);
    return CreateBoardgameComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-modal-content/dynamic-modal-content.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dynamic-modal-content/dynamic-modal-content.component.ts ***!
  \**************************************************************************/
/*! exports provided: DynamicModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicModalContentComponent", function() { return DynamicModalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var DynamicModalContentComponent = /** @class */ (function () {
    function DynamicModalContentComponent(activeModal) {
        this.activeModal = activeModal;
    }
    DynamicModalContentComponent.prototype.ngOnInit = function () {
    };
    DynamicModalContentComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicModalContentComponent.prototype, "seller_details", void 0);
    DynamicModalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-modal-content',
            template: "\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Hi there!</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Hello, {{name}}!</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n  </div>\n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], DynamicModalContentComponent);
    return DynamicModalContentComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-modal/dynamic-modal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dynamic-modal/dynamic-modal.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtbW9kYWwvZHluYW1pYy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dynamic-modal/dynamic-modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dynamic-modal/dynamic-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: DynamicModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicModalComponent", function() { return DynamicModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var DynamicModalComponent = /** @class */ (function () {
    function DynamicModalComponent(modalService) {
        this.modalService = modalService;
    }
    DynamicModalComponent.prototype.ngOnInit = function () {
    };
    DynamicModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open('DynamicModalContentComponent');
    };
    DynamicModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    DynamicModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-modal',
            template: __webpack_require__(/*! raw-loader!./dynamic-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/dynamic-modal/dynamic-modal.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-modal.component.css */ "./src/app/dynamic-modal/dynamic-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], DynamicModalComponent);
    return DynamicModalComponent;
}());



/***/ }),

/***/ "./src/app/edit-boardgames/edit-boardgames.component.css":
/*!***************************************************************!*\
  !*** ./src/app/edit-boardgames/edit-boardgames.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error \n{\n    color: red;\n}\n.gameform \n{\n    border: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1ib2FyZGdhbWVzL2VkaXQtYm9hcmRnYW1lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7QUFDZDtBQUNBOztJQUVJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYm9hcmRnYW1lcy9lZGl0LWJvYXJkZ2FtZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciBcbntcbiAgICBjb2xvcjogcmVkO1xufVxuLmdhbWVmb3JtIFxue1xuICAgIGJvcmRlcjogMXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/edit-boardgames/edit-boardgames.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/edit-boardgames/edit-boardgames.component.ts ***!
  \**************************************************************/
/*! exports provided: EditBoardgamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBoardgamesComponent", function() { return EditBoardgamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var EditBoardgamesComponent = /** @class */ (function () {
    function EditBoardgamesComponent(_httpService, _route) {
        this._httpService = _httpService;
        this._route = _route;
    }
    EditBoardgamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._route.paramMap.subscribe((paramMap: Params) => {
        //   console.log(paramMap, "params in edit")
        //   this.game_id = paramMap['id']
        //   console.log(this.game_id, "game id!")
        // })
        this._route.params.subscribe(function (params) {
            _this.game_id = params['id'];
            console.log(_this.game_id);
        });
        this.getGame();
    };
    EditBoardgamesComponent.prototype.getGame = function () {
        var _this = this;
        var chosenGame = this._httpService.getGame(this.game_id).subscribe(function (data) {
            _this.game = data["game"];
            console.log(_this.game, "this is this.game");
        });
    };
    EditBoardgamesComponent.prototype.editBoardgame = function (game) {
        var _this = this;
        console.log(this.game, "this is bg in editBoardgame");
        var edited_game = this._httpService.editGame(this.game)
            .subscribe(function (edited_game) {
            console.log(edited_game);
            if (edited_game) {
                _this.saveSuccess = true;
                _this.getGame();
            }
            else {
                _this.saveSuccess = false;
            }
        });
    };
    EditBoardgamesComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    EditBoardgamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-boardgames',
            template: __webpack_require__(/*! raw-loader!./edit-boardgames.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-boardgames/edit-boardgames.component.html"),
            styles: [__webpack_require__(/*! ./edit-boardgames.component.css */ "./src/app/edit-boardgames/edit-boardgames.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditBoardgamesComponent);
    return EditBoardgamesComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });
//    }
// }
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n    margin-right: 0px;\n    margin-left: 0px;\n}\n\n.bgoftheday {\n    color: #343a40;\n}\n\n.error {\n    color: red;\n}\n\n.randomGame\n{\n    border: 2px solid black;\n    background: lightgrey;\n}\n\n.register\n{\n    border: 2px solid black;    \n}\n\n.login\n{\n    border: 2px solid black;\n\n}\n\n#allcontent {\n    margin-top: 20px;\n}\n\n.badge {\n    display: inline-block;\n    font-size: medium;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background: #343a40;    \n    position: relative;\n}\n\n.badge:hover {\n    color: #343a40;\n    background-color: #DDD;\n    left: .1em;\n    cursor: pointer; cursor: hand;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSx1QkFBdUI7O0FBRTNCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixlQUFlLEVBQUUsWUFBWTtFQUMvQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmJnb2Z0aGVkYXkge1xuICAgIGNvbG9yOiAjMzQzYTQwO1xufVxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuLnJhbmRvbUdhbWVcbntcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG59XG5cbi5yZWdpc3Rlclxue1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAgICBcbn1cblxuLmxvZ2luXG57XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cbn1cbiNhbGxjb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJhZGdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gICAgYmFja2dyb3VuZDogIzM0M2E0MDsgICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFkZ2U6aG92ZXIge1xuICAgIGNvbG9yOiAjMzQzYTQwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gICAgbGVmdDogLjFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IGN1cnNvcjogaGFuZDtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.UserReg =
            {
                email: "",
                first_name: "",
                last_name: "",
                password: "",
                password_confirm: "",
            };
        this.UserLog =
            {
                email: "",
                password: ""
            };
        this.retrievepopularGame();
    };
    HomeComponent.prototype.onSubmit = function (UserReg) {
        var _this = this;
        var newUser = this._httpService.createNewUser(this.UserReg);
        newUser.subscribe(function (data) {
            if (data["err"]) {
                _this.RegError = data['err'];
                _this._router.navigateByUrl("/");
            }
            else {
                _this._router.navigateByUrl("/dashboard");
            }
        });
    };
    HomeComponent.prototype.onLogin = function (UserLog) {
        var _this = this;
        var User = this._httpService.loginUser(this.UserLog);
        User.subscribe(function (data) {
            if (data["err"] || data["pw_error"] || data["lockout"]) {
                _this.LogError = data["err"] || data["pw_error"];
                if (data["lockout"] === true) {
                    _this.Lockout = data["lockout"];
                    console.log(_this.Lockout);
                    _this._router.navigateByUrl("/");
                }
            }
            else {
                _this._router.navigateByUrl("/dashboard");
            }
        });
    };
    HomeComponent.prototype.retrievepopularGame = function () {
        var _this = this;
        var game_list = this._httpService.retrievePopularGames();
        game_list.subscribe(function (games) {
            _this.games = games;
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    // URL to web api
    function HttpService(_http) {
        this._http = _http;
        this.popularBoardgameUrl = "https://bgg-json.azurewebsites.net/hot";
    }
    HttpService.prototype.createNewUser = function (UserReg) {
        return this._http.post("createnewuser", UserReg);
    };
    HttpService.prototype.loginUser = function (UserLog) {
        return this._http.post("loginuser", UserLog);
    };
    HttpService.prototype.checkSessionUser = function () {
        return this._http.get("check_session");
    };
    HttpService.prototype.userLogout = function () {
        return this._http.get("logout");
    };
    HttpService.prototype.createBoardGame = function (BoardGameCreate) {
        console.log("here in service", BoardGameCreate);
        return this._http.post("creategame", BoardGameCreate);
    };
    HttpService.prototype.getAllGames = function () {
        return this._http.get("findgames");
    };
    HttpService.prototype.deleteGame = function (id) {
        return this._http.get("/delete/" + id);
    };
    HttpService.prototype.randomGame = function () {
        return this._http.get("random");
    };
    HttpService.prototype.getGame = function (id) {
        return this._http.get("/get_game/" + id);
    };
    HttpService.prototype.editGame = function (game) {
        console.log("here in editted game!");
        console.log(game._id);
        return this._http.post("/edit_game/" + game._id, game);
    };
    HttpService.prototype.retrievePopularGames = function () {
        return this._http.get(this.popularBoardgameUrl);
    };
    HttpService.prototype.retrieveIndividualGame = function (id) {
        return this._http.get("https://bgg-json.azurewebsites.net/thing/" + id);
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgmarketplace \n{\n    color: white;\n    background: #343a40;\n}\n\nh1\n{\n    padding: 0px;\n    margin: 0px;\n}\n\n/* body {\n    min-height: 75rem;\n    padding-top: 8rem;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTs7O0tBR0siLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdtYXJrZXRwbGFjZSBcbntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogIzM0M2E0MDtcbn1cblxuaDFcbntcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi8qIGJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDc1cmVtO1xuICAgIHBhZGRpbmctdG9wOiA4cmVtO1xuICB9ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_httpService, _router, location) {
        this._httpService = _httpService;
        this._router = _router;
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.userLogout = function () {
        var observable = this._httpService.userLogout();
        observable.subscribe(function (data) { return console.log(data, "this is data!"); });
        this._router.navigateByUrl("/");
    };
    NavbarComponent.prototype.goBack = function () {
        this.location.back();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/popular-game-info/popular-game-info.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/popular-game-info/popular-game-info.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcHVsYXItZ2FtZS1pbmZvL3BvcHVsYXItZ2FtZS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/popular-game-info/popular-game-info.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/popular-game-info/popular-game-info.component.ts ***!
  \******************************************************************/
/*! exports provided: PopularGameInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularGameInfoComponent", function() { return PopularGameInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var PopularGameInfoComponent = /** @class */ (function () {
    function PopularGameInfoComponent(_httpService, _route) {
        this._httpService = _httpService;
        this._route = _route;
    }
    PopularGameInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.game_id = params['id'];
            console.log(_this.game_id);
        });
        this.retrieveIndvidualGame();
    };
    PopularGameInfoComponent.prototype.retrieveIndvidualGame = function () {
        var _this = this;
        var game_info = this._httpService.retrieveIndividualGame(this.game_id);
        game_info.subscribe(function (data) {
            _this.game_info = data;
        });
    };
    PopularGameInfoComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    PopularGameInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popular-game-info',
            template: __webpack_require__(/*! raw-loader!./popular-game-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/popular-game-info/popular-game-info.component.html"),
            styles: [__webpack_require__(/*! ./popular-game-info.component.css */ "./src/app/popular-game-info/popular-game-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PopularGameInfoComponent);
    return PopularGameInfoComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n    font-size: 16pt;\n}\n.game {\n    border: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMTZwdDtcbn1cbi5nYW1lIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        this.checkSessionUserComponent();
        this.getGames();
    };
    UserDashboardComponent.prototype.checkSessionUserComponent = function () {
        var _this = this;
        var session_data = this._httpService.checkSessionUser();
        session_data.subscribe(function (data) {
            console.log(data, "this is data!");
            console.log(data["session"]);
            if (data["session"] == false) {
                console.log("got here!");
                _this._router.navigateByUrl("/");
            }
            else {
                console.log("got here to give user data!");
                _this.user_info = data["user"];
                _this.session = data["session"];
                console.log(_this.user_info);
            }
        });
    };
    UserDashboardComponent.prototype.getGames = function () {
        var _this = this;
        var allGames = this._httpService.getAllGames().subscribe(function (data) {
            console.log(data, "all the data!");
            _this.allGames = data["games"];
            console.log(_this.allGames);
        });
    };
    UserDashboardComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-dashboard",
            template: __webpack_require__(/*! raw-loader!./user-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/user-dashboard/user-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jennifereler/Documents/my_apps/boardgame_marketplace/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map