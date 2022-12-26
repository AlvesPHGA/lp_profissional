export default class SmoothScroll {
   constructor(elementDom) {
      this.elementDom = document.querySelectorAll(elementDom);
   }

   clickEvent(element) {
      element.preventDefault();
      console.log(element.currentTarget);
   }

   elementsToSmooth() {
      this.elementDom.forEach((element) =>
         element.addEventListener('click', this.clickEvent),
      );
   }

   init() {
      this.elementsToSmooth();
      return this;
   }
}
