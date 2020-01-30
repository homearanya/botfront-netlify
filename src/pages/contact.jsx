import React, { useEffect } from "react";
import Helmet from "react-helmet";
import "../scss/styles.scss";
import Footer from "../components/Footer/Footer"
import Navbar from '../components/Navbar/Navbar';
import SEO from '../components/SEO/SEO';

const Contact = (props) => {

    useEffect(() => {
      // code that will run on mount
    }, []);

    return (
      <>
        <Helmet>
          <title>Botfront - Contact us</title>
        </Helmet>
        <SEO />
        <Navbar />
        <section className="section section-light-grey is-medium contact-section">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2 is-spaced">Need help with Botfront?</h2>
              <div className="divider is-centered" />
            </div>
            <div className="content-wrapper">
              <div className="columns">
                <div className="column is-4 is-offset-2">
                  <h2>Have questions about:</h2>
                  <ul>
                    <li>
                        Hosting
                    </li>
                    <li>
                        Training
                    </li>
                    <li>
                        Paid support
                    </li>
                  </ul>
                  <br />
                  <p>
                    For community support or installation questions, please use our
                    {' '}
                    <a href="https://spectrum.chat/botfront">Spectrum community</a>
                  </p>
                </div>
                <div className="column is-4">

                  <h2>Get in touch:</h2>
                  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" required />
                    <input className="input" name="name" type="text" placeholder="Your full name" required />
                    <input className="input" name="email" type="email" placeholder="Your email address" required />
                    <input className="input" name="company" type="text" placeholder="Your company name" required />
                    <input className="input" name="company-website" type="text" placeholder="Your company website" required />
                    <div className="select">
                      <select name="service" required>
                        <option value="">Select a service</option>
                        <option value="Paid support">Paid support</option>
                        <option value="Hosting">Hosting</option>
                        <option value="Training">Training</option>
                        <option value="Professional services">Professional services</option>
                        <option value="Something else">Something else</option>
                      </select>
                    </div>
                    <textarea name="message" className="textarea" placeholder="Give us a few more details about your needs" required />
                    <input className="button" type="submit" value="Send" />
                  </form>
                </div>
                <div className="column is-2" />
              </div>
            </div>
          </div>
        </section>



        <Footer {...props} />
      </>
    )
}
export default Contact