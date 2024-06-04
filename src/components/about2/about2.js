import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import { Link } from 'react-router-dom';

const About2 = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="pt-[120px] pb-[100px] md:py-[80px]">
      <div className="wraper">
        <div className="grid grid-cols-20 items-center gap-3">
          <div className="col-span-6 md:col-span-12">
            <div className="mb-[20px]">
              <div className="text-left sm:text-center">
                <span className="text-[16px] text-[#ada282]">
                  Alanımızda Uzmanız
                </span>
                <h2
                  className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative 
                        before:absolute before:content-[''] before:left-[-68px] 
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] before:h-[1px] before:bg-[#c0b596] md:before:hidden"
                >
                  Biz Kimiz?
                </h2>
              </div>
              <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">
                Mali Müşavirlik sektöründe uzmanlaşmış bir ekibiz. Profesyonel
                deneyimimiz ve bilgi birikimimizle, müşterilerimize kapsamlı
                mali danışmanlık hizmetleri sunuyoruz. Müşteri memnuniyeti ve
                güveni bizim için önceliktir. Ekibimiz, her müşterinin
                ihtiyaçlarını anlamak ve en uygun çözümleri sunmak için sürekli
                olarak çalışmaktadır.
              </p>
              <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">
                {' '}
                Amacımız, müşterilerimizin mali hedeflerini başarıyla
                gerçekleştirmelerine yardımcı olmaktır.
              </p>
              <div className="mb-[50px] col:mb-[20px]">
                <Link
                  to="/about"
                  className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#d4c291]
                        col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                        "
                >
                  Hakkımızda Daha Fazlası..
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7Jv48RQ_2gk"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default About2;
