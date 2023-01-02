export default class Modal {
   constructor(elementDOM) {
      this.elementDOM = document.querySelectorAll(elementDOM);
   }

   openModal(element) {
      const modal = document.querySelector('.modal');

      modal.classList.add('is--active__modal');
      console.log(element.currentTarget);
   }

   handleClick() {
      this.elementDOM.forEach((element) => {
         element.addEventListener('click', this.openModal);
      });
   }

   eventBind() {
      this.openModal = this.openModal.bind();
   }

   init() {
      this.eventBind();
      this.handleClick();
      return this;
   }
}
