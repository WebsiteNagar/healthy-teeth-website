import { SocialEnum } from "@utils/enums/SocialEnums";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { GrTumblr } from "react-icons/gr";
import { SocialType } from "typings";

export const Social: SocialType[] = [
  {
    name: SocialEnum.Facebook,
    link: "",
    Icon: <AiFillFacebook className="w-5 h-5" />,
  },
  {
    name: SocialEnum.Twitter,
    link: "",
    Icon: <AiOutlineTwitter className="w-5 h-5" />,
  },
  {
    name: SocialEnum.GooglePlus,
    link: "",
    Icon: <AiOutlineGooglePlus className="w-5 h-5" />,
  },
  {
    name: SocialEnum.TumblR,
    link: "",
    Icon: <GrTumblr className="w-5 h-5" />,
  },
];

export const Treatments = [
  { title: "Dental Implant", description: "" },
  { title: "Root Canal Treatment", description: "" },
  { title: "Wisdom Tooth Removal", description: "" },
  { title: "Crown & Bridges", description: "" },
  { title: "Smile Design", description: "" },
  { title: "Dental Extraction", description: "" },
  { title: "Orthodontic Treatment", description: "" },
  { title: "Scaling & Polishing", description: "" },
  { title: "Gum Treatment", description: "" },
  { title: "Tooth Filling", description: "" },
  { title: "Full Mouth Rehabilitation", description: "" },
];
