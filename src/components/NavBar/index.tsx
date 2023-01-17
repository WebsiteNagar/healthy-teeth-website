import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);

  const conversion = (pixel: number) => {
    let rem = 0.0625 * pixel;
    let em = 0.0625 * pixel;
    console.log('pixel', pixel);
    console.log('rem', rem);
    return rem;
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
        className={classNames('text-heading flex h-6 w-full flex-row justify-center bg-white text-sm', {
          hidden: scrollY > 50
        })}
      >
        <div className="pr-10 text-end">Mon - Sat: 09:30 AM - 08:30 PM</div>
        <div className="ml-16 pr-10 text-end">Sun: 10:00 AM - 01:00 PM</div>
        <div className="ml-16 pr-10 text-end">A-4, Indra Place, Gaurav Tower Marg, Malviya Nagar, Jaipur</div>
      </div>
      <div
        className={classNames(
          'sticky top-0 flex w-full flex-row items-center justify-between bg-white px-[3%] text-sm text-gray-700 transition-[height] duration-[1000ms] ease-out ',
          { 'h-24': scrollY <= 50, 'h-10': scrollY > 50 }
        )}
      >
        <div className="row flex w-[250px] justify-center">
          <Image
            className={classNames('self-end', { 'pt-1': scrollY > 50 })}
            src="/logo.jpeg"
            alt="Logo"
            width={scrollY > 50 ? 150 : 250}
            height={scrollY > 50 ? 150 : 250}
          ></Image>
        </div>
        <div className="decoration-gray-500">Home</div>
        <div>About Us</div>
        <div>Treatment</div>
        <div>Profile</div>
        <div>Gallery</div>
        <div>Patient Stories</div>
        <div>Sterilization</div>
        <div>Contact Us</div>
        <button>Book an Appointment</button>
      </div>
    </div>
  );
};

export default NavBar;
