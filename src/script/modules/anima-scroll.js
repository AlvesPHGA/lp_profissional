export default class AnimaScroll {
   constructor(elementDom) {
      this.elements = document.querySelectorAll(elementDom);
   }

   elementsTitle() {
      this.elements.forEach((elItem) => console.log(elItem));
   }

   init() {
      this.elementsTitle();
   }
}
