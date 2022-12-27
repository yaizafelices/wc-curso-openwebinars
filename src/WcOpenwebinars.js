import { html, css, LitElement } from 'lit';

export class WcOpenwebinars extends LitElement {
  static get styles() {
    return css`
      :host {

      }
    `;
  }

  static get properties() {
    return {

    };
  }

  constructor() {
    super();
    this.title = 'Hola Openwebinars';
    this.other = 'Web component';
    this.list = ['Lit', 'OpenWC', 'LitHtml'];
    this.isTrue = true;
    this.age = 18;

  }


  render() {
    return html`
      <h1>${this.title}</h1>
      <p>Esto es un ${this.other}</p>
      <ul>
        ${this.list.map((item)=> html `<li>${item}</li>`)}
      </ul>
      ${this.isTrue
        ? html `<p>Es cierto</p>`
        : html `<p>Es falso</p>`
      }
      ${this.age >= 18
        ? html `<p>Es mayor de edad</p>`
        : html `<p>Es menor de edad</p>`
      }

    `;
  }
}
