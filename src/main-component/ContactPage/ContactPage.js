import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Contactpage from '../../components/Contactpage/Contactpage';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import Newsletter from '../../components/Newsletter/Newsletter';

const ContactPage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={'İletişim'} pagesub={'iletişim'} />
      <Contactpage />
      <Newsletter />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;
