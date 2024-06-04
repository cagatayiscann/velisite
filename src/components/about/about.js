import React from 'react';
import { Link } from 'react-router-dom';

import sign from '../../images/about/1.png';

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="pt-[120px] pb-[100px]">
      <div className="wraper">
        <div className="grid grid-cols-20 items-center gap-3">
          <div className="col-span-6 md:col-span-12">
            <div className="mb-[20px]">
              <h2 className="text-[#282e3f] text-[32px]">Hakkımızda</h2>
              <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">
                Biz, mali müşavirlik alanında uzmanlaşmış bir ekibiz ve
                müşterilerimize geniş bir yelpazede finansal çözümler sunuyoruz.
                Deneyimli kadromuz, her müşterinin benzersiz mali hedeflerini
                anlayarak, onlara özel stratejiler geliştiriyor ve uyguluyor.
                Şeffaflık, dürüstlük ve güvenilirlik ilkelerimiz doğrultusunda,
                müşterilerimizin finansal refahını sağlamak için çalışıyoruz.
              </p>
              <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">
                {' '}
                Sektördeki güncel gelişmeleri yakından takip ediyor ve
                müşterilerimizi en iyi şekilde bilgilendirerek, karar
                vermelerine yardımcı oluyoruz. Bizimle çalışan herkes, mali
                konularda desteklenmiş hissediyor ve finansal hedeflerine
                ulaşmak için gereken desteği alıyor. Müşteri memnuniyeti ve
                başarısı, bizim için en önemli önceliklerden biridir.
              </p>
              <div className="mb-[50px] col:mb-[20px]">
                <Link
                  onClick={ClickHandler}
                  to="/about"
                  className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#d4c291]
                                col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                                "
                >
                  Hakkımızda Daha Fazlası..
                </Link>
              </div>
              <div className="signature">
                <img src={sign} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
