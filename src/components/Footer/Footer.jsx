import React, { Component } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";
import Logo from "../Logo/Logo"
import "./Footer.css";
import CtaFooter from "./CtaFooter"

class Footer extends Component {

    render() {
        const url = config.siteRss;
        const { copyright } = config;
        if (!copyright) {
            return null;
        }
        return (
            <>
                <CtaFooter />
                <footer className="footer footer-dark">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-vcentered">
                                <div className="footer-logo">
                                    <Logo addClassNames='is-inverted for-footer' />
                                </div>
                            </div>
                            <div className="column">
                                <div className="footer-column">
                                    <div className="footer-header">
                                        <h3>Help and Support</h3>
                                    </div>
                                    <ul className="link-list">
                                        <li><a href="/docs" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                                        <li><a href="https://spectrum.chat" target="_blank" rel="noopener noreferrer">Discussions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="column">
                                <div className="footer-column">
                                    <div className="footer-header">
                                        <h3>Elsewhere</h3>
                                    </div>
                                    <ul className="link-list">
                                        <li><a href="https://github.com/botfront" target="_blank" rel="noopener noreferrer"><FaGithub/> Github</a></li>
                                        <li><a href="https://twitter.com/botfront" target="_blank" rel="noopener noreferrer"><FaTwitter/> @botfront</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="column">
                                <div className="footer-column">
                                    <div className="footer-header">
                                        <h3>About Botfront</h3>
                                    </div>
                                    <ul className="link-list">
                                        <li><a href="https://angel.co/company/mrbot/jobs" target="_blank">Jobs</a></li>
                                        <li><Link to='/contact'>Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="column">
                                <div className="footer-column">

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
    }

export default Footer;
