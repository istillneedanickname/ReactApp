import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import styles from "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return(
    <div className={styles.PrivacyPolicy}>
      <div class="allText">
      <h2>Privacy Policy</h2>
      <h3 class="headers">1. An overview of data protection</h3>
       <h4 class="wide">General information</h4>
        <div class="divs">The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit our website. The term “personal data” comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.</div>
      <h4 class="wide">Data recording on our website</h4>
      <h5 class="wide">Who is the responsible party for the recording of data on this website (i.e. the “controller”)?</h5>
        <div class="divs">The data on this website is processed by the operator of the website, whose contact information is available under section “Information Required by Law” on this website.</div>
      <h5 class="wide">How do we record your data?</h5>
        <div class="divs">We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.

Our IT systems automatically record other data when you visit our website. This data comprises primarily technical information (e.g. web browser, operating system or time the site was accessed). This information is recorded automatically when you access our website.</div>
      <h5 class="wide">What are the purposes we use your data for?</h5>
        <div class="divs">A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyse your user patterns.</div>
      <h5 class="wide">What rights do you have as far as your information is concerned?</h5>
        <div class="divs">You have the right to receive information about the source, recipients and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified, blocked or eradicated. Please do not hesitate to contact us at any time under the address disclosed in section “Information Required by Law” on this website if you have questions about this or any other data protection related issues. You also have the right to log a complaint with the competent supervising agency.

Moreover, under certain circumstances, you have the right to demand the restriction of the processing of your personal data. For details, please consult the Data Protection Declaration under section “Right to Restriction of Data Processing.”</div>
      <h4 class="wide">Analysis tools and tools provided by third parties</h4>
        <div class="divs">There is a possibility that your browsing patterns will be statistically analysed when your visit our website. Such analyses are performed primarily with cookies and with what we refer to as analysis programmes. As a rule, the analyses of your browsing patterns are conducted anonymously; i.e. the browsing patterns cannot be traced back to you. You have the option to object to such analyses or you can prevent their performance by not using certain tools. For detailed information about this, please consult our Data Protection Declaration below.

You do have the option to object to such analyses. We will brief you on the objection options in this Data Protection Declaration.</div>
      <h3 class="headers">2. General information and mandatory information</h3>
      <h3 class="headers">3. Data protection officer</h3>
      </div>

    </div>
  )
}

PrivacyPolicy.propTypes = {};

PrivacyPolicy.defaultProps = {};

export default PrivacyPolicy;