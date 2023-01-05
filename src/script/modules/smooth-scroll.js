export default class SmoothScroll {
   constructor(elementDom) {
      this.elementDom = document.querySelectorAll(elementDom);
   }

   closeMenuMobile() {
      const closeHamburger = document.querySelector('.menu__slice');
      const menu = document.querySelector('.menu');

      closeHamburger.classList.remove('is--active__menu');
      menu.classList.remove('is--active__menu');
   }

   clickEvent(element) {
      element.preventDefault();

      const sections = document.querySelectorAll('section');
      const dtSmooth = element.currentTarget.dataset.smooth;

      this.closeMenuMobile();

      sections.forEach((sec) => {
         const id = sec.id;

         if (dtSmooth === id)
            sec.scrollIntoView({
               block: 'start',
               behavior: 'smooth',
            });
      });
   }

   elementsToSmooth() {
      this.elementDom.forEach((element) =>
         element.addEventListener('click', this.clickEvent),
      );
   }

   eventBind() {
      this.clickEvent = this.clickEvent.bind(this);
   }

   init() {
      this.eventBind();
      this.elementsToSmooth();
      return this;
   }
}
