import { html, css, LitElement } from 'lit';
import {styles} from './styles.js'

function renderMessage(message = 'Valor default'){
  return html `<p>${message}</p>`
}


export class WcOpenwebinars extends LitElement {
  static get styles() {
    return [styles,
      css`
      :host{
        display: flex;
      }
      h1 {
        color: red;
      }
      p{
        color: var(--p-color, orange);
      }
      ::slotted(a){
        text-decoration:none;
      }
    `]
  }

  static get properties() {
    return {
      title: {type : String, reflect:true, attribute:false},
      age: {type : Number},
      pagination: {reflect:true, converter:{
        toAttribute(value){
          return value ? 'yes': 'no';
        },
        fromAttribute(value){
          return value === 'yes';
        }
      }}
    };
  }

  constructor() {
    super();
    this.title = 'Hola Openwebinars';
    this.other = 'Web component';
    this.list = ['Lit', 'OpenWC', 'LitHtml'];
    this.isTrue = true;
    this.age = 18;
    this.pagination = true;

  }


  render() {
    return html`
      <h1 @click=${this.handleClick}>${this.title}</h1>
      <p> Edad: ${this.age}</p>
      <p> Pagination: ${this.pagination}</p>
      <p>Esto es un ${this.other}</p>
      <slot name='myslot-one'></slot>
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
      <slot name='myslot-two'></slot>
      ${renderMessage('Composición de templates')}
      <input type='text' @input=${(value)=> console.log(value)}>
    `;
  }

  handleClick() {
    const event = new CustomEvent('my-event', {
      detail:{
        message:'Esto es el mensaje de un CustomEvent'
      },
      bubble: true,
      composed:true,
    });

    this.dispatchEvent(event);
  }
}
