"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index.1"],{

/***/ 104:
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/anima-scroll.js */ 280);
/* harmony import */ var _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smooth-scroll.js */ 967);
/* harmony import */ var _modules_hamburger_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hamburger-menu.js */ 821);
/* harmony import */ var _modules_active_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/active-card.js */ 898);




var animaScroll = new _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-scroll]');
animaScroll.init();
var smoothScroll = new _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__["default"]('[data-smooth]');
smoothScroll.init();
var menuHamburger = new _modules_hamburger_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]('.menu__hamburger');
menuHamburger.init();
var activeCard = new _modules_active_card_js__WEBPACK_IMPORTED_MODULE_3__["default"]('[data-card]');
activeCard.init();

/***/ }),

/***/ 898:
/*!*******************************************!*\
  !*** ./src/script/modules/active-card.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActiveCard)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var ActiveCard = /*#__PURE__*/function () {
  function ActiveCard(elementDOM) {
    _classCallCheck(this, ActiveCard);
    this.cards = document.querySelectorAll(elementDOM);
  }
  _createClass(ActiveCard, [{
    key: "toggleCard",
    value: function toggleCard(card) {
      card.classList.add('is--active__card');
    }
  }, {
    key: "handleTouch",
    value: function handleTouch() {
      var _this = this;
      this.cards.forEach(function (card) {
        return card.addEventListener('touchstart', _this.toggleCard);
      });
    }
  }, {
    key: "eventBind",
    value: function eventBind() {
      this.toggleCard = this.toggleCard.bind(this);
    }
  }, {
    key: "init",
    value: function init() {
      this.eventBind();
      this.handleTouch();
      return this;
    }
  }]);
  return ActiveCard;
}();


/***/ }),

/***/ 280:
/*!********************************************!*\
  !*** ./src/script/modules/anima-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnimaScroll)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var AnimaScroll = /*#__PURE__*/function () {
  function AnimaScroll(elementDom) {
    _classCallCheck(this, AnimaScroll);
    this.elements = document.querySelectorAll(elementDom);
  }
  _createClass(AnimaScroll, [{
    key: "eventScroll",
    value: function eventScroll() {
      window.addEventListener('scroll', this.elementsToAnimation);
    }
  }, {
    key: "elementsToAnimation",
    value: function elementsToAnimation() {
      this.elements.forEach(function (element) {
        var dtSet = element.dataset;
        var el = element.getBoundingClientRect().y;
        var windowTop = window.innerHeight;
        if (dtSet.scroll === 'title' && el < windowTop * 0.85) element.classList.add('anima-title');
        if (dtSet.scroll === 'card' && el < windowTop * 0.9) element.classList.add('anima-card');
      });
    }
  }, {
    key: "eventBind",
    value: function eventBind() {
      this.elementsToAnimation = this.elementsToAnimation.bind(this);
    }
  }, {
    key: "init",
    value: function init() {
      this.eventBind();
      this.eventScroll();
      return this;
    }
  }]);
  return AnimaScroll;
}();


/***/ }),

/***/ 821:
/*!**********************************************!*\
  !*** ./src/script/modules/hamburger-menu.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuHamburger)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var MenuHamburger = /*#__PURE__*/function () {
  function MenuHamburger(elementDOM) {
    _classCallCheck(this, MenuHamburger);
    this.elementDOM = document.querySelector(elementDOM);
  }
  _createClass(MenuHamburger, [{
    key: "actionMenu",
    value: function actionMenu() {
      var activeMenu = document.querySelector('.menu__slice');
      var menu = document.querySelector('.menu');
      activeMenu.classList.toggle('is--active__menu');
      menu.classList.toggle('is--active__menu');
    }
  }, {
    key: "handleTouch",
    value: function handleTouch() {
      this.elementDOM.addEventListener('click', this.actionMenu);
    }
  }, {
    key: "eventBind",
    value: function eventBind() {
      this.actionMenu = this.actionMenu.bind(this);
    }
  }, {
    key: "init",
    value: function init() {
      this.eventBind();
      this.handleTouch();
      return this;
    }
  }]);
  return MenuHamburger;
}();


/***/ }),

/***/ 967:
/*!*********************************************!*\
  !*** ./src/script/modules/smooth-scroll.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmoothScroll)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var SmoothScroll = /*#__PURE__*/function () {
  function SmoothScroll(elementDom) {
    _classCallCheck(this, SmoothScroll);
    this.elementDom = document.querySelectorAll(elementDom);
  }
  _createClass(SmoothScroll, [{
    key: "closeMenuMobile",
    value: function closeMenuMobile() {
      var closeHamburger = document.querySelector('.menu__slice');
      var menu = document.querySelector('.menu');
      closeHamburger.classList.remove('is--active__menu');
      menu.classList.remove('is--active__menu');
    }
  }, {
    key: "clickEvent",
    value: function clickEvent(element) {
      element.preventDefault();
      var sections = document.querySelectorAll('section');
      var dtSmooth = element.currentTarget.dataset.smooth;
      this.closeMenuMobile();
      sections.forEach(function (sec) {
        var id = sec.id;
        if (dtSmooth === id) sec.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      });
    }
  }, {
    key: "elementsToSmooth",
    value: function elementsToSmooth() {
      var _this = this;
      this.elementDom.forEach(function (element) {
        return element.addEventListener('click', _this.clickEvent);
      });
    }
  }, {
    key: "eventBind",
    value: function eventBind() {
      this.clickEvent = this.clickEvent.bind(this);
    }
  }, {
    key: "init",
    value: function init() {
      this.eventBind();
      this.elementsToSmooth();
      return this;
    }
  }]);
  return SmoothScroll;
}();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(104));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2luZGV4LjEuMGQ3Y2EzOWNmN2UyNDIwMGE5ZmIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDRTtBQUNFO0FBQ047QUFFbEQsSUFBTUksV0FBVyxHQUFHLElBQUlKLGdFQUFXLENBQUMsZUFBZSxDQUFDO0FBQ3BESSxXQUFXLENBQUNDLElBQUksRUFBRTtBQUVsQixJQUFNQyxZQUFZLEdBQUcsSUFBSUwsaUVBQVksQ0FBQyxlQUFlLENBQUM7QUFDdERLLFlBQVksQ0FBQ0QsSUFBSSxFQUFFO0FBRW5CLElBQU1FLGFBQWEsR0FBRyxJQUFJTCxrRUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQzNESyxhQUFhLENBQUNGLElBQUksRUFBRTtBQUVwQixJQUFNRyxVQUFVLEdBQUcsSUFBSUwsK0RBQVUsQ0FBQyxhQUFhLENBQUM7QUFDaERLLFVBQVUsQ0FBQ0gsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztJQ2ZJRixVQUFVO0VBQzVCLG9CQUFZTSxVQUFVLEVBQUU7SUFBQTtJQUNyQixJQUFJLENBQUNDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsVUFBVSxDQUFDO0VBQ3JEO0VBQUM7SUFBQTtJQUFBLE9BRUQsb0JBQVdJLElBQUksRUFBRTtNQUNkQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ3pDO0VBQUM7SUFBQTtJQUFBLE9BRUQsdUJBQWM7TUFBQTtNQUNYLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxPQUFPLENBQUMsVUFBQ0gsSUFBSTtRQUFBLE9BQ3JCQSxJQUFJLENBQUNJLGdCQUFnQixDQUFDLFlBQVksRUFBRSxLQUFJLENBQUNDLFVBQVUsQ0FBQztNQUFBLEVBQ3REO0lBQ0o7RUFBQztJQUFBO0lBQUEsT0FFRCxxQkFBWTtNQUNULElBQUksQ0FBQ0EsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQy9DO0VB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O0VBQUM7SUFBQTtJQUFBLE9BRUQscUJBQVk7TUFDVCxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsQ0FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDL0M7RUFBQztJQUFBO0lBQUEsT0FFRCxnQkFBTztNQUNKLElBQUksQ0FBQ0MsU0FBUyxFQUFFO01BQ2hCLElBQUksQ0FBQ21DLGdCQUFnQixFQUFFO01BQ3ZCLE9BQU8sSUFBSTtJQUNkO0VBQUM7RUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2NyaXB0L21vZHVsZXMvYWN0aXZlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3NjcmlwdC9tb2R1bGVzL2FuaW1hLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2NyaXB0L21vZHVsZXMvaGFtYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3NjcmlwdC9tb2R1bGVzL3Ntb290aC1zY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hU2Nyb2xsIGZyb20gJy4vbW9kdWxlcy9hbmltYS1zY3JvbGwuanMnO1xuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICcuL21vZHVsZXMvc21vb3RoLXNjcm9sbC5qcyc7XG5pbXBvcnQgTWVudUhhbWJ1cmdlciBmcm9tICcuL21vZHVsZXMvaGFtYnVyZ2VyLW1lbnUuanMnO1xuaW1wb3J0IEFjdGl2ZUNhcmQgZnJvbSAnLi9tb2R1bGVzL2FjdGl2ZS1jYXJkLmpzJztcblxuY29uc3QgYW5pbWFTY3JvbGwgPSBuZXcgQW5pbWFTY3JvbGwoJ1tkYXRhLXNjcm9sbF0nKTtcbmFuaW1hU2Nyb2xsLmluaXQoKTtcblxuY29uc3Qgc21vb3RoU2Nyb2xsID0gbmV3IFNtb290aFNjcm9sbCgnW2RhdGEtc21vb3RoXScpO1xuc21vb3RoU2Nyb2xsLmluaXQoKTtcblxuY29uc3QgbWVudUhhbWJ1cmdlciA9IG5ldyBNZW51SGFtYnVyZ2VyKCcubWVudV9faGFtYnVyZ2VyJyk7XG5tZW51SGFtYnVyZ2VyLmluaXQoKTtcblxuY29uc3QgYWN0aXZlQ2FyZCA9IG5ldyBBY3RpdmVDYXJkKCdbZGF0YS1jYXJkXScpO1xuYWN0aXZlQ2FyZC5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RpdmVDYXJkIHtcbiAgIGNvbnN0cnVjdG9yKGVsZW1lbnRET00pIHtcbiAgICAgIHRoaXMuY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRET00pO1xuICAgfVxuXG4gICB0b2dnbGVDYXJkKGNhcmQpIHtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaXMtLWFjdGl2ZV9fY2FyZCcpO1xuICAgfVxuXG4gICBoYW5kbGVUb3VjaCgpIHtcbiAgICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT5cbiAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMudG9nZ2xlQ2FyZCksXG4gICAgICApO1xuICAgfVxuXG4gICBldmVudEJpbmQoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNhcmQgPSB0aGlzLnRvZ2dsZUNhcmQuYmluZCh0aGlzKTtcbiAgIH1cblxuICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuZXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLmhhbmRsZVRvdWNoKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hU2Nyb2xsIHtcbiAgIGNvbnN0cnVjdG9yKGVsZW1lbnREb20pIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnREb20pO1xuICAgfVxuXG4gICBldmVudFNjcm9sbCgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmVsZW1lbnRzVG9BbmltYXRpb24pO1xuICAgfVxuXG4gICBlbGVtZW50c1RvQW5pbWF0aW9uKCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICBsZXQgZHRTZXQgPSBlbGVtZW50LmRhdGFzZXQ7XG4gICAgICAgICBsZXQgZWwgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XG4gICAgICAgICBsZXQgd2luZG93VG9wID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICBpZiAoZHRTZXQuc2Nyb2xsID09PSAndGl0bGUnICYmIGVsIDwgd2luZG93VG9wICogMC44NSlcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWEtdGl0bGUnKTtcblxuICAgICAgICAgaWYgKGR0U2V0LnNjcm9sbCA9PT0gJ2NhcmQnICYmIGVsIDwgd2luZG93VG9wICogMC45KVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYS1jYXJkJyk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgZXZlbnRCaW5kKCkge1xuICAgICAgdGhpcy5lbGVtZW50c1RvQW5pbWF0aW9uID0gdGhpcy5lbGVtZW50c1RvQW5pbWF0aW9uLmJpbmQodGhpcyk7XG4gICB9XG5cbiAgIGluaXQoKSB7XG4gICAgICB0aGlzLmV2ZW50QmluZCgpO1xuICAgICAgdGhpcy5ldmVudFNjcm9sbCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51SGFtYnVyZ2VyIHtcbiAgIGNvbnN0cnVjdG9yKGVsZW1lbnRET00pIHtcbiAgICAgIHRoaXMuZWxlbWVudERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudERPTSk7XG4gICB9XG5cbiAgIGFjdGlvbk1lbnUoKSB7XG4gICAgICBjb25zdCBhY3RpdmVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3NsaWNlJyk7XG4gICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcblxuICAgICAgYWN0aXZlTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy0tYWN0aXZlX19tZW51Jyk7XG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLS1hY3RpdmVfX21lbnUnKTtcbiAgIH1cblxuICAgaGFuZGxlVG91Y2goKSB7XG4gICAgICB0aGlzLmVsZW1lbnRET00uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjdGlvbk1lbnUpO1xuICAgfVxuXG4gICBldmVudEJpbmQoKSB7XG4gICAgICB0aGlzLmFjdGlvbk1lbnUgPSB0aGlzLmFjdGlvbk1lbnUuYmluZCh0aGlzKTtcbiAgIH1cblxuICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuZXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLmhhbmRsZVRvdWNoKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtb290aFNjcm9sbCB7XG4gICBjb25zdHJ1Y3RvcihlbGVtZW50RG9tKSB7XG4gICAgICB0aGlzLmVsZW1lbnREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnREb20pO1xuICAgfVxuXG4gICBjbG9zZU1lbnVNb2JpbGUoKSB7XG4gICAgICBjb25zdCBjbG9zZUhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zbGljZScpO1xuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5cbiAgICAgIGNsb3NlSGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLS1hY3RpdmVfX21lbnUnKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtLWFjdGl2ZV9fbWVudScpO1xuICAgfVxuXG4gICBjbGlja0V2ZW50KGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XG4gICAgICBjb25zdCBkdFNtb290aCA9IGVsZW1lbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnNtb290aDtcblxuICAgICAgdGhpcy5jbG9zZU1lbnVNb2JpbGUoKTtcblxuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjKSA9PiB7XG4gICAgICAgICBjb25zdCBpZCA9IHNlYy5pZDtcblxuICAgICAgICAgaWYgKGR0U21vb3RoID09PSBpZClcbiAgICAgICAgICAgIHNlYy5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICBibG9jazogJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIGVsZW1lbnRzVG9TbW9vdGgoKSB7XG4gICAgICB0aGlzLmVsZW1lbnREb20uZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrRXZlbnQpLFxuICAgICAgKTtcbiAgIH1cblxuICAgZXZlbnRCaW5kKCkge1xuICAgICAgdGhpcy5jbGlja0V2ZW50ID0gdGhpcy5jbGlja0V2ZW50LmJpbmQodGhpcyk7XG4gICB9XG5cbiAgIGluaXQoKSB7XG4gICAgICB0aGlzLmV2ZW50QmluZCgpO1xuICAgICAgdGhpcy5lbGVtZW50c1RvU21vb3RoKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH1cbn1cbiJdLCJuYW1lcyI6WyJBbmltYVNjcm9sbCIsIlNtb290aFNjcm9sbCIsIk1lbnVIYW1idXJnZXIiLCJBY3RpdmVDYXJkIiwiYW5pbWFTY3JvbGwiLCJpbml0Iiwic21vb3RoU2Nyb2xsIiwibWVudUhhbWJ1cmdlciIsImFjdGl2ZUNhcmQiLCJlbGVtZW50RE9NIiwiY2FyZHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXJkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVDYXJkIiwiYmluZCIsImV2ZW50QmluZCIsImhhbmRsZVRvdWNoIiwiZWxlbWVudERvbSIsImVsZW1lbnRzIiwid2luZG93IiwiZWxlbWVudHNUb0FuaW1hdGlvbiIsImVsZW1lbnQiLCJkdFNldCIsImRhdGFzZXQiLCJlbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJ3aW5kb3dUb3AiLCJpbm5lckhlaWdodCIsInNjcm9sbCIsImV2ZW50U2Nyb2xsIiwicXVlcnlTZWxlY3RvciIsImFjdGl2ZU1lbnUiLCJtZW51IiwidG9nZ2xlIiwiYWN0aW9uTWVudSIsImNsb3NlSGFtYnVyZ2VyIiwicmVtb3ZlIiwicHJldmVudERlZmF1bHQiLCJzZWN0aW9ucyIsImR0U21vb3RoIiwiY3VycmVudFRhcmdldCIsInNtb290aCIsImNsb3NlTWVudU1vYmlsZSIsInNlYyIsImlkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiY2xpY2tFdmVudCIsImVsZW1lbnRzVG9TbW9vdGgiXSwic291cmNlUm9vdCI6IiJ9