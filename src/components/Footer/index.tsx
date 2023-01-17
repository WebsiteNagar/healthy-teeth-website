import { Treatments } from "@utils/mock/Footer";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-no-repeat bg-cover bg-footer">
      <div className="grid grid-cols-1 py-32 text-left md:grid-cols-4">
        <div className="md:col-span-2">
          {/* Logo */}
          <img src="" />
          {/* Description */}
          {/* Social */}
        </div>
        <div className="">{/* Reach Us */}</div>
        <div className="">
          {Treatments.map((treatment) => (
            <p key={treatment.title} className="cursor-pointer">
              {treatment.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
