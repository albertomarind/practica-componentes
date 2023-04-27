const templateListCards = document.createElement('template');
templateListCards.innerHTML = `
  <style>
    .list-cards{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    app-movie-card{
        display: inline-block;
        border:4px solid green;
    }
  </style>
  <div class="list-cards">
        <app-movie-card title="Megan" description="Pelicula de megan" image="https://i.ytimg.com/vi_webp/CjzN5dmx1o0/movieposter_es-419.webp"></app-movie-card>
        <app-movie-card title="El gato con botas" description="Pelicula del gato con botas" image="https://i.ytimg.com/vi_webp/tjXCifwujI0/movieposter_es.webp"></app-movie-card>
  </div>
  
<!--  <app-header></app-header>-->
<!--  <app-sidebar></app-sidebar>-->
<!--  <app-content></app-content>-->
<!--  <app-footer></app-footer>-->
`;

class ListCards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(templateListCards.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot.addEventListener('movie-card-selected', (e) => {
      alert(e.detail.name);
    })
  }
}

customElements.define('app-list-cards', ListCards);
