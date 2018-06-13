import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-pages/iron-pages.js';
import '../update-view/update-view.js';
import '../profile-view/profile-view.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';

/**
 * @customElement
 * @polymer
 */
class HeyYou extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-header {
        color: #fff;
        background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: white;
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        text-decoration: none;
        color: var(--app-secondary-color);
        line-height: 40px;
      }

      .drawer-list a.iron-selected {
        color: black;
        font-weight: bold;
      }

      #content {
        height: calc(100vh - 64px)
      }
      </style>

      <app-location route={{route}}></app-location>
      <app-route
          route="{{route}}"
          pattern="/:page"
          data="{{data}}"
          tail="{{tail}}">
      </app-route>

      <app-drawer-layout>
        <app-drawer slot="drawer">
          drawer-content
        </app-drawer>
        <app-header-layout>

          <app-header reveals>
            <app-toolbar>
              <paper-icon-button icon="menu"  drawer-toggle></paper-icon-button>
              <div main-title>{{prop1}}</div>
              <paper-icon-button icon="delete"></paper-icon-button>
              <paper-icon-button icon="search"></paper-icon-button>
              <paper-icon-button icon="close"></paper-icon-button>
              <paper-progress value="10" indeterminate bottom-item></paper-progress>
            </app-toolbar>
          </app-header>

          <div id="content">
            <iron-pages selected="[[page]]" attr-for-selected="name">
              <update-view name="update"></update-view>
              <profile-view name="profile"></profile-view>
            </iron-pages>
          </div>

        </app-header-layout>
      </app-drawer-layout>
          `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'hey-you'
      },
      page: {
        type: String,
        value:'update'
      },
      data: Object
    };
  }

  static get observers() {
    return [
      '_observeRouteData(data.page)'
    ]
  }

  _observeRouteData(page) {
    if(['update','profile'].indexOf(page)>-1)
      this.set('page', page)
    else this.set('page', 'update')
  }
}

window.customElements.define('hey-you', HeyYou);
