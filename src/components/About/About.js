import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.scss';

const About = () => (
  <div className={styles.About}>
    <div class="aboutText">
    <h1>Revell – far more than simply synonymous with plastic model kits</h1>
    <p class="aboutPar">For almost 60 years now Revell has stood for unique expertise in the development and making of true-to-the-original plastic model kits. Today, Revell is not only the market leader in Germany but also throughout Europe. Furthermore, in recent years the company has emerged as one of the leading suppliers of remote-controlled products on the toy market. </p>
    <p class="aboutPar">Revell’s wealth of experience accumulated over decades has made the brand synonymous with a fascinating and multi-facetted world of modelling. The Revell product range is capable of fulfilling the dreams of each and every modeller. Whether young or old, professional or beginner – here everyone can pursue their passion and make dreams come true. </p>
    <p class="aboutPar">Discover Revell and let our world of products inspire you!</p>
    <h1 class="compilance">Compliance - Code of Conduct</h1>
    <p class="aboutPar">Respectful and cooperative cooperation and the conscious perception of social responsibility form the basis for our long-term corporate success. </p>
    <p class="aboutPar">The Code of Conduct describes the most important principles and rules of conduct that Revell GmbH and its employees follow.</p>
    <a href="https://content.revell.de/downloads/compliance/code_of_conduct_signed.pdf" target="_blank">» Download&nbsp;Code of conduct (english)</a>
    </div>
    </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
