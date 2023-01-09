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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2luZGV4LjEuYTMxMmZlM2ExMjAyMGQ4YzlmODYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNFO0FBQ0U7QUFFeEQsSUFBTUcsV0FBVyxHQUFHLElBQUlILGdFQUFXLENBQUMsZUFBZSxDQUFDO0FBQ3BERyxXQUFXLENBQUNDLElBQUksRUFBRTtBQUVsQixJQUFNQyxZQUFZLEdBQUcsSUFBSUosaUVBQVksQ0FBQyxlQUFlLENBQUM7QUFDdERJLFlBQVksQ0FBQ0QsSUFBSSxFQUFFO0FBRW5CLElBQU1FLGFBQWEsR0FBRyxJQUFJSixrRUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQzNESSxhQUFhLENBQUNGLElBQUksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNYQ0osV0FBVztFQUM3QixxQkFBWU8sVUFBVSxFQUFFO0lBQUE7SUFDckIsSUFBSSxDQUFDQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUNILFVBQVUsQ0FBQztFQUN4RDtFQUFDO0lBQUE7SUFBQSxPQUVELHVCQUFjO01BQ1hJLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsbUJBQW1CLENBQUM7SUFDOUQ7RUFBQztJQUFBO0lBQUEsT0FFRCwrQkFBc0I7TUFDbkIsSUFBSSxDQUFDTCxRQUFRLENBQUNNLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUs7UUFDaEMsSUFBSUMsS0FBSyxHQUFHRCxPQUFPLENBQUNFLE9BQU87UUFDM0IsSUFBSUMsRUFBRSxHQUFHSCxPQUFPLENBQUNJLHFCQUFxQixFQUFFLENBQUNDLENBQUM7UUFDMUMsSUFBSUMsU0FBUyxHQUFHVixNQUFNLENBQUNXLFdBQVc7UUFFbEMsSUFBSU4sS0FBSyxDQUFDTyxNQUFNLEtBQUssT0FBTyxJQUFJTCxFQUFFLEdBQUdHLFNBQVMsR0FBRyxJQUFJLEVBQ2xETixPQUFPLENBQUNTLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUV2QyxJQUFJ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LFFBQVEsRUFBRTtRQUNiLENBQUMsQ0FBQztNQUNSLENBQUMsQ0FBQztJQUNMO0VBQUM7SUFBQTtJQUFBLE9BRUQsNEJBQW1CO01BQUE7TUFDaEIsSUFBSSxDQUFDekMsVUFBVSxDQUFDTyxPQUFPLENBQUMsVUFBQ0MsT0FBTztRQUFBLE9BQzdCQSxPQUFPLENBQUNILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUNxQyxVQUFVLENBQUM7TUFBQSxFQUNwRDtJQUNKO0VBQUM7SUFBQTtJQUFBLE9BRUQscUJBQVk7TUFDVCxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsQ0FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDL0M7RUFBQztJQUFBO0lBQUEsT0FFRCxnQkFBTztNQUNKLElBQUksQ0FBQ0MsU0FBUyxFQUFFO01BQ2hCLElBQUksQ0FBQ3VCLGdCQUFnQixFQUFFO01BQ3ZCLE9BQU8sSUFBSTtJQUNkO0VBQUM7RUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2NyaXB0L21vZHVsZXMvYW5pbWEtc2Nyb2xsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zY3JpcHQvbW9kdWxlcy9oYW1idXJnZXItbWVudS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2NyaXB0L21vZHVsZXMvc21vb3RoLXNjcm9sbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWFTY3JvbGwgZnJvbSAnLi9tb2R1bGVzL2FuaW1hLXNjcm9sbC5qcyc7XG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJy4vbW9kdWxlcy9zbW9vdGgtc2Nyb2xsLmpzJztcbmltcG9ydCBNZW51SGFtYnVyZ2VyIGZyb20gJy4vbW9kdWxlcy9oYW1idXJnZXItbWVudS5qcyc7XG5cbmNvbnN0IGFuaW1hU2Nyb2xsID0gbmV3IEFuaW1hU2Nyb2xsKCdbZGF0YS1zY3JvbGxdJyk7XG5hbmltYVNjcm9sbC5pbml0KCk7XG5cbmNvbnN0IHNtb290aFNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoJ1tkYXRhLXNtb290aF0nKTtcbnNtb290aFNjcm9sbC5pbml0KCk7XG5cbmNvbnN0IG1lbnVIYW1idXJnZXIgPSBuZXcgTWVudUhhbWJ1cmdlcignLm1lbnVfX2hhbWJ1cmdlcicpO1xubWVudUhhbWJ1cmdlci5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYVNjcm9sbCB7XG4gICBjb25zdHJ1Y3RvcihlbGVtZW50RG9tKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50RG9tKTtcbiAgIH1cblxuICAgZXZlbnRTY3JvbGwoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5lbGVtZW50c1RvQW5pbWF0aW9uKTtcbiAgIH1cblxuICAgZWxlbWVudHNUb0FuaW1hdGlvbigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgbGV0IGR0U2V0ID0gZWxlbWVudC5kYXRhc2V0O1xuICAgICAgICAgbGV0IGVsID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xuICAgICAgICAgbGV0IHdpbmRvd1RvcCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgaWYgKGR0U2V0LnNjcm9sbCA9PT0gJ3RpdGxlJyAmJiBlbCA8IHdpbmRvd1RvcCAqIDAuODUpXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hLXRpdGxlJyk7XG5cbiAgICAgICAgIGlmIChkdFNldC5zY3JvbGwgPT09ICdjYXJkJyAmJiBlbCA8IHdpbmRvd1RvcCAqIDAuOSlcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWEtY2FyZCcpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIGV2ZW50QmluZCgpIHtcbiAgICAgIHRoaXMuZWxlbWVudHNUb0FuaW1hdGlvbiA9IHRoaXMuZWxlbWVudHNUb0FuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICAgfVxuXG4gICBpbml0KCkge1xuICAgICAgdGhpcy5ldmVudEJpbmQoKTtcbiAgICAgIHRoaXMuZXZlbnRTY3JvbGwoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUhhbWJ1cmdlciB7XG4gICBjb25zdHJ1Y3RvcihlbGVtZW50RE9NKSB7XG4gICAgICB0aGlzLmVsZW1lbnRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRET00pO1xuICAgfVxuXG4gICBhY3Rpb25NZW51KCkge1xuICAgICAgY29uc3QgYWN0aXZlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zbGljZScpO1xuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5cbiAgICAgIGFjdGl2ZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtLWFjdGl2ZV9fbWVudScpO1xuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy0tYWN0aXZlX19tZW51Jyk7XG4gICB9XG5cbiAgIGhhbmRsZVRvdWNoKCkge1xuICAgICAgdGhpcy5lbGVtZW50RE9NLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY3Rpb25NZW51KTtcbiAgIH1cblxuICAgZXZlbnRCaW5kKCkge1xuICAgICAgdGhpcy5hY3Rpb25NZW51ID0gdGhpcy5hY3Rpb25NZW51LmJpbmQodGhpcyk7XG4gICB9XG5cbiAgIGluaXQoKSB7XG4gICAgICB0aGlzLmV2ZW50QmluZCgpO1xuICAgICAgdGhpcy5oYW5kbGVUb3VjaCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbW9vdGhTY3JvbGwge1xuICAgY29uc3RydWN0b3IoZWxlbWVudERvbSkge1xuICAgICAgdGhpcy5lbGVtZW50RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50RG9tKTtcbiAgIH1cblxuICAgY2xvc2VNZW51TW9iaWxlKCkge1xuICAgICAgY29uc3QgY2xvc2VIYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fc2xpY2UnKTtcbiAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuXG4gICAgICBjbG9zZUhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy0tYWN0aXZlX19tZW51Jyk7XG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLS1hY3RpdmVfX21lbnUnKTtcbiAgIH1cblxuICAgY2xpY2tFdmVudChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xuICAgICAgY29uc3QgZHRTbW9vdGggPSBlbGVtZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zbW9vdGg7XG5cbiAgICAgIHRoaXMuY2xvc2VNZW51TW9iaWxlKCk7XG5cbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlYykgPT4ge1xuICAgICAgICAgY29uc3QgaWQgPSBzZWMuaWQ7XG5cbiAgICAgICAgIGlmIChkdFNtb290aCA9PT0gaWQpXG4gICAgICAgICAgICBzZWMuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgICAgYmxvY2s6ICdzdGFydCcsXG4gICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgfVxuXG4gICBlbGVtZW50c1RvU21vb3RoKCkge1xuICAgICAgdGhpcy5lbGVtZW50RG9tLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0V2ZW50KSxcbiAgICAgICk7XG4gICB9XG5cbiAgIGV2ZW50QmluZCgpIHtcbiAgICAgIHRoaXMuY2xpY2tFdmVudCA9IHRoaXMuY2xpY2tFdmVudC5iaW5kKHRoaXMpO1xuICAgfVxuXG4gICBpbml0KCkge1xuICAgICAgdGhpcy5ldmVudEJpbmQoKTtcbiAgICAgIHRoaXMuZWxlbWVudHNUb1Ntb290aCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9XG59XG4iXSwibmFtZXMiOlsiQW5pbWFTY3JvbGwiLCJTbW9vdGhTY3JvbGwiLCJNZW51SGFtYnVyZ2VyIiwiYW5pbWFTY3JvbGwiLCJpbml0Iiwic21vb3RoU2Nyb2xsIiwibWVudUhhbWJ1cmdlciIsImVsZW1lbnREb20iLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbGVtZW50c1RvQW5pbWF0aW9uIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJkdFNldCIsImRhdGFzZXQiLCJlbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJ3aW5kb3dUb3AiLCJpbm5lckhlaWdodCIsInNjcm9sbCIsImNsYXNzTGlzdCIsImFkZCIsImJpbmQiLCJldmVudEJpbmQiLCJldmVudFNjcm9sbCIsImVsZW1lbnRET00iLCJxdWVyeVNlbGVjdG9yIiwiYWN0aXZlTWVudSIsIm1lbnUiLCJ0b2dnbGUiLCJhY3Rpb25NZW51IiwiaGFuZGxlVG91Y2giLCJjbG9zZUhhbWJ1cmdlciIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0Iiwic2VjdGlvbnMiLCJkdFNtb290aCIsImN1cnJlbnRUYXJnZXQiLCJzbW9vdGgiLCJjbG9zZU1lbnVNb2JpbGUiLCJzZWMiLCJpZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsImNsaWNrRXZlbnQiLCJlbGVtZW50c1RvU21vb3RoIl0sInNvdXJjZVJvb3QiOiIifQ==