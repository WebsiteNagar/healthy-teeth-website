import { app } from "@utils/config";
import { SocialEnum } from "@utils/enums/SocialEnums";
import { createSlug } from "@utils/helpers";
import { Social, Treatments } from "@utils/mock/FooterData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  const firstHalfOfArray = Treatments.slice(0, 5);
  const secondHalfOfArray = Treatments.slice(5);

  return (
    <div className="text-white bg-center bg-no-repeat bg-cover bg-footer">
      <div className="grid grid-cols-1 gap-12 py-32 text-left md:grid-cols-12 base__container">
        <div className="space-y-4 md:col-span-4">
          {/* Logo */}
          <Image
            src="/images/white-logo.png"
            width={250}
            height={165}
            alt="htdetal_logo"
          />
          {/* Description */}
          <p className="text-sm font-light">
            "Healthy Teeth Dental Clinic, Jaipur endures an eternal reputation
            in the city for providing dental care and treatments equipped with
            the latest dental equipment for better treatment of patients."
          </p>
          {/* Social */}
          <div className="flex space-x-2">
            {Social.map((social) => (
              <Link
                href={social.link}
                key={social.name}
                target="_blank"
                className={`p-2 transition-all duration-500 ease-in-out border border-gray-200 rounded-full cursor-pointer w-fit ${
                  social.name === SocialEnum.Facebook &&
                  "hover:bg-facebook hover:border-facebook"
                } ${
                  social.name === SocialEnum.Twitter &&
                  "hover:bg-twitter hover:border-twitter"
                }  ${
                  social.name === SocialEnum.GooglePlus &&
                  "hover:bg-googlePlus hover:border-googlePlus"
                } ${
                  social.name === SocialEnum.TumblR &&
                  "hover:bg-tumblR hover:border-tumblR"
                }`}
              >
                {social.Icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4 md:col-span-3">
          <h5 className="text-lg font-bold">Reach Us</h5>
          <p className="font-light">
            A-4, Indra Place, Gaurav Tower Marg, Malviya Nagar, Jaipur
            <br />
            <Link href={`mailto:${app.contact.email}`} className="font-bold">
              {app.contact.email}
            </Link>
            <br />
            <Link href={`tel:${app.contact.phone}`} className="font-bold">
              {app.contact.phone}
            </Link>
          </p>
          <h5 className="text-lg font-bold">Review us on Google</h5>
        </div>
        <div className="space-y-4 md:col-span-2">
          <h5 className="text-lg font-bold">Treatments</h5>
          {firstHalfOfArray.map((treatment) => (
            <p
              key={treatment.title}
              className="font-light cursor-pointer hover:underline"
              onClick={() =>
                router.push(`/treatment/${createSlug(treatment.title)}`)
              }
            >
              {treatment.title}
            </p>
          ))}
        </div>
        <div className="mt-6 space-y-4 md:col-span-2">
          {secondHalfOfArray.map((treatment) => (
            <p
              key={treatment.title}
              className="font-light cursor-pointer hover:underline"
              onClick={() =>
                router.push(`/treatment/${createSlug(treatment.title)}`)
              }
            >
              {treatment.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
