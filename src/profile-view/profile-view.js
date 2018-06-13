import {PolymerElement, html} from '@polymer/polymer/polymer-element.js'


class ProfileView extends PolymerElement {
  static get template() {
    return html`
      <style>

      :host {
          display: flex;
          flex-direction: column;
          height: 100%;
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        flex: 1 1;
        align-items: center;
      }

      .wrapper > * {
        min-width: 300px;
      }
      </style>

      <div class="wrapper">
        <h1>Hello, [[lname]]<span hidden$="[[!fname]]">, [[fname]]</span></h1>
        <p hidden$="[[!timestamp]]">Your profile was updated <polymer-relative-time timestamp="[[timestamp]]"></polymer-relative-time></p>
      </div>
    `;
  }

  static get properties() {
    return {
      fname: {
        type: String
      },
      lname: String,
      timestamp: Number
    }
  }

  constructor() {
    super();


  }
}
