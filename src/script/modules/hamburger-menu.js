export default class MenuHamburger {
   constructor(elementDOM) {
      this.elementDOM = document.querySelector(elementDOM);
   }

   actionMenu() {
      const activeMenu = document.querySelector('.menu__slice');
      const menu = document.querySelector('.menu');

      activeMenu.classList.toggle('is--active__menu');
      menu.classList.toggle('is--active__menu');
   }

   handleTouch() {
      this.elementDOM.addEventListener('click', this.actionMenu);
   }

   eventBind() {
      this.actionMenu = this.actionMenu.bind(this);
   }

   init() {
      this.eventBind();
      this.handleTouch();
      return this;
   }
}
