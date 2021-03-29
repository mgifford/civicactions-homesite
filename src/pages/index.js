import "../sass/styles.scss";
import React, { useEffect, useRef } from "react";
import Card from "../components/card.js";
import PrimaryPageCTA from "../components/primary-page-cta.js";
import homeIntroGraphic from "../files/images/home-intro-graphic.png";
import homeTeamImage from "../files/images/home-team-img.png";
import quotePatternGraphic from "../files/images/quote-pattern-graphic.png";
import clientLogo1 from "../files/images/client-logos/client-logo-1.png";
import clientLogo2 from "../files/images/client-logos/client-logo-2.png";
import clientLogo3 from "../files/images/client-logos/client-logo-3.png";
import clientLogo4 from "../files/images/client-logos/client-logo-4.png";
import clientLogo5 from "../files/images/client-logos/client-logo-5.png";
import clientLogo6 from "../files/images/client-logos/client-logo-6.png";
import clientLogo7 from "../files/images/client-logos/client-logo-7.png";
import clientLogo8 from "../files/images/client-logos/client-logo-8.png";
import clientLogo9 from "../files/images/client-logos/client-logo-9.png";
import clientLogo10 from "../files/images/client-logos/client-logo-10.png";
import clientLogo11 from "../files/images/client-logos/client-logo-11.png";
import clientLogo12 from "../files/images/client-logos/client-logo-12.png";
import clientLogo13 from "../files/images/client-logos/client-logo-13.png";
import clientLogo14 from "../files/images/client-logos/client-logo-14.png";
import clientLogo15 from "../files/images/client-logos/client-logo-15.png";
import clientLogo16 from "../files/images/client-logos/client-logo-16.png";
import clientLogo17 from "../files/images/client-logos/client-logo-17.png";
import clientLogo18 from "../files/images/client-logos/client-logo-18.png";
import caseStudyTeaserImg1 from "../files/images/case-study-teasers/case-study-teaser-img-1.png";
import caseStudyTeaserImg2 from "../files/images/case-study-teasers/case-study-teaser-img-2.png";
import caseStudyTeaserImg3 from "../files/images/case-study-teasers/case-study-teaser-img-3.png";
import caseStudyTeaserImg4 from "../files/images/case-study-teasers/case-study-teaser-img-4.png";
import caseStudyTeaserImg5 from "../files/images/case-study-teasers/case-study-teaser-img-5.png";
import dataServicesIcon from "../files/icons/data-services-icon.svg";
import itModernizationIcon from "../files/icons/it-modernization-icon.svg";
import productDesignIcon from "../files/icons/product-design-icon.svg";
import securityComplianceIcon from "../files/icons/security-compliance-icon.svg";
import webCmsIcon from "../files/icons/web-cms-icon.svg";
import workforceDevelopmentIcon from "../files/icons/workforce-dev-icon.svg";
import arrowIcon from "../files/icons/arrow-icon.svg";
import GeneralLayout from "../layouts/general";

const HomePage = ({ data }) => {
  return (
    <GeneralLayout>
      <section className="home__hero-section">
        <div className="inner">
          <img src={homeIntroGraphic} alt="Civic Actions Logo"></img>
          <div className="info-text">
            <h2>
              We help government deliver better public services through modern
              technology and design.
            </h2>
            <h6 className="primary-button">SEE OUR WORK</h6>
          </div>
        </div>
      </section>
      <section className="home__clients-section">
        <div className="inner">
          <div class="body-large">
            Strategy, design, technology, consulting, and training services for
            government agencies
          </div>
          <div class="grid">
            <img src={clientLogo1} alt="Client Logo"></img>
            <img src={clientLogo2} alt="Client Logo"></img>
            <img src={clientLogo3} alt="Client Logo"></img>
            <img src={clientLogo4} alt="Client Logo"></img>
            <img src={clientLogo5} alt="Client Logo"></img>
            <img src={clientLogo6} alt="Client Logo"></img>
            <img src={clientLogo7} alt="Client Logo"></img>
            <img src={clientLogo8} alt="Client Logo"></img>
            <img src={clientLogo9} alt="Client Logo"></img>
            <img src={clientLogo10} alt="Client Logo"></img>
            <img src={clientLogo11} alt="Client Logo"></img>
            <img src={clientLogo12} alt="Client Logo"></img>
            <img src={clientLogo13} alt="Client Logo"></img>
            <img src={clientLogo14} alt="Client Logo"></img>
            <img src={clientLogo15} alt="Client Logo"></img>
            <img src={clientLogo16} alt="Client Logo"></img>
            <img src={clientLogo17} alt="Client Logo"></img>
            <img src={clientLogo18} alt="Client Logo"></img>
          </div>
        </div>
      </section>
      <div className="home__services-and-cases-bg">
        <section className="home__services-section">
          <div className="inner">
            <h2>Digital first. Data driven. Human centered.</h2>
            <p className="body-large">
              Bringing government services up to today's standards requires new
              ways of thinking and working.
            </p>
            <p className="body-large">
              We can help you improve how people, process, and technology work
              together at your agency for lasting digital transformation.
            </p>
            <div className="service-cards-grid">
              <Card title="Web & CMS" icon={webCmsIcon} />
              <Card
                title="IT & Service Modernization"
                icon={itModernizationIcon}
              />
              <Card title="Product & Design" icon={productDesignIcon} />
              <Card
                title="Security & Compliance"
                icon={securityComplianceIcon}
              />
              <Card title="Data Services" icon={dataServicesIcon} />
              <Card
                title="Workforce Development"
                icon={workforceDevelopmentIcon}
              />
            </div>
            <div className="primary-button">EXPLORE SERVICES</div>
          </div>
        </section>
        <section className="home__case-studies-section">
          <div className="inner">
            <h2>Resilient agencies. Accessible services. Happier people.</h2>
            <p className="body-large">
              Working for the greater good is in our DNA. From healthcare to
              welfare to education and beyond, we partner with agencies to solve
              hard problems and improve outcomes for government and the public.
            </p>
            <div className="grid">
              <div className="cta">
                <img src={caseStudyTeaserImg1} alt="Client Logo"></img>
                <div className="img-overlay"> </div>
                <div className="info">
                  <h6>CENTERS FOR MEDICARE AND MEDICAID SERVICES</h6>
                  <h4>
                    Improving the online experience for Medicare beneficiaries
                  </h4>
                </div>
              </div>
              <div className="cta">
                <img src={caseStudyTeaserImg2} alt="Client Logo"></img>
                <div className="img-overlay"> </div>
                <div className="info">
                  <h6>US DEPARTMENT OF VETERANS AFFAIRS</h6>
                  <h4>Helping Veterans access care and benefits online</h4>
                </div>
              </div>
              <div className="cta">
                <img src={caseStudyTeaserImg3} alt="Client Logo"></img>
                <div className="img-overlay"> </div>
                <div className="info">
                  <h6>US DEPARTMENT OF EDUCATION</h6>
                  <h4>Supporting and expanding adult education</h4>
                </div>
              </div>
              <div className="view-our-work-cta ">
                <img src={caseStudyTeaserImg3} alt="" className="bg"></img>
                <div className="content">
                  <h3>View more Work</h3>
                  <img src={arrowIcon} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="home__quote-section">
        <div className="inner">
          <img src={quotePatternGraphic} alt=""></img>
          <div className="quote">
            <h4>
              “It was a pleasure to work with the CivicActions team. Their
              experience with government clients and agile processes helped us
              reach our user base sooner than expected with a product that met
              their needs.”
            </h4>
            <div className="body">
              Lisa Berry, Senior GlobalNET Liaison Officer
            </div>
            <div className="body">Defense Security Cooperation Agency</div>
          </div>
        </div>
      </section>
      <section className="home__learn-w-us-section">
        <div className="inner">
          <h2>Learn with us.</h2>
          <div className="body-large">
            Thoughts and takeaways from our work in the field.
          </div>
          <div className="cases">
            <div className="grid-item-1">
              <img src={caseStudyTeaserImg4} alt=""></img>
              <h4>Government customer experience: A practical guide</h4>
              <p className="body">
                How to start bringing CX into the business of government
              </p>
            </div>
            <div className="grid-item-2">
              <img src={caseStudyTeaserImg5} alt=""></img>
              <h4>WhiteHouse.gov: Beginning an accessibility journey</h4>
              <p className="body">
                Praise and recommendations for the new administration
              </p>
            </div>
            <div className="grid-item-3">
              <div className="grid-item-3-1">
                <h4>The role of UX in an agile team</h4>
                <img width="32px" src={arrowIcon} alt=""></img>
              </div>
              <div className="grid-item-3-2">
                <h4>What “fierce openness” can do for government</h4>
                <img width="32px" src={arrowIcon} alt=""></img>
              </div>
            </div>
          </div>
          <div className="primary-button">
            <h6>EXPLORE POSTS & VIDEOS</h6>
          </div>
        </div>
      </section>
      <section className="home__team-section">
        <div className="inner">
          <div className="column">
            <h2>Our people make the difference.</h2>
            <p className="body-large">
              We are leaders in civic tech and design, committed to working in
              ways that make life better for our clients and each other.
            </p>
            <div className="primary-button">
              <h6>MEET OUR TEAM</h6>
            </div>
          </div>
          <div className="team-picture-column">
            <img src={homeTeamImage} alt="Team Picture"></img>
            <div className="primary-button">
              <h6>MEET OUR TEAM</h6>
            </div>
          </div>
        </div>
      </section>
      <PrimaryPageCTA
        title="Let’s build a public success story."
        subtitle="Get in touch to start."
        primaryButtonText="HIRE US"
        secondaryButtonText="EXPLORE SERVICES"
      />
    </GeneralLayout>
  );
};

export default HomePage;
