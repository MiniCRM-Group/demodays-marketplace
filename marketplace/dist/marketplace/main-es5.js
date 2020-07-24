(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/user-actions/user-actions.component */
      "./src/app/components/user-actions/user-actions.component.ts");
      /* harmony import */


      var _components_sell_item_sell_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/sell-item/sell-item.component */
      "./src/app/components/sell-item/sell-item.component.ts");
      /* harmony import */


      var _components_buy_item_buy_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/buy-item/buy-item.component */
      "./src/app/components/buy-item/buy-item.component.ts");
      /* harmony import */


      var _components_sell_item_upload_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/sell-item/upload/upload.component */
      "./src/app/components/sell-item/upload/upload.component.ts");
      /* harmony import */


      var _components_sell_item_details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/sell-item/details/details.component */
      "./src/app/components/sell-item/details/details.component.ts");
      /* harmony import */


      var _components_sell_item_submit_submit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/sell-item/submit/submit.component */
      "./src/app/components/sell-item/submit/submit.component.ts");

      var routes = [{
        path: '',
        component: _components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_2__["UserActionsComponent"]
      }, {
        path: 'sell',
        component: _components_sell_item_sell_item_component__WEBPACK_IMPORTED_MODULE_3__["SellItemComponent"],
        children: [{
          path: 'upload',
          component: _components_sell_item_upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"]
        }, {
          path: 'details',
          component: _components_sell_item_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"]
        }, {
          path: 'submit',
          component: _components_sell_item_submit_submit_component__WEBPACK_IMPORTED_MODULE_7__["SubmitComponent"]
        }]
      }, {
        path: 'buy',
        component: _components_buy_item_buy_item_component__WEBPACK_IMPORTED_MODULE_4__["BuyItemComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'marketplace';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/landing/landing.component */
      "./src/app/components/landing/landing.component.ts");
      /* harmony import */


      var _components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/user-actions/user-actions.component */
      "./src/app/components/user-actions/user-actions.component.ts");
      /* harmony import */


      var _components_sell_item_sell_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/sell-item/sell-item.component */
      "./src/app/components/sell-item/sell-item.component.ts");
      /* harmony import */


      var _components_buy_item_buy_item_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/buy-item/buy-item.component */
      "./src/app/components/buy-item/buy-item.component.ts");
      /* harmony import */


      var _components_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/item-card/item-card.component */
      "./src/app/components/item-card/item-card.component.ts");
      /* harmony import */


      var _components_sell_item_upload_upload_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/sell-item/upload/upload.component */
      "./src/app/components/sell-item/upload/upload.component.ts");
      /* harmony import */


      var _components_sell_item_details_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/sell-item/details/details.component */
      "./src/app/components/sell-item/details/details.component.ts");
      /* harmony import */


      var _components_sell_item_submit_submit_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/sell-item/submit/submit.component */
      "./src/app/components/sell-item/submit/submit.component.ts");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js"); // Material imports
      // Flex + Grid Layout


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], // Material
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_26__["LandingComponent"], _components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_27__["UserActionsComponent"], _components_sell_item_sell_item_component__WEBPACK_IMPORTED_MODULE_28__["SellItemComponent"], _components_buy_item_buy_item_component__WEBPACK_IMPORTED_MODULE_29__["BuyItemComponent"], _components_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_30__["ItemCardComponent"], _components_sell_item_upload_upload_component__WEBPACK_IMPORTED_MODULE_31__["UploadComponent"], _components_sell_item_details_details_component__WEBPACK_IMPORTED_MODULE_32__["DetailsComponent"], _components_sell_item_submit_submit_component__WEBPACK_IMPORTED_MODULE_33__["SubmitComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], // Material
          _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_26__["LandingComponent"], _components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_27__["UserActionsComponent"], _components_sell_item_sell_item_component__WEBPACK_IMPORTED_MODULE_28__["SellItemComponent"], _components_buy_item_buy_item_component__WEBPACK_IMPORTED_MODULE_29__["BuyItemComponent"], _components_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_30__["ItemCardComponent"], _components_sell_item_upload_upload_component__WEBPACK_IMPORTED_MODULE_31__["UploadComponent"], _components_sell_item_details_details_component__WEBPACK_IMPORTED_MODULE_32__["DetailsComponent"], _components_sell_item_submit_submit_component__WEBPACK_IMPORTED_MODULE_33__["SubmitComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], // Material
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/buy-item/buy-item.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/buy-item/buy-item.component.ts ***!
      \***********************************************************/

    /*! exports provided: BuyItemComponent */

    /***/
    function srcAppComponentsBuyItemBuyItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyItemComponent", function () {
        return BuyItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var BuyItemComponent = /*#__PURE__*/function () {
        function BuyItemComponent() {
          _classCallCheck(this, BuyItemComponent);
        }

        _createClass(BuyItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BuyItemComponent;
      }();

      BuyItemComponent.ɵfac = function BuyItemComponent_Factory(t) {
        return new (t || BuyItemComponent)();
      };

      BuyItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BuyItemComponent,
        selectors: [["app-buy-item"]],
        decls: 5,
        vars: 0,
        consts: [["mat-fab", "", "color", "primary", 1, "sticky"]],
        template: function BuyItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Item list will go here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add_business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
        styles: [".sticky[_ngcontent-%COMP%]{\n    position: fixed;\n      bottom: 40px;\n      right: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXktaXRlbS9idXktaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtNQUNiLFlBQVk7TUFDWixXQUFXO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1eS1pdGVtL2J1eS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICB9XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-buy-item',
            templateUrl: './buy-item.component.html',
            styleUrls: ['./buy-item.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/item-card/item-card.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/item-card/item-card.component.ts ***!
      \*************************************************************/

    /*! exports provided: ItemCardComponent */

    /***/
    function srcAppComponentsItemCardItemCardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemCardComponent", function () {
        return ItemCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var ItemCardComponent = /*#__PURE__*/function () {
        function ItemCardComponent() {
          _classCallCheck(this, ItemCardComponent);
        }

        _createClass(ItemCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ItemCardComponent;
      }();

      ItemCardComponent.ɵfac = function ItemCardComponent_Factory(t) {
        return new (t || ItemCardComponent)();
      };

      ItemCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ItemCardComponent,
        selectors: [["app-item-card"]],
        decls: 16,
        vars: 0,
        consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]],
        template: function ItemCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shiba Inu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dog Breed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LIKE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SHARE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1jYXJkL2l0ZW0tY2FyZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-item-card',
            templateUrl: './item-card.component.html',
            styleUrls: ['./item-card.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/landing/landing.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/landing/landing.component.ts ***!
      \*********************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function srcAppComponentsLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent() {
          _classCallCheck(this, LandingComponent);
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingComponent;
      }();

      LandingComponent.ɵfac = function LandingComponent_Factory(t) {
        return new (t || LandingComponent)();
      };

      LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingComponent,
        selectors: [["app-landing"]],
        decls: 2,
        vars: 0,
        template: function LandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "landing works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: ['./landing.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/sell-item/details/details.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/sell-item/details/details.component.ts ***!
      \*******************************************************************/

    /*! exports provided: DetailsComponent */

    /***/
    function srcAppComponentsSellItemDetailsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
        return DetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_upload_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/upload-item.service */
      "./src/app/services/upload-item.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var DetailsComponent = /*#__PURE__*/function () {
        function DetailsComponent(uploadItemService) {
          _classCallCheck(this, DetailsComponent);

          this.uploadItemService = uploadItemService;
          this["switch"] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.item = {
            name: '',
            seller: '',
            description: '',
            price: '$'
          };
        }

        _createClass(DetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.item = this.uploadItemService.currentItem;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.uploadItemService.currentItem = this.item;
          }
        }, {
          key: "onNext",
          value: function onNext() {
            this["switch"].emit('next');
          }
        }, {
          key: "onPrev",
          value: function onPrev() {
            this["switch"].emit('prev');
          }
        }]);

        return DetailsComponent;
      }();

      DetailsComponent.ɵfac = function DetailsComponent_Factory(t) {
        return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_item_service__WEBPACK_IMPORTED_MODULE_1__["UploadItemService"]));
      };

      DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DetailsComponent,
        selectors: [["app-details"]],
        outputs: {
          "switch": "switch"
        },
        decls: 26,
        vars: 4,
        consts: [["id", "content"], ["detailsForm", "ngForm"], ["fxLayout", "column", "fxLayoutAlign", "start center", "fxLayoutGap", "1%"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["id", "picture"], ["fxLayout", "column", "fxLayoutAlign", "space-around center"], ["appearance", "standard"], ["matInput", "", "required", "", "placeholder", "Name", "name", "name", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "placeholder", "$", "name", "price", 3, "ngModel", "ngModelChange"], ["id", "detailsDiv", "fxLayout", "column", "fxLayoutAlign", "start stretch"], ["matInput", "", "rows", "20", "name", "description", 3, "ngModel", "ngModelChange"], ["id", "footer", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "mat-elevation-z24"], ["mat-flat-button", "", 3, "click"], ["mat-flat-button", "", "type", "submit", "color", "primary", 3, "disabled", "click"]],
        template: function DetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some picture here.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Item Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetailsComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.item.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sale Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetailsComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.item.price = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetailsComponent_Template_textarea_ngModelChange_20_listener($event) {
              return ctx.item.description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_22_listener() {
              return ctx.onPrev();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_24_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.price);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: ["#content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n#picture[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    width: 25%;\n    background-color: #C4C4C4;\n}\n\n#detailsDiv[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 5%;\n    height: 100%;\n}\n\n#footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsLWl0ZW0vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxsLWl0ZW0vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jcGljdHVyZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICB3aWR0aDogMjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEM0QzQ7XG59XG5cbiNkZXRhaWxzRGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNmb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMyU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_upload_item_service__WEBPACK_IMPORTED_MODULE_1__["UploadItemService"]
          }];
        }, {
          "switch": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/sell-item/sell-item.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/sell-item/sell-item.component.ts ***!
      \*************************************************************/

    /*! exports provided: SellItemComponent */

    /***/
    function srcAppComponentsSellItemSellItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellItemComponent", function () {
        return SellItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./upload/upload.component */
      "./src/app/components/sell-item/upload/upload.component.ts");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details/details.component */
      "./src/app/components/sell-item/details/details.component.ts");
      /* harmony import */


      var _submit_submit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./submit/submit.component */
      "./src/app/components/sell-item/submit/submit.component.ts");

      function SellItemComponent_app_upload_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-upload", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("switch", function SellItemComponent_app_upload_1_Template_app_upload_switch_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.handleOnSwitch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellItemComponent_app_details_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-details", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("switch", function SellItemComponent_app_details_2_Template_app_details_switch_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.handleOnSwitch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellItemComponent_app_submit_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-submit", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("switch", function SellItemComponent_app_submit_3_Template_app_submit_switch_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.handleOnSwitch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SellItemComponent = /*#__PURE__*/function () {
        function SellItemComponent() {
          _classCallCheck(this, SellItemComponent);

          this.pages = ['upload', 'details', 'submit'];
          this.selectedIndex = 0;
        }

        _createClass(SellItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleOnSwitch",
          value: function handleOnSwitch(value) {
            console.log(value);

            if (value === 'prev' && this.selectedIndex > 0) {
              this.selectedIndex--;
            } else if (value === 'next') {
              this.selectedIndex = (this.selectedIndex + 1) % this.pages.length;
            }
          }
        }]);

        return SellItemComponent;
      }();

      SellItemComponent.ɵfac = function SellItemComponent_Factory(t) {
        return new (t || SellItemComponent)();
      };

      SellItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellItemComponent,
        selectors: [["app-sell-item"]],
        decls: 4,
        vars: 4,
        consts: [["id", "sell-item-container", 3, "ngSwitch"], [3, "switch", 4, "ngSwitchCase"], [3, "switch"]],
        template: function SellItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SellItemComponent_app_upload_1_Template, 1, 0, "app-upload", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SellItemComponent_app_details_2_Template, 1, 0, "app-details", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SellItemComponent_app_submit_3_Template, 1, 0, "app-submit", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.pages[ctx.selectedIndex]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "submit");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"], _submit_submit_component__WEBPACK_IMPORTED_MODULE_4__["SubmitComponent"]],
        styles: ["#footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n}\n\n#sell-item-container[_ngcontent-%COMP%] {\n    height: 80vh;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsLWl0ZW0vc2VsbC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGwtaXRlbS9zZWxsLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNzZWxsLWl0ZW0tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sell-item',
            templateUrl: './sell-item.component.html',
            styleUrls: ['./sell-item.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/sell-item/submit/submit.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/sell-item/submit/submit.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SubmitComponent */

    /***/
    function srcAppComponentsSellItemSubmitSubmitComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubmitComponent", function () {
        return SubmitComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_upload_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/upload-item.service */
      "./src/app/services/upload-item.service.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var SubmitComponent = /*#__PURE__*/function () {
        function SubmitComponent(uploadItemService) {
          _classCallCheck(this, SubmitComponent);

          this.uploadItemService = uploadItemService;
          this["switch"] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SubmitComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.uploadItemService.uploadItemToServer();
          }
        }, {
          key: "onSellAnotherItem",
          value: function onSellAnotherItem() {
            this["switch"].emit('next');
          }
        }]);

        return SubmitComponent;
      }();

      SubmitComponent.ɵfac = function SubmitComponent_Factory(t) {
        return new (t || SubmitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_item_service__WEBPACK_IMPORTED_MODULE_1__["UploadItemService"]));
      };

      SubmitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SubmitComponent,
        selectors: [["app-submit"]],
        outputs: {
          "switch": "switch"
        },
        decls: 9,
        vars: 0,
        consts: [["id", "content", "fxLayout", "column", "fxLayoutAlign", "center center"], ["id", "doneIcon"], ["align", "center", 1, "mat-h1"], ["id", "footer", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "mat-elevation-z24"], ["mat-flat-button", "", "color", "primary", 3, "click"]],
        template: function SubmitComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your item has been successfully submitted for sale!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitComponent_Template_button_click_7_listener() {
              return ctx.onSellAnotherItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sell Another Item ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: ["#content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n#doneIcon[_ngcontent-%COMP%] {\n    transform:scale(2);\n    padding: 3%;\n}\n\n#footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsLWl0ZW0vc3VibWl0L3N1Ym1pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxsLWl0ZW0vc3VibWl0L3N1Ym1pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI2RvbmVJY29uIHtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMik7XG4gICAgcGFkZGluZzogMyU7XG59XG5cbiNmb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMyU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmitComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-submit',
            templateUrl: './submit.component.html',
            styleUrls: ['./submit.component.css']
          }]
        }], function () {
          return [{
            type: _services_upload_item_service__WEBPACK_IMPORTED_MODULE_1__["UploadItemService"]
          }];
        }, {
          "switch": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/sell-item/upload/upload.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/sell-item/upload/upload.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UploadComponent */

    /***/
    function srcAppComponentsSellItemUploadUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadComponent", function () {
        return UploadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_upload_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/upload-item.service */
      "./src/app/services/upload-item.service.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function UploadComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_a_photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upload an image of the object you wish to sell.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UploadComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.handleDelete(ctx_r4.selectedIndex);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.images[ctx_r1.selectedIndex] + ")");
        }
      }

      function UploadComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_div_4_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var id_r7 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.handleSelect(id_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + image_r6 + ")");
        }
      }

      var UploadComponent = /*#__PURE__*/function () {
        function UploadComponent(uploadItemService) {
          _classCallCheck(this, UploadComponent);

          this.uploadItemService = uploadItemService;
          this["switch"] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nextDisabled = true;
          this.images = [];
        }

        _createClass(UploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.images = this.uploadItemService.uploadedImages;

            if (this.images.length > 0) {
              this.selectedIndex = 0;
              this.nextDisabled = false;
            }
          }
          /**
           * Called when an image is uploaded. Enables the next button with a valid image.
           * @param imageInput the image input
           */

        }, {
          key: "handleUpload",
          value: function handleUpload(imageInput) {
            var _this = this;

            this.uploadItemService.onImageUploaded(imageInput, function () {
              _this.selectedIndex = _this.images.length - 1;
            });
            this.images = this.uploadItemService.uploadedImages;
            this.nextDisabled = false;
          }
        }, {
          key: "handleDelete",
          value: function handleDelete(index) {
            this.uploadItemService.removeImage(index);
            this.images = this.uploadItemService.uploadedImages;
            this.selectedIndex = this.images.length - 1;
          }
        }, {
          key: "handleSelect",
          value: function handleSelect(index) {
            this.selectedIndex = index;
          }
        }, {
          key: "onNext",
          value: function onNext() {
            this["switch"].emit('next');
          }
        }]);

        return UploadComponent;
      }();

      UploadComponent.ɵfac = function UploadComponent_Factory(t) {
        return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_item_service__WEBPACK_IMPORTED_MODULE_1__["UploadItemService"]));
      };

      UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UploadComponent,
        selectors: [["app-upload"]],
        outputs: {
          "switch": "switch"
        },
        decls: 13,
        vars: 4,
        consts: [["id", "content", "fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px"], ["class", "upload-image-description", "fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "30px", 4, "ngIf"], ["class", "large-image-container", 3, "background-image", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxLayoutGap", "3px", 1, "bottom-image-gallery"], ["class", "small-image-container", 3, "background-image", "click", 4, "ngFor", "ngForOf"], ["for", "image-upload", 1, "image-upload-button"], ["id", "image-upload", "type", "file", "accept", "image/*", 3, "change"], ["imageInput", ""], ["id", "footer", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "mat-elevation-z24"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "30px", 1, "upload-image-description"], [1, "large-icon"], [1, "mat-h3"], [1, "large-image-container"], ["mat-mini-fab", "", 1, "delete-button", 3, "click"], [1, "small-image-container", 3, "click"]],
        template: function UploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadComponent_div_1_Template, 5, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadComponent_div_2_Template, 4, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UploadComponent_div_4_Template, 1, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_6_listener($event) {
              return ctx.handleUpload($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Select Photo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_11_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images.length !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextDisabled);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["*[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\n\n.large-icon[_ngcontent-%COMP%] {\n    transform:scale(2);\n}\n\n#content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n#content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 3%;\n}\n\n.large-image-container[_ngcontent-%COMP%] {\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 60%;\n    width: 80%;\n    background-color: black;\n}\n\n.bottom-image-gallery[_ngcontent-%COMP%] {\n    height: 12%;\n    width: 80%;\n}\n\n.small-image-container[_ngcontent-%COMP%] {\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 100%;\n    width: 20%;\n    background-color: black;\n}\n\n.image-upload-button[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    background-color: #3f51b5;\n    color: white;\n    padding: 10px;\n}\n\ninput[type=\"file\"][_ngcontent-%COMP%] {\n    display: none;\n}\n\n.upload-image-description[_ngcontent-%COMP%] {\n    margin: 0 80px 0 80px;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsLWl0ZW0vdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsbC1pdGVtL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5sYXJnZS1pY29uIHtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMik7XG59XG5cbiNjb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNjb250ZW50IGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMyU7XG59XG5cbi5sYXJnZS1pbWFnZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICB3aWR0aDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uYm90dG9tLWltYWdlLWdhbGxlcnkge1xuICAgIGhlaWdodDogMTIlO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5zbWFsbC1pbWFnZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmltYWdlLXVwbG9hZC1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVwbG9hZC1pbWFnZS1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiAwIDgwcHggMCA4MHB4O1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-upload',
            templateUrl: './upload.component.html',
            styleUrls: ['./upload.component.css']
          }]
        }], function () {
          return [{
            type: _services_upload_item_service__WEBPACK_IMPORTED_MODULE_1__["UploadItemService"]
          }];
        }, {
          "switch": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/user-actions/user-actions.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/user-actions/user-actions.component.ts ***!
      \*******************************************************************/

    /*! exports provided: UserActionsComponent */

    /***/
    function srcAppComponentsUserActionsUserActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserActionsComponent", function () {
        return UserActionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _sell_item_sell_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../sell-item/sell-item.component */
      "./src/app/components/sell-item/sell-item.component.ts");
      /* harmony import */


      var _buy_item_buy_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../buy-item/buy-item.component */
      "./src/app/components/buy-item/buy-item.component.ts");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var _c0 = ["buyItemPage"];
      var _c1 = ["sellItemPage"];

      function UserActionsComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserActionsComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "storefront");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserActionsComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chat_bubble");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var UserActionsComponent = /*#__PURE__*/function () {
        function UserActionsComponent() {
          _classCallCheck(this, UserActionsComponent);
        }

        _createClass(UserActionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserActionsComponent;
      }();

      UserActionsComponent.ɵfac = function UserActionsComponent_Factory(t) {
        return new (t || UserActionsComponent)();
      };

      UserActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserActionsComponent,
        selectors: [["app-user-actions"]],
        viewQuery: function UserActionsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buyItem = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sellItem = _t.first);
          }
        },
        decls: 11,
        vars: 0,
        consts: [["mat-align-tabs", "center", 1, "stickyy"], ["mat-tab-label", ""], ["sellItem", ""], ["buyItem", ""], [1, "example-tab-icon"]],
        template: function UserActionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserActionsComponent_ng_template_2_Template, 2, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sell-item", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserActionsComponent_ng_template_6_Template, 2, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-buy-item", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserActionsComponent_ng_template_10_Template, 2, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabLabel"], _sell_item_sell_item_component__WEBPACK_IMPORTED_MODULE_2__["SellItemComponent"], _buy_item_buy_item_component__WEBPACK_IMPORTED_MODULE_3__["BuyItemComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        styles: ["*[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\n\n#content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%\n}\n\nbutton[_ngcontent-%COMP%] {\n    padding: 10% 30%;\n}\n\n.tall[_ngcontent-%COMP%] {\n  min-height: 1000px;\n}\n\n.sticky[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 40px;\n    right: 20px;\n}\n\n.example-tab-icon[_ngcontent-%COMP%] {\n    margin-right: 8px;\n}\n\n.stickyy[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%\n}\n\n#footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWFjdGlvbnMvdXNlci1hY3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWDtBQUNGOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWFjdGlvbnMvdXNlci1hY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlXG59XG5cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTAlIDMwJTtcbn1cblxuLnRhbGwge1xuICBtaW4taGVpZ2h0OiAxMDAwcHg7XG59XG5cbi5zdGlja3kge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDQwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG5cbi5leGFtcGxlLXRhYi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnN0aWNreXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCVcbn1cblxuI2Zvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzJTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserActionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-actions',
            templateUrl: './user-actions.component.html',
            styleUrls: ['./user-actions.component.css']
          }]
        }], function () {
          return [];
        }, {
          buyItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['buyItemPage']
          }],
          sellItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sellItemPage']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/services/upload-item.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/upload-item.service.ts ***!
      \*************************************************/

    /*! exports provided: UploadItemService */

    /***/
    function srcAppServicesUploadItemServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadItemService", function () {
        return UploadItemService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /**
       * Handles item creation and local storage
       * as user progress through sell process.
       */


      var UploadItemService = /*#__PURE__*/function () {
        function UploadItemService(http) {
          _classCallCheck(this, UploadItemService);

          this.http = http;
          this._endpoint = '/api/upload-item'; // To view current item that user wants to sell

          this._currentItem = {
            name: '',
            seller: 'Roddy',
            description: '',
            price: ''
          }; // To view images that this user uploaded.

          this._uploadedImages = []; // To view history of items that this user submitted.

          this._submittedItems = [];
        }

        _createClass(UploadItemService, [{
          key: "onImageUploaded",
          // called when user uploads image
          value: function onImageUploaded(event, callback) {
            var _this2 = this;

            if (event.target.files && event.target.files[0]) {
              var file = event.target.files[0];
              var reader = new FileReader();
              reader.addEventListener('loadend', function () {
                if (typeof reader.result === 'string') {
                  _this2._uploadedImages.push(reader.result.toString());

                  callback();
                }
              });
              reader.readAsDataURL(file);
            }
          } // called when user removes images

        }, {
          key: "removeImage",
          value: function removeImage(index) {
            var newUploadedImages = [];

            for (var i = 0; i < this._uploadedImages.length; i++) {
              if (i !== index) {
                newUploadedImages.push(this._uploadedImages[i]);
              }
            }

            this._uploadedImages = newUploadedImages;
          } // called when user submits item

        }, {
          key: "uploadItemToServer",
          value: function uploadItemToServer() {
            var itemToUpload = Object.assign(Object.assign({}, this._currentItem), {
              uploadedImages: this._uploadedImages
            }); // adds to local history of items submitted

            this._submittedItems.push(itemToUpload); // submits item to server


            this.http.post(this._endpoint, itemToUpload); // reset current item and image urls

            this.resetCurrentItem();
          } // called when user wants to create a new item or submitted

        }, {
          key: "resetCurrentItem",
          value: function resetCurrentItem() {
            this._currentItem = {
              name: '',
              price: '',
              description: '',
              seller: 'Roddy'
            };
            this._uploadedImages = [];
          }
        }, {
          key: "uploadedImages",
          get: function get() {
            return this._uploadedImages;
          }
        }, {
          key: "currentItem",
          get: function get() {
            return this._currentItem;
          },
          set: function set(value) {
            this._currentItem = value;
          }
        }, {
          key: "submittedItems",
          get: function get() {
            return this._submittedItems;
          }
        }]);

        return UploadItemService;
      }();

      UploadItemService.ɵfac = function UploadItemService_Factory(t) {
        return new (t || UploadItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UploadItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UploadItemService,
        factory: UploadItemService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadItemService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/roddy/demodays-marketplace/marketplace/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map