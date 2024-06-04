import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero/hero';
import Features from '../../components/Features/Features';
import About from '../../components/about/about';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Practice from '../../components/Practice';
import ConsultingArea from '../../components/ConsultingArea/ConsultingArea';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  return (
    <Fragment>
      <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
      <Hero />
      <Features />
      <About />
      <Practice />

      <ConsultingArea />

      <Newsletter />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
