import {PolymerElement, html} from '@polymer/polymer/polymer-element.js'
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js'
import 'polymer-relative-time';



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

      polymer-relative-time {
        display: inline;
      }
      </style>

      <div class="wrapper">
        <h1><span style="font-weight: 100;">Hello</span> [[lname]]<span hidden$="[[!fname]]">, [[fname]]</span></h1>
        <p hidden$="[[!timestamp]]">Your profile was updated <polymer-relative-time timestamp="[[timestamp]]"></polymer-relative-time></p>
      </div>

      <app-localstorage-document key='fname' data="{{fname}}"></app-localstorage-document>
      <app-localstorage-document key='lname' data="{{lname}}"></app-localstorage-document>
      <app-localstorage-document key='timestamp' data="{{timestamp}}"></app-localstorage-document>
    `;
  }

}

customElements.define('profile-view', ProfileView);
