import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-fab/paper-fab.js';


class UpdateView extends PolymerElement {
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

      .info {
        align-self: center;
      }

      paper-fab {
        position: fixed;
        bottom: 40px;
        right: 40px;
      }
      </style>
      <div class="wrapper">
        <paper-input label='First name' id='fname' value='{{fname}}'></paper-input>
        <paper-input label='Last name' id='lname' value='{{lname}}'></paper-input>

      </div>
      <div class="info" hidden$='[[!fullName]]'>
        Hi [[fullName]], Nice to meet ya.
      </div>


      <paper-fab icon="save" on-click='saveToLS'></paper-fab>
    `;
  }

  static get properties() {
    return{
      fname: {
        type: String
      },
      lname: {
        type: String
      },
      fullName: {
        type: String,
        computed: '_computeFullName(fname, lname)'
      }
    }
  }

  _computeFullName(f,l) {
    return f + (l?' ' + l: '');
  }

  saveToLS(e) {
    localStorage.setItem('fname', "\""+this.fname+"\"");
    localStorage.setItem('lname', "\""+this.lname+"\"");
    localStorage.setItem('timestamp', Date.now());
  }
}

customElements.define('update-view', UpdateView);
