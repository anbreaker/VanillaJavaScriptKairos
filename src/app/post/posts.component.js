export class PostsComponent extends HTMLElement {
  constructor() {
    super();
    console.log('Post Component initial...');
    this.hello = 'Hello World';
    // this.innerHTML = `<p>${this.hello}</p> `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<p>${this.hello}</p> `;
  }
}

customElements.define('genk-posts', PostsComponent);
