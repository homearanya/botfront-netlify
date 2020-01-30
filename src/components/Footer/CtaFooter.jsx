import React, { Component } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import NpmCta from '../Cta/NpmCta';
import "./Footer.css";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
        <footer className="footer cta-footer">
            <section className="section">
                <div className='columns is-centered'>
                    <div className='column has-text-centered'>
                        <h1 className='title is-dark'>
                            Build your next virtual assistant with Botfront
                        </h1>
                        <NpmCta />
                        <div className="read-the-docs">
                        Or read the <a href="//botfront.io/docs" target="_blank">documentation</a>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
  }
}

export default Footer;
