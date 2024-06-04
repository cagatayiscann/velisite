import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Practices from '../../api/Practices';
import Sidebar from './Sidebar';
import Newsletter from '../../components/Newsletter/Newsletter';
import pImg from '../../images/practice/4.jpg';

const PracticeSinglePage = (props) => {
  const { slug } = useParams();

  const PracticeDetails = Practices.find((item) => item.slug === slug);

  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={PracticeDetails.sTitle} pagesub={'Hizmetlerimiz'} />
      <div className="py-[100px] md:py-[80px]">
        <div className="wraper">
          <div className="grid grid-cols-12 gap-3">
            <Sidebar />
            <div className="col-span-8 md:col-span-12 order-2 md:order-1">
              <div className="pt-[50px]">
                <h2 className="text-[36px] text-[#282e3f] mb-[25px]">
                  {PracticeDetails.sTitle}
                </h2>
                <h5 className="text-[22px] font-base-font leading-[40px] text-[#282e3f] mb-[25px]">
                  {PracticeDetails.des2}{' '}
                </h5>
                <p className="text-[16px] leading-[30px] py-[20px] mb-[16px]">
                  {PracticeDetails.des3}{' '}
                </p>
              </div>
              <div className="mt-[40px]">
                <div className="organigation-text float-left w-[100%] col:float-none  col:w-full">
                  <h2 className="text-[24px] text-[#282e3f] mb-[8px] block">
                    {PracticeDetails.sTitle}
                  </h2>
                  <span className="block pt-[15px] text-[15px] text-[#333]">
                    <i
                      className="fa fa-check-square-o text-[#c0b596] pr-[15px]"
                      aria-hidden="true"
                    ></i>
                    {PracticeDetails.atom1}
                  </span>
                  <span className="block pt-[15px] text-[15px] text-[#333]">
                    <i
                      className="fa fa-check-square-o text-[#c0b596] pr-[15px]"
                      aria-hidden="true"
                    ></i>
                    {PracticeDetails.atom2}
                  </span>
                  <span className="block pt-[15px] text-[15px] text-[#333]">
                    <i
                      className="fa fa-check-square-o text-[#c0b596] pr-[15px]"
                      aria-hidden="true"
                    ></i>
                    {PracticeDetails.atom3}
                  </span>
                  <span className="block pt-[15px] text-[15px] text-[#333]">
                    <i
                      className="fa fa-check-square-o text-[#c0b596] pr-[15px]"
                      aria-hidden="true"
                    ></i>
                    {PracticeDetails.atom4}
                  </span>
                  <span className="block pt-[15px] text-[15px] text-[#333]">
                    <i
                      className="fa fa-check-square-o text-[#c0b596] pr-[15px]"
                      aria-hidden="true"
                    ></i>
                    {PracticeDetails.atom5}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default PracticeSinglePage;
