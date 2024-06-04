import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-vy.png';
import Practices from '../../api/Practices';

const SubmitHandler = (e) => {
  e.preventDefault();
};

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  return (
    <footer className="relative bg-[#151a30] z-10">
      <div className="pt-[100px] pb-[90px] md:py-[90px] md:pb-[20px] overflow-hidden relative -z-10">
        <div className="wraper">
          <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="w-[420px] xl:w-[355px] lg:w-[297px] pr-[125px] md:mb-[40px] lg:pr-0 relative text-left">
              <div className="mb-7">
                <Link
                  className="text-[45px] font-bold flex items-center text-white"
                  to="/"
                >
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <p className="text-white text-[16px] mb-[10px]">
                Mali müşavirlik hizmetleri sadece vergi ve muhasebe ile sınırlı
                değildir. İşletmenizin finansal sağlığını korumak ve büyümenizi
                desteklemek için geniş bir yelpazede danışmanlık hizmetleri
                sunuyoruz.
              </p>
              <ul className="overflow-hidden pt-[15px]">
                <li className="text-white float-left group ">
                  <Link
                    className="text-white transition-all group-hover:text-[#FFE600]"
                    onClick={SubmitHandler}
                    to="/https://www.instagram.com/smmmveliyildirim/"
                  >
                    <i className="ti-instagram"></i>
                  </Link>
                </li>
                <li className="text-white float-left group ml-[15px]">
                  <Link
                    className="text-white transition-all group-hover:text-[#c0b596]"
                    onClick={SubmitHandler}
                    to="/"
                  >
                    <i className="ti-twitter-alt"></i>
                  </Link>
                </li>
                <li className="text-white float-left group ml-[15px]">
                  <Link
                    className="text-white transition-all group-hover:text-[#c0b596]"
                    onClick={SubmitHandler}
                    to="/"
                  >
                    <i className="ti-linkedin"></i>
                  </Link>
                </li>
                <li className="text-white float-left group ml-[15px]">
                  <Link
                    className="text-white transition-all group-hover:text-[#c0b596]"
                    onClick={SubmitHandler}
                    to="/"
                  >
                    <i className="ti-pinterest"></i>
                  </Link>
                </li>
                <li className="text-white float-left group ml-[15px]">
                  <Link
                    className="text-white transition-all group-hover:text-[#c0b596]"
                    onClick={SubmitHandler}
                    to="/"
                  >
                    <i className="ti-vimeo-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[200px] md:w-full ml-auto md:mb-[40px] lg:pr-0 relative text-left ">
              <div className="mb-7">
                <h3 className="text-[28px] font-medium  font-heading-font text-white capitalize">
                  Hızlı Erişim
                </h3>
              </div>
              <ul>
                <li className="relative mb-[8px] block">
                  <Link
                    className=" text-white hover:text-[#c0b596] transition-all"
                    to="/home"
                  >
                    Ana Sayfa
                  </Link>
                </li>
                <li className="relative mb-[8px] block">
                  <Link
                    className=" text-white hover:text-[#c0b596] transition-all"
                    to="/practice"
                  >
                    Çalışma Alanı
                  </Link>
                </li>

                <li className="relative mb-[8px] block">
                  <Link
                    className=" text-white hover:text-[#c0b596] transition-all"
                    to="/attorneys"
                  >
                    Takımımız
                  </Link>
                </li>
                <li className="relative mb-[8px] block">
                  <Link
                    className=" text-white hover:text-[#c0b596] transition-all"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pl-[15px] md:pl-[0px] md:mb-[40px] lg:pr-0 relative text-left ">
              <div className="mb-7">
                <h3 className="text-[28px] font-medium  font-heading-font text-white capitalize">
                  Hizmetlerimiz
                </h3>
              </div>
              <ul>
                {Practices.map((practice, Pitem) => (
                  <li className="relative mb-[8px] block" key={Pitem}>
                    <Link
                      className="text-white hover:text-[#c0b596] transition-all"
                      onClick={ClickHandler}
                      to={`/practice-single/${practice.slug}`}
                    >
                      {practice.sTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" md:mb-[40px] lg:pr-0 relative text-left ">
              <div className="mb-7">
                <h3 className="text-[28px] font-medium  font-heading-font text-white capitalize">
                  Bize ulaşın
                </h3>
              </div>
              <ul>
                <li className="relative mb-[8px] block text-white">
                  Ofis Adresi
                </li>
                <li className="relative mb-[8px] block text-white">
                  Aşağı Öveçler mah. 1326. Cad. 12/3 Çankaya, Ankara, Turkey
                </li>

                <li className="relative mb-[8px] block text-white">
                  Telefon: 05051019199
                </li>
                <li className="relative mb-[8px] block text-white">
                  Email: smmmveliyildirim@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wraper">
        <div className=" border-t-1 border-[rgba(192,181,150,.3)] relative">
          <div className="h-[1px] absolute left-[15px] top-0 bg-[#ffffff0d] w-[calc(100%+30px)]"></div>
          <p className="text-center text-white text-[14px] py-[20px]">
            {' '}
            Gizlilik Politikası | &copy; Bütün Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
