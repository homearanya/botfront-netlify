import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";
import Logo from "../Logo/Logo";

class NavbarClone extends Component {

  render() {
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <nav id="navbar-clone" className="navbar is-fresh is-transparent" role="navigation" aria-label="main navigation">
  <div className="container">
      <div className="navbar-brand">
          <a className="navbar-item" href="https://cssninja.io">
              <img src="assets/images/logos/fresh-alt.svg" alt="" width="112" height="28" />
            </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="cloned-navbar-menu">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
        </div>

      <div id="cloned-navbar-menu" className="navbar-menu is-fixed">

          <div className="navbar-end">
              <a href="#" className="navbar-item is-secondary">
                    Features
                </a>
              <a href="#" className="navbar-item is-secondary">
                    Pricing
                </a>
              <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                        Dropdown
                    </a>

                  <div className="navbar-dropdown">
                      <a className="navbar-item">
                            Dropdown item
                        </a>
                      <a className="navbar-item">
                            Dropdown item
                        </a>
                      <a className="navbar-item">
                            Dropdown item
                        </a>
                    </div>
                </div>
              <a href="#" className="navbar-item is-secondary modal-trigger" data-modal="auth-modal">
                    Log in
                </a>
              <a className="navbar-item">
                  <span className="button signup-button rounded secondary-btn raised">
                        Sign up
                    </span>
                </a>
            </div>
        </div>
    </div>
</nav>

    );
  }
}

export default NavbarClone;
