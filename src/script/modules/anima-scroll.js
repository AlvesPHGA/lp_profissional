export default class AnimaScroll {
   constructor(elementDom) {
      this.elements = document.querySelectorAll(elementDom);
   }

   eventScroll() {
      window.addEventListener('scroll', this.elementsToAnimation);
   }

   elementsToAnimation() {
      this.elements.forEach((element) => {
         let dtSet = element.dataset;
         let el = element.getBoundingClientRect().y;
         let windowTop = window.innerHeight * 0.85;

         if (dtSet.scroll === 'title' && el < windowTop)
            element.classList.add('__active-anima');
      });
   }

   eventBind() {
      this.elementsToAnimation = this.elementsToAnimation.bind(this);
   }

   init() {
      this.eventBind();
      this.eventScroll();
      return this;
   }
}
