import React, { useState } from "react";
import { Link } from "gatsby";
import { FaGithub } from "react-icons/fa";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";
import Logo from "../Logo/Logo";

const Navbar = props => {
  const url = config.siteUrl;
  const { copyright } = config;
  const [isActive, setIsActive] = useState(false);

  if (!copyright) {
    return null;
  }
  return (
    <nav className="navbar is-fresh is-transparent no-shadow" role="navigation" aria-label="main navigation">
        <div className="container">
    <div className="navbar-brand">
        <Link to={'/'}>
        <Logo />
        </Link>

        <a role="button" className={`navbar-burger ${isActive && 'is-active'}`} aria-label="menu" aria-expanded="false" data-target="navbar-menu" onClick={() => setIsActive(!isActive)}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        </a>
    </div>

    <div id="navbar-menu" className={`navbar-menu is-static ${isActive && 'is-active'}`}>
        <div className="navbar-end">
            <a href="/docs/getting-started/setup" className="navbar-item is-secondary">
                Documentation
            </a>
            <Link to="/blog" className="navbar-item is-secondary">
                Blog
            </Link>
            <Link to="/contact" className="navbar-item is-secondary">
                Contact us
            </Link>
            <a href="https://github.com/botfront" rel="noopener noreferrer" target="_blank" className="navbar-item is-secondary">
                <FaGithub/> &nbsp;Github
            </a>
        </div>
    </div>
    </div>
    </nav>
    );
};

export default Navbar;
