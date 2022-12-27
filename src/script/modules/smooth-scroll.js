export default class SmoothScroll {
   constructor(elementDom) {
      this.elementDom = document.querySelectorAll(elementDom);
   }

   clickEvent(element) {
      element.preventDefault();

      const sections = document.querySelectorAll('section');
      const dtSmooth = element.currentTarget.dataset.smooth;

      sections.forEach((sec) => {
         const id = sec.id;

         if (dtSmooth === id)
            sec.scrollIntoView({
               block: 'center',
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
