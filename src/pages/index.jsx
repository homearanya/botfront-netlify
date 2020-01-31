import React, { useState } from 'react';
import Helmet from "react-helmet";
import '../scss/styles.scss';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SEO from '../components/SEO/SEO';
import NpmCta from '../components/Cta/NpmCta';

const IndexPage = props => {

  const [copied, setCopied] = useState(false);
  const processCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <>
      <Helmet>
        <title>Botfront - Visual Conversational AI </title>
      </Helmet>
      <div className='home'>
        <section className='hero is-fullheight is-default is-bold'>
          <SEO />
          <Navbar addClassNames='is-inverted' />
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title is-1 is-bold is-spaced'>
                  &nbsp;Build bots in any language&nbsp;
                  <br />
                  &nbsp;with natural language&nbsp;
              </h1>

              <h2 className='subtitle is-5'>
                Botfront is a
                {' '}
                <span className='is-bold'>free</span>
                {' '}
                and
                {' '}
                <span className='is-bold'>open source</span>
                {' '}
                chatbot platform built on top of the
                {' '}
                <span className='is-bold'>Rasa</span>
                {' '}
                library.
              </h2>
              <NpmCta />
              <br />
              <br />
              <div className="columns is-centered ">
                <div className="column is-three-quarters-widescreen">
                  <video controls autoPlay muted loop poster="/videos/intro_botfront.png">
                    <source src="/videos/intro_botfront.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className='hero-foot mb-20'>
            <div className='container clients-logo'>
              <div className='columns is-centered is-vcentered has-text-centered'>
                <div className='column'>
                  <img
                    className='partner-logo'
                    src='images/logos/clients/logo-accor.png'
                    alt='Accor logo'
                  />
                </div>
                <div className='column'>
                  <img
                    className='partner-logo valtech'
                    src='images/logos/clients/logo-valtech.png'
                    alt='Valtech logo'
                  />
                </div>
                <div className='column'>
                  <img
                    className='partner-logo'
                    src='images/logos/clients/logo-yp.png'
                    alt='Yellow Pages logo'
                  />
                </div>
                <div className='column '>
                  <img
                    className='partner-logo'
                    src='images/logos/clients/logo-orange.png'
                    alt='Orange logo'
                  />
                </div>
                <div className='column'>
                  <img
                    className='partner-logo'
                    src='images/logos/clients/logo-decathlon.png'
                    alt='Decathlon logo'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section section-feature-grey'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-centered-tablet-portrait is-two-fifths mt-20'>
                <h2 className='title section-title'>
                  Design and implement conversations at once
                </h2>
                <h4 className='subtitle'>
                Our unique interface lets you design conversation flows, kickstart NLU models and create bot responses in a single step.
                </h4>
              </div>
              <div className='column is-three-fifths'>
                <img
                  src='images/illustrations/conversational_design_with_botfront.png'
                  className='is-pulled-right feature-image'
                  alt="Design and implement Rasa story with this Rasa UI"
                />
              </div>
            </div>
          </div>
        </section>
        <section className='section section-feature'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-three-fifths'>
                <img
                  src='images/illustrations/rasa_integration.png'
                  className='rasa-integration-illustration feature-image'
                  alt="Design and implement Rasa story with this Rasa UI"
                />
              </div>
              <div className='column is-centered-tablet-portrait is-two-fifths'>
                <h2 className='title section-title'>
                    Best in class
                  {' '}
                  <span className='highlight'>Rasa</span>
                  {' '}
                    integration
                </h2>
                <h4 className='subtitle'>
                  Botfront is fully integrated with Rasa. You can use Botfront as a platform
                  to deploy your agents, or simply as an editor
                  and export your files to an existing Rasa
                  installation
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section className='section section-feature-grey'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-centered-tablet-portrait is-two-fifths mt-20'>
                <h2 className='title section-title'>
                              Free and easy to set up.
                </h2>
                <h4 className='subtitle'>
                    Start out simple and run Botfront on your own
                    laptop, or set it up on your
                    own servers.
                </h4>
                <br />
                <a
                  className='button cta rounded raised'
                  href='/docs/getting-started/setup/'
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  Setup guide
                </a>
              </div>
              <div className='column is-three-fifths'>
                <img
                  src='images/illustrations/botfront_rasa_easy_setup.png'
                  className='is-pulled-right feature-image'
                  alt="Design and implement Rasa story with this Rasa UI"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer {...props} />
      </div>
    </>
  );
};

export default IndexPage;

/* eslint no-undef: "off" */
