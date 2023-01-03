export default class Modal {
   constructor(elementDOM) {
      this.elementDOM = document.querySelectorAll(elementDOM);
      this.closeModal = document.querySelector('.modal__close');
   }

   contentModal(element) {
      element.path.forEach((el) => {});
   }

   actionModal() {
      const modal = document.querySelector('.modal');
      modal.classList.toggle('is--active__modal');
   }

   handleClick() {
      this.elementDOM.forEach((element) => {
         element.addEventListener('click', (el) => {
            this.actionModal();
            this.contentModal(el);
         });
      });

      this.closeModal.addEventListener('click', this.actionModal);
   }

   eventBind() {
      this.actionModal = this.actionModal.bind();
      this.contentModal = this.contentModal.bind();
   }

   init() {
      this.eventBind();
      this.handleClick();
      return this;
   }
}
