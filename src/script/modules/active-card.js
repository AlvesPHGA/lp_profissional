export default class ActiveCard {
   constructor(elementDOM) {
      this.cards = document.querySelectorAll(elementDOM);
   }

   toggleCard(card) {
      card.classList.add('is--active__card');
   }

   handleTouch() {
      this.cards.forEach((card) =>
         card.addEventListener('touchstart', this.toggleCard),
      );
   }

   eventBind() {
      this.toggleCard = this.toggleCard.bind(this);
   }

   init() {
      this.eventBind();
      this.handleTouch();
      return this;
   }
}
