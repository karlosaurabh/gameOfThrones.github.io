(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{background:#3F51B5;}\r\nbody{background: url(\"/assets/images/bg.jpg\") no-repeat top center / fixed;}\r\nheader h1{text-shadow:10px 10px 10px rgba(0,0,0,0.2);}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <header class=\"text-center col-sm-12 p-5\">\n      <h1 class=\"text-white\">{{title | uppercase}}</h1>\n    </header>\n    <div class=\"col-sm-12 pt-1\">\n      <nav class=\"navbar navbar-expand-lg navbar-light bg-primary\">\n        <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/images/logo.jpg\" alt=\"game logo\" class=\"img-fluid\"/></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" [routerLink]=\"['allItems']\">All Items\n                <span class=\"sr-only\">(current)</span>\n              </a>\n            </li>\n            <!-- <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n            </li> -->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['notFound']\">Not Found</a>\n            </li>\n            \n          </ul>\n          <form class=\"form-inline my-2 my-lg-0\">\n            <select class=\"form-control mr-sm-2\">\n                <option>Select Items</option>\n              <option>Books</option>\n              <option>Characters</option>\n              <option>Houses</option>\n            </select>\n          </form>\n        </div>\n      </nav>\n    </div>\n  </div>\n  <!--row-->\n</div>\n<!--container-->\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HBO Series Game Of Thrones';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_https_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books-https.service */ "./src/app/books-https.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _view_books_view_books_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-books/view-books.component */ "./src/app/view-books/view-books.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _view_single_item_view_single_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-single-item/view-single-item.component */ "./src/app/view-single-item/view-single-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// ROUTER

// HTTP SERVICE IMPORTING

// EXTRA IMPORTING 


// ALL CUSTOM COMPONENTS 




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _view_books_view_books_component__WEBPACK_IMPORTED_MODULE_7__["ViewBooksComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _view_single_item_view_single_item_component__WEBPACK_IMPORTED_MODULE_9__["ViewSingleItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                // RouterModule forRoot method to declare the possible routes in application
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'allItems', pathMatch: 'full' },
                    { path: 'allItems', component: _view_books_view_books_component__WEBPACK_IMPORTED_MODULE_7__["ViewBooksComponent"] },
                    { path: 'singleBookDetails', component: _view_books_view_books_component__WEBPACK_IMPORTED_MODULE_7__["ViewBooksComponent"] },
                    { path: 'notFound', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] },
                    { path: 'books/:bookId', component: _view_single_item_view_single_item_component__WEBPACK_IMPORTED_MODULE_9__["ViewSingleItemComponent"] },
                    { path: 'houses/:houseId', component: _view_single_item_view_single_item_component__WEBPACK_IMPORTED_MODULE_9__["ViewSingleItemComponent"] },
                    { path: 'characters/:characterId', component: _view_single_item_view_single_item_component__WEBPACK_IMPORTED_MODULE_9__["ViewSingleItemComponent"] },
                ])
            ],
            providers: [_books_https_service__WEBPACK_IMPORTED_MODULE_3__["BooksHttpsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books-https.service.ts":
/*!****************************************!*\
  !*** ./src/app/books-https.service.ts ***!
  \****************************************/
/*! exports provided: BooksHttpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksHttpsService", function() { return BooksHttpsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_Http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/Http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksHttpsService = /** @class */ (function () {
    function BooksHttpsService(_https) {
        this._https = _https;
        this.baseUrl = "https://www.anapioficeandfire.com/api/";
        console.log("Service of booksHttpsService is called");
    }
    BooksHttpsService.prototype.getAllBookDetails = function () {
        var myResponse = this._https.get(this.baseUrl + 'books');
        return myResponse;
    };
    //getAllCharacterDetails end
    BooksHttpsService.prototype.getAllCharacterDetails = function () {
        var myResponse = this._https.get(this.baseUrl + 'characters');
        return myResponse;
    };
    //getAllCharacterDetails end
    //getAllHouse Details end
    BooksHttpsService.prototype.getAllHouseDetails = function () {
        var myResponse = this._https.get(this.baseUrl + 'houses');
        return myResponse;
    }; //getAllBookDetails end
    BooksHttpsService.prototype.getSingleBookInfo = function (bookId) {
        var myResponse1 = this._https.get(this.baseUrl + '/books' + '/' + bookId);
        return myResponse1;
    }; //end get single Book info
    BooksHttpsService.prototype.getSingleCharacterInfo = function (characterId) {
        var myResponse2 = this._https.get(this.baseUrl + '/characters' + '/' + characterId);
        return myResponse2;
    }; //end get single character info
    BooksHttpsService.prototype.getSingleHouseInfo = function (houseId) {
        var myResponse3 = this._https.get(this.baseUrl + '/houses' + '/' + houseId);
        return myResponse3;
    }; //end get single house info
    BooksHttpsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_Http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BooksHttpsService);
    return BooksHttpsService;
}()); // booksHttpsService class end here



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-4\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"jumbotron jumbotron-fluid \">\n        <div class=\"container\">\n          <h1 class=\"display-4\">Page Not Found</h1>\n          <p class=\"lead\">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/view-books/view-books.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-books/view-books.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-books/view-books.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-books/view-books.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-4\">\n  <div class=\"row\" >\n  <!-- <div class=\"booksCont\"> -->\n      <div class=\"col-sm-6 pt-2\" *ngFor=\"let item of allItemDetails\">\n        <!--for books-->\n        <div class=\"card text-center border-danger\" *ngIf=\"item.isbn\" >\n          <div class=\"card-body alert-danger text-dark \">\n            <h5 class=\"card-title\"><h3>{{item.name }}</h3></h5>\n            <p class=\"card-text\"><b>Author Name:</b> {{item.authors}}</p>\n          </div>\n          <div class=\"card-body text-center\">\n            <a [routerLink]=\"['/books',item.url.split('books/').pop()]\" class=\"card-link btn btn-danger\">Read More...</a>\n          </div>\n        </div>\n        <!--for books-->\n         <!--for character-->\n         <div class=\"card text-center characterCont border-primary\" *ngIf=\"item.gender\">\n          <div class=\"card-body alert-primary text-dark border-primary\">\n            <h5 class=\"card-title\"><h3>{{item.aliases}}</h3></h5>\n            <p class=\"card-text\"><b>Character Name:</b> {{item.name }}</p>\n          </div>\n          <div class=\"card-body text-center\">\n            <a [routerLink]=\"['/characters',item.url.split('characters/').pop()]\" class=\"card-link btn btn-primary\">Read More...</a>\n          </div>\n        </div>\n        <!--for character-->\n\n         <!--for Houses-->\n         <div class=\"card text-center housesCont border-success\" *ngIf=\"item.region\">\n          <div class=\"card-body alert-success text-dark \">\n            <h5 class=\"card-title\"><h3><b>Title:</b> {{item.titles}}</h3></h5>\n            <p class=\"card-text\"><b>House Name:</b> {{item.name }}</p>\n          </div>\n          <div class=\"card-body text-center\">\n            <a [routerLink]=\"['/houses',item.url.split('houses/').pop()]\" class=\"card-link btn btn-success\">Read More...</a>\n          </div>\n        </div>\n        <!--for houses-->\n\n      </div>\n      <!--col-sm-6-->\n      \n    <!-- </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/view-books/view-books.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-books/view-books.component.ts ***!
  \****************************************************/
/*! exports provided: ViewBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBooksComponent", function() { return ViewBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _books_https_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../books-https.service */ "./src/app/books-https.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// HTTP SERVICE IMPORTING

var ViewBooksComponent = /** @class */ (function () {
    function ViewBooksComponent(booksHttpsService) {
        this.booksHttpsService = booksHttpsService;
        this.allBooks = [];
        this.allcharacter = [];
        this.allHouses = [];
        this.allItemDetails = [];
        console.log("Constructor view books called");
    }
    ViewBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("OnInit view books called");
        //this is for book
        this.allBooks = this.booksHttpsService.getAllBookDetails().subscribe(function (data) {
            console.log(data);
            _this.allBooks = data;
            _this.allBooks.sort(function (a, b) { return a.name.localeCompare(b.name); }); //to sort books alphabetically
            _this.allItemDetails = _this.allItemDetails.concat(_this.allBooks);
            //console.log(this.allItemDetails);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log("the book" + this.allBooks);
        //this is for Character
        this.allBooks = this.booksHttpsService.getAllCharacterDetails().subscribe(function (data) {
            console.log(data);
            _this.allcharacter = data;
            _this.allcharacter.sort(function (a, b) { return a.name.localeCompare(b.name); }); //to sort books alphabetically
            _this.allItemDetails = _this.allItemDetails.concat(_this.allcharacter);
            for (var _i = 0, _a = _this.allItemDetails; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.name == "") {
                    item.name = "N/A";
                }
            }
            //console.log(this.allItemDetails);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        //console.log("the character"+this.allcharacter);
        //this is for Houses
        this.allBooks = this.booksHttpsService.getAllHouseDetails().subscribe(function (data) {
            console.log(data);
            _this.allHouses = data;
            _this.allHouses.sort(function (a, b) { return a.name.localeCompare(b.name); }); //to sort books alphabetically
            _this.allItemDetails = _this.allItemDetails.concat(_this.allHouses);
            for (var _i = 0, _a = _this.allItemDetails; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.titles == '') {
                    item.titles = 'N/A';
                }
            }
            console.log(_this.allItemDetails);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log("the Houses" + this.allHouses);
    }; //onInit fuction end
    ViewBooksComponent.prototype.ngOnDestroy = function () {
        console.log("Destroy view books called");
    };
    ViewBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-books',
            template: __webpack_require__(/*! ./view-books.component.html */ "./src/app/view-books/view-books.component.html"),
            styles: [__webpack_require__(/*! ./view-books.component.css */ "./src/app/view-books/view-books.component.css")]
        }),
        __metadata("design:paramtypes", [_books_https_service__WEBPACK_IMPORTED_MODULE_1__["BooksHttpsService"]])
    ], ViewBooksComponent);
    return ViewBooksComponent;
}());



/***/ }),

/***/ "./src/app/view-single-item/view-single-item.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/view-single-item/view-single-item.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgColor{color:white;word-wrap: break-word;background: linear-gradient(to right, #007bff, #b34949);box-shadow: 0px 3px 20px 2px white;}"

/***/ }),

/***/ "./src/app/view-single-item/view-single-item.component.html":
/*!******************************************************************!*\
  !*** ./src/app/view-single-item/view-single-item.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Container for Book starts-->\n      <div class=\"container bgColor mt-1\" *ngIf=\"currentBook\">\n        <div class=\"row\">\n            <div class=\"col-md-12\" style=\"text-align:center;padding-top:2%\">\n                <h3> {{currentBook.name}}</h3>\n            </div>\n        </div> <!--row 1 ends-->\n        <br><br>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n              <img src=\"assets/images/book.jpg\" style=\"height:100%;width:80%;border-radius:4px;box-shadow: 0px 3px 20px 2px white\">\n            </div>\n          <div class=\"col-md-4\" style=\"padding-left:3%;\">\n            <div style=\"padding-top:7%;\"><p><b>ISBN:</b> {{currentBook.isbn}}</p></div>\n            <div><p><b>No. Of Pages:</b> {{currentBook.numberOfPages}}</p></div>\n            <div><p><b>Publisher:</b> {{currentBook.publisher}}</p></div>\n          </div>\n          <div class=\"col-md-5\">\n              <div><p><b>Country:</b> {{currentBook.country}}</p></div>\n              <div><p><b>Media Type:</b> {{currentBook.mediaType}}</p></div>\n              <div><p><b>Released:</b> {{currentBook.released | date}}</p></div>\n              <div><p><b>Authors:</b> {{currentBook.authors}}</p></div>\n          </div>\n        </div> <!--row 2 ends-->\n\n        <hr style=\"background-color: white\">\n        <div class=\"row\" style=\"text-align:center;\">\n          <div class=\"col-md-12\"><p><b>Characters:</b> {{currentBook.characters}}</p></div>\n        </div> <!--row 3 ends-->\n        <div class=\"row\" style=\"text-align:center;\">\n          <div class=\"col-md-12\"><p><b>Pov Characters:</b> {{currentBook.povCharacters}}</p></div>\n        </div> <!--row 4 ends-->\n      </div>    \n<!--Container for Book ends-->\n\n\n<!--Container for Character starts-->\n        <div class=\"container bgColor mt-1\" *ngIf=\"currentCharacter\">\n          <div class=\"row\">\n            <div class=\"col-md-12 text-center pt:2%;\">\n              <h3>Character Name: {{currentCharacter.name}}</h3>\n            </div>\n          </div><!--row 1 ends-->\n          <br><br>\n          <div class=\"row\">\n              <div class=\"col-md-3\">\n                <img src=\"assets/images/char.jpg\" style=\"height:100%;width:80%;border-radius:4px;box-shadow: 0px 3px 20px 2px white\">\n              </div>\n            <div class=\"col-md-4\" style=\"padding-left:3%;\">\n              <div style=\"padding-top:7%;\"><p><b>Gender:</b> {{currentCharacter.gender}}</p></div>\n              <div><p><b>Birth:</b> {{currentCharacter.born}}</p></div>\n              <div><p><b>Death:</b> {{currentCharacter.died}}</p></div>\n            </div>\n            <div class=\"col-md-5\">\n                <div><p><b>Culture:</b> {{currentCharacter.culture}}</p></div>\n                <div><p><b>Father:</b> {{currentCharacter.father}}</p></div>\n                <div><p><b>Mother:</b> {{currentCharacter.mother}}</p></div>\n                <div><p><b>Spouse:</b> {{currentCharacter.spouse}}</p></div>\n                <div><p><b>Played By:</b> {{currentCharacter.playedBy}}</p></div>\n            </div>\n          </div> <!--row 2 ends-->\n          <hr style=\"background-color: white\">\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Titles:</b> {{currentCharacter.titles}}</p></div>\n          </div> <!--row 3 ends-->\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Aliases:</b> {{currentCharacter.aliases}}</p></div>\n          </div> <!--row 4 ends-->\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Allegiances:</b> {{currentCharacter.allegiances}}</p></div>\n          </div> <!--row 5 ends-->\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>TV Series:</b> {{currentCharacter.tvSeries}}</p></div>\n          </div> <!--row 6 ends-->\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Books:</b> {{currentCharacter.books}}</p></div>\n          </div> <!--row 7 ends-->\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Pov Books:</b> {{currentCharacter.povBooks}}</p></div>\n          </div> <!--row 8 ends-->\n        </div>\n<!--Container for Character ends-->\n\n<!--Container for House starts-->\n      <div class=\"container bgColor mt-1\" *ngIf=\"currentHouse\">\n          <div class=\"row\">\n            <div class=\"col-md-12\" style=\"text-align:center;padding-top:2%\">\n              <h3>{{currentHouse.name}}</h3>\n            </div>\n          </div><!--row 1 ends-->\n          <br><br>\n          <div class=\"row\">\n              <div class=\"col-md-3\">\n                <img src=\"assets/images/houses.jpg\" style=\"height:100%;width:80%;border-radius:4px;box-shadow: 0px 3px 20px 2px white\">\n              </div>\n            <div class=\"col-md-4\" style=\"padding-left:3%;\">\n              <div style=\"padding-top:7%;\"><p><b>Region:</b> {{currentHouse.region}}</p></div>\n              <div><p><b>Current Lord:</b> {{currentHouse.currentLord}}</p></div>\n              <div><p><b>Heir:</b> {{currentHouse.heir}}</p></div>\n            </div>\n            <div class=\"col-md-5\">\n                <div><p><b>Founded:</b> {{currentHouse.founded}}</p></div>\n                <div><p><b>Founder:</b> {{currentHouse.founder}}</p></div>\n                <div><p><b>Died Out:</b> {{currentHouse.diedOut}}</p></div>\n                <div><p><b>Words:</b> {{currentHouse.words}}</p></div>\n                <div><p><b>Over Lord:</b> {{currentHouse.overlord}}</p></div>\n            </div>\n          </div> <!--row 2 ends-->\n          <hr style=\"background-color: white\">\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Titles:</b> {{currentHouse.titles}}</p></div>\n          </div> <!--row 3 ends-->\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Seats:</b> {{currentHouse.seats}}</p></div>\n          </div> <!--row 4 ends-->\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Ancestral Weapons:</b> {{currentHouse.ancestralWeapons}}</p></div>\n          </div> <!--row 5 ends-->\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Cadet Branches:</b> {{currentHouse.cadetBranches}}</p></div>\n          </div> <!--row 6 ends-->\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Sworn Members:</b> {{currentHouse.swornMembers}}</p></div>\n          </div> <!--row 7 ends-->\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Coat Of Arms:</b> {{currentHouse.coatOfArms}}</p></div>\n          </div> <!--row 8 ends-->\n        </div>\n<!--Container for House ends-->\n\n"

/***/ }),

/***/ "./src/app/view-single-item/view-single-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/view-single-item/view-single-item.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewSingleItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSingleItemComponent", function() { return ViewSingleItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_https_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../books-https.service */ "./src/app/books-https.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//activate route is import

// HTTP SERVICE IMPORTING

var ViewSingleItemComponent = /** @class */ (function () {
    function ViewSingleItemComponent(_route, router, booksHttpsService) {
        this._route = _route;
        this.router = router;
        this.booksHttpsService = booksHttpsService;
        console.log("constructor view single item called");
    }
    ViewSingleItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("OnInit view single item called");
        //for books
        var bookId = this._route.snapshot.paramMap.get('bookId');
        console.log(bookId);
        this.booksHttpsService.getSingleBookInfo(bookId).subscribe(function (data) {
            console.log("Books data");
            console.log(data);
            _this.currentBook = data;
            for (var item in _this.currentBook) {
                if (_this.currentBook[item] == "") {
                    _this.currentBook[item] = "N/A";
                }
            }
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        // for house
        var houseId = this._route.snapshot.paramMap.get('houseId');
        console.log(houseId);
        this.booksHttpsService.getSingleHouseInfo(houseId).subscribe(function (data) {
            console.log("currentHouse data");
            console.log(data);
            _this.currentHouse = data;
            for (var item in _this.currentBook) {
                if (_this.currentHouse[item] == "") {
                    _this.currentHouse[item] = "N/A";
                }
            }
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        // for charater
        var characterId = this._route.snapshot.paramMap.get('characterId');
        console.log(characterId);
        this.booksHttpsService.getSingleCharacterInfo(characterId).subscribe(function (data) {
            console.log("currentCharacter data");
            console.log(data);
            _this.currentCharacter = data;
            for (var item in _this.currentBook) {
                if (_this.currentCharacter[item] == "") {
                    _this.currentCharacter[item] = "N/A";
                }
            }
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    ViewSingleItemComponent.prototype.ngOnDestroy = function () {
        console.log("Destory view single item called");
    };
    ViewSingleItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-single-item',
            template: __webpack_require__(/*! ./view-single-item.component.html */ "./src/app/view-single-item/view-single-item.component.html"),
            styles: [__webpack_require__(/*! ./view-single-item.component.css */ "./src/app/view-single-item/view-single-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _books_https_service__WEBPACK_IMPORTED_MODULE_2__["BooksHttpsService"]])
    ], ViewSingleItemComponent);
    return ViewSingleItemComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! E:\angularFinalProject\assignment\gameOfThrones\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map