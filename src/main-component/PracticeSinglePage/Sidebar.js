import React from 'react';

import Practices from '../../api/Practices';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="col-span-4 md:col-span-6 sm:col-span-8  col:col-span-12  order-1 md:order-2">
      <div className="pr-[40px] lg:pr-0 md:mt-[40px]">
        <div className="bg-[#f5f5f5] mt-[60px]">
          <div
            className="bg-[#ddd] py-[10px] px-[20px] relative  
                  before:z-10 before:absolute before:contnent-[''] before:border-[15px] before:border-transparent 
                  before:border-t-[13px] before:border-t-[rgba(0,0,0,.1)]
                   before:top-full before:left-[30px] "
          >
            <h3 className="text-[24px] text-[#282e3f]">Kategoriler</h3>
          </div>
          <div className="pt-[15px] px-[30px] pb-[20px]">
            <ul>
              {Practices.map((practice, Pitem) => (
                <li className="border-b border-[#ddd]" key={Pitem}>
                  <Link
                    onClick={ClickHandler}
                    to={`/practice-single/${practice.slug}`}
                    className="text-[15px] pt-[15px] pb-[10px] text-[#333] block transition-all ease-in-out hover:text-[#c0b596]"
                  >
                    {practice.sTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
