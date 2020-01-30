import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const NpmCta = props => {

  const [copied, setCopied] = useState(false);
  const processCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  }
  return (

      
    <CopyToClipboard onCopy={processCopy} text='npm install -g botfront'>
        <div className='button npm-cta'>
            <span className="prompt">$&nbsp;</span>
            {' '}
            npm install -g botfront
            {copied
            ?
            <>&nbsp;<span className="tag is-success is-hidden-mobile">copied!</span></>
            :
            <>&nbsp;<span className="tag is-link is-hidden-mobile">copy</span></>}
        </div>
    </CopyToClipboard>
  );
};

export default NpmCta;

/* eslint no-undef: "off" */
