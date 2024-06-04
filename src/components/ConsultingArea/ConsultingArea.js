import React from 'react';
import ConsultingFrom from '../ConsultingFrom/ConsultingFrom';
import cImg from '../../images/contact/hesap-makinesi.jpg';

const ConsultingArea = (props) => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat bg-fixed py-[100px] z-10 
   before:content-[''] before:bg-[rgba(21,26,48,0.9)] before:w-full before:h-full before:absolute before:left-0 before:-z-10 before:top-0"
      style={{ backgroundImage: `url(${cImg})` }}
    >
      <div className="wraper">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-5 md:col-span-12 ">
            <div className="contact-text md:mb-[30px]">
              <div className="title">
                <span className="text-[16px] text-[#ada282]">
                  Siz Değerli Müşterilerimiz İçin
                </span>
                <h2
                  className="text-[36px] md:text-[26px] font-medium text-white pb-[20px] md:pb-[10px] relative 
                        before:absolute before:content-[''] before:left-[-68px] 
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] before:h-[1px] before:bg-[#c0b596] md:before:hidden"
                >
                  Danışmanlık
                </h2>
              </div>
              <span className="text-[18px] text-[#c0b596]">
                Bizi bu numaradan (05051019199) arayın yada formu doldurun.
              </span>
              <p className="mt-[30px] text-[#ddd] leading-[30px] text-[16px]">
                İşletmenizin finansal yönetimini güvenilir ellere bırakın.
                Profesyonel mali müşavirlik hizmetlerimizle vergi, muhasebe ve
                finansal danışmanlık konularında yanınızdayız. Sorularınız ve
                ihtiyaçlarınız için bize ulaşın, size özel çözümler sunalım.
              </p>
            </div>
          </div>
          <div className="col-span-7 md:col-span-12">
            <ConsultingFrom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingArea;
