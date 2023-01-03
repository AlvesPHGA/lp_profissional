export default class Modal {
   constructor(elementDOM) {
      this.elementDOM = document.querySelectorAll(elementDOM);
   }

   actionModal(element) {
      const modal = document.querySelector('.modal');

      modal.classList.toggle('is--active__modal');
      console.log(element.currentTarget);
   }

   handleClick() {
      const close = document.querySelector('.modal__close');

      this.elementDOM.forEach((element) => {
         element.addEventListener('click', this.actionModal);
      });

      close.addEventListener('click', this.actionModal);
   }

   eventBind() {
      this.actionModal = this.actionModal.bind();
   }

   init() {
      this.eventBind();
      this.handleClick();
      return this;
   }
}
