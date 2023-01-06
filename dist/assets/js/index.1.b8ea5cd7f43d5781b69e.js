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



var animaScroll = new _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-scroll]');
animaScroll.init();
var smoothScroll = new _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__["default"]('[data-smooth]');
smoothScroll.init();
var menuHamburger = new _modules_hamburger_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]('.menu__hamburger');
menuHamburger.init();

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
      this.elementDOM.addEventListener('touchstart', this.actionMenu);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2luZGV4LjEuYjhlYTVjZDdmNDNkNTc4MWI2OWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNFO0FBQ0U7QUFFeEQsSUFBTUcsV0FBVyxHQUFHLElBQUlILGdFQUFXLENBQUMsZUFBZSxDQUFDO0FBQ3BERyxXQUFXLENBQUNDLElBQUksRUFBRTtBQUVsQixJQUFNQyxZQUFZLEdBQUcsSUFBSUosaUVBQVksQ0FBQyxlQUFlLENBQUM7QUFDdERJLFlBQVksQ0FBQ0QsSUFBSSxFQUFFO0FBRW5CLElBQU1FLGFBQWEsR0FBRyxJQUFJSixrRUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQzNESSxhQUFhLENBQUNGLElBQUksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNYQ0osV0FBVztFQUM3QixxQkFBWU8sVUFBVSxFQUFFO0lBQUE7SUFDckIsSUFBSSxDQUFDQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUNILFVBQVUsQ0FBQztFQUN4RDtFQUFDO0lBQUE7SUFBQSxPQUVELHVCQUFjO01BQ1hJLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsbUJBQW1CLENBQUM7SUFDOUQ7RUFBQztJQUFBO0lBQUEsT0FFRCwrQkFBc0I7TUFDbkIsSUFBSSxDQUFDTCxRQUFRLENBQUNNLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUs7UUFDaEMsSUFBSUMsS0FBSyxHQUFHRCxPQUFPLENBQUNFLE9BQU87UUFDM0IsSUFBSUMsRUFBRSxHQUFHSCxPQUFPLENBQUNJLHFCQUFxQixFQUFFLENBQUNDLENBQUM7UUFDMUMsSUFBSUMsU0FBUyxHQUFHVixNQUFNLENBQUNXLFdBQVc7UUFFbEMsSUFBSU4sS0FBSyxDQUFDTyxNQUFNLEtBQUssT0FBTyxJQUFJTCxFQUFFLEdBQUdHLFNBQVMsR0FBRyxJQUFJLEVBQ2xETixPQUFPLENBQUNTLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUV2QyxJQUFJ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LFFBQVEsRUFBRTtRQUNiLENBQUMsQ0FBQztNQUNSLENBQUMsQ0FBQztJQUNMO0VBQUM7SUFBQTtJQUFBLE9BRUQsNEJBQW1CO01BQUE7TUFDaEIsSUFBSSxDQUFDekMsVUFBVSxDQUFDTyxPQUFPLENBQUMsVUFBQ0MsT0FBTztRQUFBLE9BQzdCQSxPQUFPLENBQUNILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUNxQyxVQUFVLENBQUM7TUFBQSxFQUNwRDtJQUNKO0VBQUM7SUFBQTtJQUFBLE9BRUQscUJBQVk7TUFDVCxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsQ0FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDL0M7RUFBQztJQUFBO0lBQUEsT0FFRCxnQkFBTztNQUNKLElBQUksQ0FBQ0MsU0FBUyxFQUFFO01BQ2hCLElBQUksQ0FBQ3VCLGdCQUFnQixFQUFFO01BQ3ZCLE9BQU8sSUFBSTtJQUNkO0VBQUM7RUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2NyaXB0L21vZHVsZXMvYW5pbWEtc2Nyb2xsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zY3JpcHQvbW9kdWxlcy9oYW1idXJnZXItbWVudS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2NyaXB0L21vZHVsZXMvc21vb3RoLXNjcm9sbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWFTY3JvbGwgZnJvbSAnLi9tb2R1bGVzL2FuaW1hLXNjcm9sbC5qcyc7XG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJy4vbW9kdWxlcy9zbW9vdGgtc2Nyb2xsLmpzJztcbmltcG9ydCBNZW51SGFtYnVyZ2VyIGZyb20gJy4vbW9kdWxlcy9oYW1idXJnZXItbWVudS5qcyc7XG5cbmNvbnN0IGFuaW1hU2Nyb2xsID0gbmV3IEFuaW1hU2Nyb2xsKCdbZGF0YS1zY3JvbGxdJyk7XG5hbmltYVNjcm9sbC5pbml0KCk7XG5cbmNvbnN0IHNtb290aFNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoJ1tkYXRhLXNtb290aF0nKTtcbnNtb290aFNjcm9sbC5pbml0KCk7XG5cbmNvbnN0IG1lbnVIYW1idXJnZXIgPSBuZXcgTWVudUhhbWJ1cmdlcignLm1lbnVfX2hhbWJ1cmdlcicpO1xubWVudUhhbWJ1cmdlci5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYVNjcm9sbCB7XG4gICBjb25zdHJ1Y3RvcihlbGVtZW50RG9tKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50RG9tKTtcbiAgIH1cblxuICAgZXZlbnRTY3JvbGwoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5lbGVtZW50c1RvQW5pbWF0aW9uKTtcbiAgIH1cblxuICAgZWxlbWVudHNUb0FuaW1hdGlvbigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgbGV0IGR0U2V0ID0gZWxlbWVudC5kYXRhc2V0O1xuICAgICAgICAgbGV0IGVsID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xuICAgICAgICAgbGV0IHdpbmRvd1RvcCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgaWYgKGR0U2V0LnNjcm9sbCA9PT0gJ3RpdGxlJyAmJiBlbCA8IHdpbmRvd1RvcCAqIDAuODUpXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hLXRpdGxlJyk7XG5cbiAgICAgICAgIGlmIChkdFNldC5zY3JvbGwgPT09ICdjYXJkJyAmJiBlbCA8IHdpbmRvd1RvcCAqIDAuOSlcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWEtY2FyZCcpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIGV2ZW50QmluZCgpIHtcbiAgICAgIHRoaXMuZWxlbWVudHNUb0FuaW1hdGlvbiA9IHRoaXMuZWxlbWVudHNUb0FuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICAgfVxuXG4gICBpbml0KCkge1xuICAgICAgdGhpcy5ldmVudEJpbmQoKTtcbiAgICAgIHRoaXMuZXZlbnRTY3JvbGwoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUhhbWJ1cmdlciB7XG4gICBjb25zdHJ1Y3RvcihlbGVtZW50RE9NKSB7XG4gICAgICB0aGlzLmVsZW1lbnRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRET00pO1xuICAgfVxuXG4gICBhY3Rpb25NZW51KCkge1xuICAgICAgY29uc3QgYWN0aXZlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zbGljZScpO1xuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5cbiAgICAgIGFjdGl2ZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtLWFjdGl2ZV9fbWVudScpO1xuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy0tYWN0aXZlX19tZW51Jyk7XG4gICB9XG5cbiAgIGhhbmRsZVRvdWNoKCkge1xuICAgICAgdGhpcy5lbGVtZW50RE9NLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmFjdGlvbk1lbnUpO1xuICAgfVxuXG4gICBldmVudEJpbmQoKSB7XG4gICAgICB0aGlzLmFjdGlvbk1lbnUgPSB0aGlzLmFjdGlvbk1lbnUuYmluZCh0aGlzKTtcbiAgIH1cblxuICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuZXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLmhhbmRsZVRvdWNoKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtb290aFNjcm9sbCB7XG4gICBjb25zdHJ1Y3RvcihlbGVtZW50RG9tKSB7XG4gICAgICB0aGlzLmVsZW1lbnREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnREb20pO1xuICAgfVxuXG4gICBjbG9zZU1lbnVNb2JpbGUoKSB7XG4gICAgICBjb25zdCBjbG9zZUhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zbGljZScpO1xuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5cbiAgICAgIGNsb3NlSGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLS1hY3RpdmVfX21lbnUnKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtLWFjdGl2ZV9fbWVudScpO1xuICAgfVxuXG4gICBjbGlja0V2ZW50KGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XG4gICAgICBjb25zdCBkdFNtb290aCA9IGVsZW1lbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnNtb290aDtcblxuICAgICAgdGhpcy5jbG9zZU1lbnVNb2JpbGUoKTtcblxuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjKSA9PiB7XG4gICAgICAgICBjb25zdCBpZCA9IHNlYy5pZDtcblxuICAgICAgICAgaWYgKGR0U21vb3RoID09PSBpZClcbiAgICAgICAgICAgIHNlYy5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICBibG9jazogJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIGVsZW1lbnRzVG9TbW9vdGgoKSB7XG4gICAgICB0aGlzLmVsZW1lbnREb20uZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrRXZlbnQpLFxuICAgICAgKTtcbiAgIH1cblxuICAgZXZlbnRCaW5kKCkge1xuICAgICAgdGhpcy5jbGlja0V2ZW50ID0gdGhpcy5jbGlja0V2ZW50LmJpbmQodGhpcyk7XG4gICB9XG5cbiAgIGluaXQoKSB7XG4gICAgICB0aGlzLmV2ZW50QmluZCgpO1xuICAgICAgdGhpcy5lbGVtZW50c1RvU21vb3RoKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH1cbn1cbiJdLCJuYW1lcyI6WyJBbmltYVNjcm9sbCIsIlNtb290aFNjcm9sbCIsIk1lbnVIYW1idXJnZXIiLCJhbmltYVNjcm9sbCIsImluaXQiLCJzbW9vdGhTY3JvbGwiLCJtZW51SGFtYnVyZ2VyIiwiZWxlbWVudERvbSIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnRzVG9BbmltYXRpb24iLCJmb3JFYWNoIiwiZWxlbWVudCIsImR0U2V0IiwiZGF0YXNldCIsImVsIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsIndpbmRvd1RvcCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsIiwiY2xhc3NMaXN0IiwiYWRkIiwiYmluZCIsImV2ZW50QmluZCIsImV2ZW50U2Nyb2xsIiwiZWxlbWVudERPTSIsInF1ZXJ5U2VsZWN0b3IiLCJhY3RpdmVNZW51IiwibWVudSIsInRvZ2dsZSIsImFjdGlvbk1lbnUiLCJoYW5kbGVUb3VjaCIsImNsb3NlSGFtYnVyZ2VyIiwicmVtb3ZlIiwicHJldmVudERlZmF1bHQiLCJzZWN0aW9ucyIsImR0U21vb3RoIiwiY3VycmVudFRhcmdldCIsInNtb290aCIsImNsb3NlTWVudU1vYmlsZSIsInNlYyIsImlkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiY2xpY2tFdmVudCIsImVsZW1lbnRzVG9TbW9vdGgiXSwic291cmNlUm9vdCI6IiJ9