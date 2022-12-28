import { html, LitElement } from "lit";

export class MyMessage extends LitElement{
    render(){
        return html `
          <p>Mi mensaje</p>
        `;
    }
}

customElements.define('my-message', MyMessage);