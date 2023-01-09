export default class ScreenWindow {
   constructor(elementDOM) {
      this.elementDOM = document.querySelector(elementDOM);
   }

   screen() {
      const windowWidth = this.elementDOM.clientWidth;

      if (windowWidth < 770) this.elementDOM.classList.add('not--laptop');
   }

   init() {
      this.screen();
      return this;
   }
}
