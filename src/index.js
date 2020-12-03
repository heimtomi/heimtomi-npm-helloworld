class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('The component is connected!');

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }

    const mySpan = document.createElement('span');
    mySpan.textContent = 'Hello World!';

    this.shadowRoot.appendChild(mySpan);
  }

  disconnectedCallback() {
    console.log('The component is disconnected!');
  }
}

customElements.define('heimtomi-npm-helloworld', HelloWorld);