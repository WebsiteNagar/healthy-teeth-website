import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);

  const navItems = [
    { heading: 'Home' },
    { heading: 'About Us' },
    { heading: 'Treatment' },
    { heading: 'Profile' },
    { heading: 'Gallery' },
    { heading: 'Patient Stories' },
    { heading: 'Sterilization' },
    { heading: 'Contact Us' }
  ];
  const treatments = [
    { treatmentName: 'Root Canal Treatment' },
    { treatmentName: 'Dental Extraction' },
    { treatmentName: 'Wisdom Tooth Removal' },
    { treatmentName: 'Scaling & Polishing' },
    { treatmentName: 'Dental Implants' },
    { treatmentName: 'Crown & Bridges' },
    { treatmentName: 'Tooth Fillings' },
    { treatmentName: 'Full Mouth Rehabilitation' },
    { treatmentName: 'Orthodontic Treatment' },
    { treatmentName: 'Gum Treatment' },
    { treatmentName: 'Smile Design & Cosmetic Dentistry' }
  ];

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleTreatmentClick = () => {
    setIsTreatmentOpen(!isTreatmentOpen);
  };

  const handleScroll = useCallback(() => {
    setScrollY(window.pageYOffset);
    console.log(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="align-center sticky top-0 h-28 justify-center bg-transparent">
      <div
        className={classNames(
          'text-heading hidden h-6 w-full flex-row justify-center border-b-[1px] bg-white text-sm lg:flex',
          {
            hidden: scrollY > 50
          }
        )}
      >
        <div className="flex flex-row items-center pr-0 text-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-primary"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="ml-2 text-headings">Mon - Sat: 09:30 AM - 08:30 PM</div>
        </div>
        <div className="ml-5 self-center pr-0 text-end text-headings">Sun: 10:00 AM - 01:00 PM</div>
        <div className="ml-24 flex flex-row items-center pr-0 text-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-2 text-headings">A-4, Indra Place, Gaurav Tower Marg, Malviya Nagar, Jaipur</div>
        </div>
      </div>
      <div
        className={classNames(
          'sticky top-0 flex w-full flex-row items-center justify-between bg-white text-sm text-gray-700 transition-[height] duration-[1000ms] ease-out lg:px-[3%] ',
          { 'h-24': scrollY <= 50, 'h-14 lg:h-10': scrollY > 50 }
        )}
      >
        <div className="row ml-12 flex w-[250px] justify-end lg:ml-0 lg:justify-center">
          <Image
            className={classNames('transition-all duration-1000 ease-in-out ', {
              'mt-4 scale-75 lg:pt-1': scrollY > 50
            })}
            src="/logo.jpeg"
            alt="Logo"
            width={250}
            height={250}
          ></Image>
        </div>
        <div className="lg:hidden" onClick={handleMenuClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 pr-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <ul
          className={classNames(
            'absolute top-24 w-[100%] justify-around bg-white pl-5 text-[20px] lg:relative lg:top-0 lg:flex lg:h-0 lg:flex-[7] lg:flex-row lg:justify-between lg:bg-transparent lg:pl-5 lg:text-sm',
            {
              'flex flex-col': isOpen,
              hidden: !isOpen,
              'top-12': scrollY > 50
            }
          )}
        >
          {navItems.map(item => {
            return item.heading === 'Treatment' ? (
              <li className={classNames('group relative mt-8 cursor-pointer lg:mt-0')}>
                <div
                  className={classNames('flex flex-row items-center hover:text-primary  lg:justify-center')}
                  onClick={handleTreatmentClick}
                >
                  Treatment
                  {isTreatmentOpen ? (
                    ''
                  ) : (
                    // <svg
                    //   xmlns="http://www.w3.org/2000/svg"
                    //   fill="none"
                    //   viewBox="0 0 24 24"
                    //   stroke-width="1.5"
                    //   stroke="currentColor"
                    //   className="ml-2 h-3 w-3"
                    // >
                    //   <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    // </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="ml-2 h-3 w-3 "
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </div>
                <ul
                  className={classNames(' top-4 w-full bg-white lg:absolute lg:w-96 lg:group-hover:block', {
                    hidden: !isTreatmentOpen
                  })}
                >
                  {treatments.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={classNames(
                          'mt-3  cursor-pointer pl-5 transition-all duration-300 ease-linear hover:translate-x-4 hover:text-primary lg:pl-2'
                        )}
                      >
                        {item.treatmentName}

                        {i === treatments.length - 1 ? (
                          ''
                        ) : (
                          <div
                            className={classNames(
                              'mt-2 mr-5 h-1 border-t-[2px] border-dotted border-gray-200 bg-transparent '
                            )}
                          ></div>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div
                  className={classNames('mt-8 mr-5 h-1 border-t-[1px] border-gray-200 bg-transparent lg:hidden')}
                ></div>
              </li>
            ) : (
              <li className={classNames('mt-8 cursor-pointer hover:text-primary lg:mt-0')}>
                {item.heading}
                <div
                  className={classNames('mt-8 mr-5 h-1 border-t-[1px] border-gray-200 bg-transparent lg:hidden')}
                ></div>
              </li>
            );
          })}
          <button
            className={classNames(
              'mt-8 h-12 w-[90%] items-center justify-center rounded border-none bg-primary text-white lg:mt-[-8px] lg:h-10 lg:w-40'
            )}
          >
            Book an Appointment
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
