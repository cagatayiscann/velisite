import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cases from '../../api/case';
import Isotope from 'isotope-layout';

const CaseStudies = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isotope, setIsotope] = useState(null);
    const [filterKey, setFilterKey] = useState('all');

    useEffect(() => {
        setIsotope(
            new Isotope('.filter-container', {
                itemSelector: '.filter-item', 
                layoutMode: 'fitRows',
            })
        );
    }, []);


    useEffect(() => {
        if (isotope) {
            // sanity check
            filterKey === '*'
                ? isotope.arrange({ filter: `*` })
                : isotope.arrange({ filter: `.${filterKey}` });
        }
    }, [isotope, filterKey]);


     setTimeout(function(){
            if (isotope) {
                // sanity check
                filterKey === '*'
                    ? isotope.arrange({ filter: `*` })
                    : isotope.arrange({ filter: `.${filterKey}` });
            };
     }, 500);


    return (
        <section className="py-[100px]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <span className="text-[16px] text-[#ada282]">Here Our Best Work</span>
                        <h2 className=" text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#c0b596]">Our Resent Case Studies</h2>
                    </div>
                </div>
            </div>
            <div className="sortable-gallery overflow-hidden ">
                <div className="gallery-filters text-center mb-[60px]">
                    <ul className="inline-block overflow-hidden text-center">
                        <li onClick={() => setFilterKey('all')} className={`inline-block col:mb-[5px] ${filterKey === 'all' ? 'active' : ''}`} ><span className=" unactive-color font-normal block capitalize cursor-pointer">All</span></li>
                        <li onClick={() => setFilterKey('FamilyMatters')} className={`inline-block ml-7 col:mb-[5px] col:ml-[10px] ${filterKey === 'FamilyMatters' ? 'active' : ''}`}><span className="unactive-color font-normal block capitalize cursor-pointer">Family Matters</span></li>
                        <li onClick={() => setFilterKey('RealEstate')} className={`inline-block ml-7 col:mb-[5px] col:ml-[10px] ${filterKey === 'RealEstate' ? 'active' : ''}`}><span className="unactive-color font-normal block capitalize cursor-pointer">Real Estate</span></li>
                        <li onClick={() => setFilterKey('Business')} className={`inline-block ml-7 col:mb-[5px] col:ml-[10px] ${filterKey === 'Business' ? 'active' : ''}`}><span className="unactive-color font-normal block capitalize cursor-pointer">Business</span></li>
                        <li onClick={() => setFilterKey('Criminal')} className={`inline-block ml-7 col:mb-[5px] col:ml-[10px] ${filterKey === 'Criminal' ? 'active' : ''}`}><span className="unactive-color font-normal block capitalize cursor-pointer">Criminal</span></li>
                        <li onClick={() => setFilterKey('Injury')} className={`inline-block ml-7 col:mb-[5px] col:ml-[10px] ${filterKey === 'Injury' ? 'active' : ''}`}><span className="unactive-color font-normal block capitalize cursor-pointer">Injury</span></li>
                    </ul>
                </div>

                <div className="gallery-container gallery-fancybox masonry-gallery grid grid-cols-12 gap-4 filter-container">
                    {Cases.slice(0, 5).map((cases, i) => (
                        <div className={`filter-item max-w-[20%] md:max-w-[33.33%] sm:max-w-[50%] col:max-w-[100%] overflow-hidden grid-item  ${cases.filterName}`} key={i}>
                            <div className="relative group">
                                <div className="studies-single">
                                    <img className="w-full" src={cases.cImg} alt="" />
                                </div>
                                <div className="absolute bottom-[-80px] bg-[#151a30cc] w-[calc(100%)] h-[calc(100%)] transition ease-in-out duration-500 opacity-0 invisible 
                               group-hover:opacity-100 group-hover:visible group-hover:bottom-0">
                                    <div className="absolute left-[5%] top-[5%] w-[90%] h-[90%] text-center border-[2px] border-[#c0b596] z-10 flex justify-center flex-col">
                                        <p className="text-[#c0b596] text-[16px] leading-[28px]">{cases.sub}</p>
                                        <h3 className="relative text-white text-[22px] pt-[10px] pb-[25px] font-medium 
                                    before:absolute before:left-[50%] before:top-full before:content-[''] before:bg-[#c0b596] before:transform before:-translate-x-1/2
                                    before:w-[60px] before:h-[3px] before:z-10">
                                            <Link onClick={ClickHandler} to={`/case-single/${cases.slug}`} className="text-white transition ease-in-out duration-300 hover:text-[#c0b596]">{cases.cTitle}</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CaseStudies;