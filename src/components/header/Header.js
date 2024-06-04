import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../../images/logo-vy.png';

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header className=" relative z-[111]">
      <div className="bg-[#272c3f] pt-[5px]">
        <div className="wraper relative before:absolute before:w-full before:h-[1px] before:bg-[rgba(255,255,255,.07)] before:bottom-0 before:left-0 before:content-['']">
          <div className="grid grid-cols-12">
            <div className="col-span-10 md:col-span-12">
              <ul className="text-left md:text-center">
                <li className=" text-white inline-block p-[15px]  col:pr-0 pl-0 col:pb-[0]">
                  <i
                    className="fa fa-map-marker pr-[10px] col:pt-[0] text-[#cbbc99] text-[20px]"
                    aria-hidden="true"
                  ></i>
                  Aşağı Öveçler mah. 1326. Cad. 12/3 Çankaya, Ankara, Turkey
                </li>
                <li
                  className="relative text-white inline-block p-[15px]  col:pr-0
                                before:absolute before:content-[''] before:left-0 before:top-[15px] before:w-[1px] before:h-[25px] before:bg-[rgba(255,255,255,.07)]  before:z-10 before:transform before:-translate-x-1/2 md:before:hidden"
                >
                  <i
                    className="fa fa-mobile pr-[10px] text-[#cbbc99] text-[20px]"
                    aria-hidden="true"
                  ></i>
                  05051019199
                </li>
                <li className="relative text-white inline-block p-[15px] col:pr-0  before:absolute before:content-[''] before:left-0 before:top-[15px] before:w-[1px] before:h-[25px] before:bg-[rgba(255,255,255,.07)] md:before:hidden  before:z-10 before:transform before:-translate-x-1/2 ">
                  <i
                    className="fa fa-clock-o pr-[10px] text-[#cbbc99] text-[20px]"
                    aria-hidden="true"
                  ></i>
                  9:00 - 17:00
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-12">
              <div className="text-right md:text-center md:mb-[15px]">
                <Link
                  onClick={ClickHandler}
                  to="/contact"
                  className="theme-btn md:text-[14px] md:py-[8px] md:px-[22px] "
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-site-header bg-[#272c3f] relative ">
        <div className="wraper">
          <div className="flex items-center justify-between ">
            <MobileMenu />

            <div className="logo w-[255px] md:w-[200px] md:mx-auto sm:w-[180px] col:w-[160px]">
              <Link
                onClick={ClickHandler}
                className="text-[45px] col:text-[25px] font-bold flex items-center text-white"
                to="/"
              >
                <img className="w-full" src={Logo} alt="" />
              </Link>
            </div>
            <ul className="md:hidden mr-[-50px] lg-[-10px]">
              <li className="relative inline-block group">
                <Link
                  onClick={ClickHandler}
                  to="/"
                  className="relative text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white hover:text-[#c0b596] block uppercase font-base-font font-normal hover:text-[#c0b596] transition-all
                                "
                >
                  ANA SAYFA
                </Link>
              </li>
              <li className="relative inline-block">
                <Link
                  onClick={ClickHandler}
                  to="/about"
                  className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-[#c0b596] transition-all
                               "
                >
                  Hakkımızda
                </Link>
              </li>
              <li className="relative inline-block group">
                <Link
                  onClick={ClickHandler}
                  to="/practice"
                  className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-[#c0b596] transition-all
                              "
                >
                  Hizmetlerimiz
                </Link>
              </li>

              <li className="relative inline-block group">
                <Link
                  onClick={ClickHandler}
                  to="/"
                  className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-[#c0b596] transition-all
                               "
                >
                  Blog ve Haberler
                </Link>
              </li>

              <li className="relative inline-block">
                <Link
                  onClick={ClickHandler}
                  to="/contact"
                  className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-[#c0b596] transition-all
                               "
                >
                  İLETİŞİM
                </Link>
              </li>
            </ul>
            <div
              className="text-right relative before:absolute before:w-[1px] before:h-full py-[37px]  pl-[37px] lg:pl-[20px]
                         before:bg-[rgba(255,255,255,.07)] before:bottom-0 before:left-0 before:content-[''] "
            >
              <ul>
                <li className="relative header-search-form-wrapper">
                  <div className="cart-search-contact text-right text-white border-left cursor-pointer border-[rgba(255,255,255,.07)]">
                    <div
                      className="search-toggle-btn"
                      onClick={() => setMenuState(!menuActive)}
                    >
                      <i
                        className={`fi ti-search ${
                          menuActive ? 'ti-close' : 'fi '
                        }`}
                      ></i>
                    </div>
                  </div>
                  <ul
                    className={`header-search-form absolute right-0 top-[300%] w-[263px] bg-white z-20 p-[15px]  transform text-center transition-all opacity-0 invisible  ${
                      menuActive ? 'header-search-content-toggle' : ''
                    }`}
                  >
                    <li>
                      <form
                        action="search"
                        className="relative"
                        onSubmit={SubmitHandler}
                      >
                        <input
                          className="bg-white w-full h-[40px] pl-[10px] pr-[40px] focus-visible:outline-0 border border-[rgba(64,59,59,0.07)]"
                          type="text"
                          placeholder="search here.."
                        />
                        <button className="absolute right-0 top-0 w-[40px] h-[40px] bg-[#272c3f] text-white border-0">
                          <i className="fa fa-search "></i>
                        </button>
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
