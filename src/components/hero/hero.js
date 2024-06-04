import React from 'react';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import hero1 from '../../images/slider/slider1.jpg';
import hero2 from '../../images/slider/homephoto2.jpg';

const Hero = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="hero relative h-[790px] lg:h-[500px] col:h-[450px] overflow-hidden z-20">
      <div className="hero-slider">
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1800}
          parallax={true}
          navigation
        >
          <SwiperSlide>
            <div
              className="slide-inner slide-bg-image h-[790px] lg:h-[500px] col:h-[450px]"
              style={{ backgroundImage: `url(${hero1})` }}
            >
              <div
                className="slide  relative h-full bg-cover bg-no-repeat z-10  after:absolute after:content-[''] 
            after:w-full after:h-full after:left-0 after:top-0 after:opacity-70 after:z-10"
              >
                <div className="wraper">
                  <div className="slide-caption w-[700px] mt-[245px] lg:mt-[110px] md:mt-[120px] col:mt-[100px] absolute top-0 z-20">
                    <p className="text-white text-[20px] font-light col:text-[18px]">
                      İşletmenizin Finansal Başarıya Ulaşmasına Yardımcı
                      Oluyoruz
                    </p>
                    <h2
                      className="text-white text-[60px] leading-[90px] lg:text-[42px] lg:leading-[56px] 
                     col:text-[25px] col:leading-[35px] font-normal my-[33px] md:my-[20px]"
                    >
                      <span>Profesyonel Mali Müşavirlik Hizmetleri</span> <br />{' '}
                    </h2>
                    <div className="btns">
                      <div className="btn-style">
                        <Link
                          onClick={ClickHandler}
                          to="/contact"
                          className="bg-[#c0b596] relative cursor-pointer text-[16px]
                             font-semibold text-white px-[38px] py-[12px]  capitalize inline-block mt-[6px] 
                             transition ease-in-out duration-300 hover:bg-[#d4c291]
                            col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                            before:absolute before:content-[''] before:w-[85px] before:h-[2px] before:left-[-60px]
                             before:top-[50%]  before:bg-white before:transform before:translate-y-[-50%] 
                             before:transition-all hover:before:left-[-95px] md:before:hidden"
                        >
                          Bizimle iletişime geçin
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide-inner slide-bg-image h-[790px] lg:h-[500px] col:h-[450px]"
              style={{ backgroundImage: `url(${hero2})` }}
            >
              <div
                className="slide  relative h-full bg-cover bg-no-repeat z-10  after:absolute after:content-[''] 
            after:w-full after:h-full after:left-0 after:top-0 after:opacity-70 after:z-10"
              >
                <div className="wraper">
                  <div className="slide-caption w-[700px] mt-[245px] lg:mt-[110px] md:mt-[120px] col:mt-[100px] absolute top-0 z-20">
                    <p className="text-white text-[20px] font-light col:text-[18px]"></p>
                    <h2
                      className="text-white text-[35px] leading-[90px] lg:text-[42px] lg:leading-[56px] 
                     col:text-[25px] col:leading-[35px] font-normal my-[33px] md:my-[20px]"
                    >
                      <span></span> <br />{' '}
                      <span>
                        Mali müşavirlikte güvenilir çözüm ortağınız, finansal
                        başarıya giden yolda yanınızdayız. Verimlilik ve
                        şeffaflıkla işinizi büyütün.
                      </span>
                    </h2>
                    <div className="btns">
                      <div className="btn-style">
                        <Link
                          onClick={ClickHandler}
                          to="/practice"
                          className="bg-[#c0b596] relative cursor-pointer text-[16px]
                             font-semibold text-white px-[38px] py-[12px]  capitalize inline-block mt-[6px] 
                             transition ease-in-out duration-300 hover:bg-[#d4c291]
                            col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                            before:absolute before:content-[''] before:w-[85px] before:h-[2px] before:left-[-60px]
                             before:top-[50%]  before:bg-white before:transform before:translate-y-[-50%] 
                             before:transition-all hover:before:left-[-95px] md:before:hidden"
                        >
                          Hizmetlerimiz
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
