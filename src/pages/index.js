import '../sass/styles.scss';
import React, { useEffect, useRef } from 'react';
import HomepageLayout from '../layouts/homepage';
import Card from '../components/card.js';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import ClientsSection from '../components/clients.js';
import CaseStudyTeaser from '../components/case-study-teaser.js';
import PressReleaseTeaser from '../components/press-release-teaser.js';
import LinkButton from '../components/link-button';
import SEO from '../components/seo';

// Images
import homeIntroGraphic from '../files/images/homepage-hero.png';
import homeTeamImage from '../files/images/home-team-img.png';
import quotePatternGraphic from '../files/images/quote-pattern-graphic.png';
import caseStudyTeaserImg1 from '../files/images/case-study-teasers/case-study-teaser-img-1.png';
import caseStudyTeaserImg2 from '../files/images/case-study-teasers/case-study-teaser-img-2.png';
import caseStudyTeaserImg3 from '../files/images/case-study-teasers/case-study-teaser-img-3.png';
import caseStudyTeaserImg4 from '../files/images/case-study-teasers/case-study-teaser-img-4.png';
import caseStudyTeaserImg5 from '../files/images/case-study-teasers/case-study-teaser-img-5.png';
import dataServicesIcon from '../files/icons/data-services-icon.svg';
import itModernizationIcon from '../files/icons/it-modernization-icon.svg';
import productDesignIcon from '../files/icons/product-design-icon.svg';
import securityComplianceIcon from '../files/icons/security-compliance-icon.svg';
import webCmsIcon from '../files/icons/web-cms-icon.svg';
import workforceDevelopmentIcon from '../files/icons/workforce-dev-icon.svg';
import arrowIcon from '../files/icons/arrow-icon.svg';

const HomePage = () => {
  const fadersRef = useRef([]);
  useEffect(() => {
    const faders = fadersRef.current;
    const appearOnScroll = new IntersectionObserver(
      function (entries, appearOnScroll) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        });
      },
      { threshold: 0.25 }
    );
    faders.forEach((fader) => appearOnScroll.observe(fader));
  }, []);
  return (
    <HomepageLayout>
      <SEO title='Home' />
      <section className='home--hero-section'>
        <div className='inner'>
          <img
            src={homeIntroGraphic}
            alt='Graphic image of people working together'
            ref={(e) => (fadersRef.current[0] = e)}
            className='fade-in'></img>
          <div className='info-text'>
            <h1>
              We help government deliver better public services through modern
              technology and design.
            </h1>
            <LinkButton
              src='/case-studies'
              size='large'
              type='primary'
              text='See our work'
            />
          </div>
        </div>
      </section>
      {/* ======== Clients Section ========== */}
      <ClientsSection />
      <div className='home--section home--services-and-cases-bg'>
        <section className='home--services-section'>
          <div className='background-wrapper'></div>
          <div className='inner'>
            <h2>Digital first. Data driven. Human centered.</h2>
            <p className='body-large'>
              Bringing government services up to today's standards requires new
              ways of thinking and working.
            </p>
            <p className='body-large'>
              We can help you improve how people, process, and technology work
              together at your agency for lasting digital transformation.
            </p>
            <div className='service-cards-grid'>
              <Card
                title='Web & CMS'
                icon={webCmsIcon}
                link='/services#web-cms'
              />
              <Card
                title='IT & Service Modernization'
                icon={itModernizationIcon}
                link='/services#it-service'
              />
              <Card
                title='Product & Design'
                icon={productDesignIcon}
                link='/services#product-design'
              />
              <Card
                title='Security & Compliance'
                icon={securityComplianceIcon}
                link='/services#security'
              />
              <Card
                title='Data Services'
                icon={dataServicesIcon}
                link='/services#data-services'
              />
              <Card
                title='Workforce Development'
                icon={workforceDevelopmentIcon}
                link='/services#development'
              />
            </div>
            <LinkButton
              src='/services'
              size='large'
              type='primary'
              text='Explore Services'
            />
          </div>
        </section>

        {/* ======== Case Studies Section ========== */}
        <section className='home--section home--case-studies-section'>
          <div className='background-wrapper'></div>
          <div className='inner'>
            <h2>Resilient agencies. Accessible services. Happier people.</h2>
            <p className='body-large'>
              Working for the greater good is in our DNA. From healthcare to
              welfare to education and beyond, we partner with agencies to solve
              hard problems and improve outcomes for government and the public.
            </p>
            <div className='teasers'>
              <CaseStudyTeaser
                img={caseStudyTeaserImg1}
                alt={
                  'elderly man and women leaning on each other outside in fall'
                }
                client={'Centers for medicare and medicaid services'}
                title={
                  'Improving the online experience for Medicare beneficiaries'
                }
                teaserLink='/'
                // teaserLink={''}
              />
              <CaseStudyTeaser
                img={caseStudyTeaserImg2}
                alt={'veteran saluting facing a crowd'}
                client={'US Department of veteran affairs'}
                title={'Helping Veterans access care and benefits online'}
                teaserLink={'/case-study/va-cms-modernization'}
              />
              <CaseStudyTeaser
                img={caseStudyTeaserImg3}
                alt={
                  'architecture sketch with calculations and pencil on paper'
                }
                client={'US Department of Education'}
                title={'Supporting and expanding adult education'}
                teaserLink='/'
                // teaserLink={''}
              />

              <div className='view-our-work-cta '>
                <a href={'/case-studies/'}>
                  <img src={caseStudyTeaserImg3} alt='' className='bg'></img>
                  <div className='content'>
                    <h3>View more Work</h3>
                    <img
                      className='view-our-work-cta__icon'
                      src={arrowIcon}
                      alt=''></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ======== Quote Section ========== */}
      <section className='home--section home--quote-section'>
        <div className='inner'>
          <img src={quotePatternGraphic} alt=''></img>
          <div className='quote'>
            <h2>
              “It was a pleasure to work with the CivicActions team. Their
              experience with government clients and agile processes helped us
              reach our user base sooner than expected with a product that met
              their needs.”
            </h2>
            <div className='body'>
              Lisa Berry, Senior GlobalNET Liaison Officer
            </div>
            <div className='body'>Defense Security Cooperation Agency</div>
          </div>
        </div>
      </section>
      {/* ======== Learn With Us Section ========== */}
      <section className='home--section home--learn-w-us-section'>
        <div className='background-color--wrapper'></div>
        <div className='inner'>
          <h2>Learn with us.</h2>
          <div className='body-large'>
            Thoughts and takeaways from our work in the field.
          </div>
          <div className='cases'>
            <PressReleaseTeaser
              img={caseStudyTeaserImg4}
              title={'Government customer experience: A practical guide'}
              description={
                'How to start bringing CX into the business of government'
              }
              teaserlink={
                'https://medium.com/civicactions/government-accessibility-and-the-cms-problem-588a07088c65 '
              }
            />
            <PressReleaseTeaser
              img={caseStudyTeaserImg5}
              title={'WhiteHouse.gov: Beginning an accessibility journey'}
              description={
                'Praise and recommendations for the new administration'
              }
              teaserLink={
                'https://medium.com/civicactions/government-customer-experience-a-practical-guide-59b602815e3f '
              }
            />
            <div className='grid-item-3'>

                <a
                    className='grid-item-3-1'
                  href={
                    'https://medium.com/civicactions/what-fierce-openness-can-do-for-government-dd1d3ed518af'
                  }>
                  <h3>The role of UX in an agile team</h3>
                  <img width='32px' src={arrowIcon} alt=''></img>
                </a>


                <a
                    className='grid-item-3-2'
                  href={
                    'https://medium.com/civicactions/policy-recommendations-for-improving-the-ato-process-through-compliance-as-code-524e3005fceb '
                  }>
                  <h3>What “fierce openness” can do for government</h3>
                  <img width='32px' src={arrowIcon} alt=''></img>
                </a>

            </div>
          </div>
          <LinkButton src='/' type='primary' text='Explore Posts & Videos' />
        </div>
      </section>
      {/* ======== Team Section ========== */}
      <section className='home--section home--team-section'>
        <div>
          <div className='inner'>
            <div className='column'>
              <h2 className='team-section--title'>
                Our people make the difference.
              </h2>
              <p className='body-large'>
                We are leaders in civic tech and design, committed to working in
                ways that make life better for our clients and each other.
              </p>
              <LinkButton src='/team' type='primary' text='Meet our team' />
            </div>
            <div className='team-picture-column'>
              <img src={homeTeamImage} alt=''></img>
            </div>
          </div>
        </div>
      </section>
      <PrimaryPageCTA
        title='Let’s build a public success story.'
        subtitle='Get in touch to start.'
      />
    </HomepageLayout>
  );
};

export default HomePage;
