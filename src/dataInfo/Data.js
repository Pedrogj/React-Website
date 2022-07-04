import img1 from "../images/svg-1.svg";
import img2 from "../images/svg-2.svg";
import img3 from "../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headLine: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: img1,
  alt: "card",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Unlimited Access",
  headLine: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: img2,
  alt: "cardBank",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Premium Bank",
  headLine: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: img3,
  alt: "paper",
  dark: false,
  primary: false,
  darkText: true,
};
