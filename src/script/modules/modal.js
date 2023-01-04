export default class Modal {
   constructor(elementDOM) {
      this.elementDOM = document.querySelectorAll(elementDOM);
      this.closeModal = document.querySelector('.modal__close');
   }

   getFetchData() {
      const lcl = window.location.href;
      fetch(`./projects-front-end.json`).then((res) =>
         res.json().then((data) => console.log(data)),
      );
   }

   contentModal(element) {
      const titleCard = element.srcElement.innerText;
      const modal = document.querySelector('.modal__image');

      modal.innerHTML = `<h1>${titleCard}</h1>`;

      // if (titleCard === 'TODO') console.log(titleCard);
      // if (titleCard === 'Motor Race') console.log(titleCard);
   }

   templateModal(item) {
      console.log(item);
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
      this.getFetchData();
      this.handleClick();
      return this;
   }
}
