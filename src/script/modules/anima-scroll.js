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
         let windowTop = window.innerHeight;

         if (dtSet.scroll === 'title' && el < windowTop * 0.85)
            element.classList.add('anima-title');

         if (dtSet.scroll === 'card' && el < windowTop * 0.9)
            element.classList.add('anima-card');
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
