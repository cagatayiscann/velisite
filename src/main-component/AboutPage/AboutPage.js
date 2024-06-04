import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import About2 from '../../components/about2/about2';
import Practice2 from '../../components/Practice2';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Features from '../../components/Features/Features';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFact2 from '../../components/FunFact2/FunFact2';
import Attorney from '../../components/attorneys';
import BlogSection from '../../components/BlogSection/BlogSection';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={'Hakkımızda'} pagesub={'Hakkımızda'} />
      <Features />
      <About2 />
      <Practice2 />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
