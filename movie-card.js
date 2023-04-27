const templateCard = document.createElement('template');
templateCard.innerHTML = `
  <style>
    .movie-card{
        width: 320px;
        margin:5px;
        border:1px solid black;
    }
    .movie-card__image{
        width: 100%;
    }
    .movie-card__title{
        font-size: 20px;
        font-weight: 600;
    }
    .movie-card__description{
        font-size: 18px;
    }
  </style>
  <div class="movie-card">
      <img class="movie-card__image">
      <h3 class="movie-card__title"></h3>
      <p class="movie-card__description"></p>
   </div>
`;

class MovieCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(templateCard.content.cloneNode(true))
  }

  // handleEvent(event) {
  //   if (event.type === "click") {
  //     const messageEvent = new CustomEvent("movie-card-selected", {
  //       detail: {name: this.getAttribute('title')},
  //       bubbles: true,
  //       composed: true
  //     });
  //     this.dispatchEvent(messageEvent);
  //   }
  // }

  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
    this.shadowRoot.querySelector('.movie-card').addEventListener('click', () => {
      const messageEvent = new CustomEvent("movie-card-selected", {
        detail: {name: this.getAttribute('title')},
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(messageEvent);
    });
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  static get observedAttributes() {
    return ['title', 'description', 'image'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.shadowRoot.querySelector(".movie-card__title").textContent = newValue;
    }
    if (name === "description") {
      this.shadowRoot.querySelector(".movie-card__description").textContent = newValue;
    }
    if (name === "image") {
      this.shadowRoot.querySelector(".movie-card__image").setAttribute("src", newValue);
    }
  }

}

window.customElements.define("app-movie-card", MovieCard);
