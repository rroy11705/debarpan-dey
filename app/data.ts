export type Project = {
  name: string;
  url?: string;
  role: string;
  duration: string;
  blurb: string;
  detail: string;
};

export const projects: Project[] = [
  {
    name: "Tata Tiscon",
    url: "https://tatatiscon.co.in",
    role: "Website Re-Design",
    duration: "03 Months",
    blurb: "Tata Steel's most profitable vertical.",
    detail: "Keeping the vibe similar with a bit of modern touch.",
  },
  {
    name: "Flex Worx",
    url: "https://flexworx.theqa.in/",
    role: "Website Re-Design",
    duration: "03 Weeks\n+1 Week",
    blurb: "One of the most renowned Kolkata's office space solution provider.",
    detail: "User Interface and Experience updates to current UI trend.",
  },
  {
    name: "The QA",
    role: "Website Re-Design",
    duration: "06 Months,\ncontinuous updating UI",
    blurb:
      "Dedicated platform that provides exclusive discounts and offers, creating a positive impact on their academic journey.",
    detail:
      "Targeting Genz audience (college-goers), Attractive UI, Fun Illustrations.",
  },
  {
    name: "Sconto",
    url: "https://www.sconto.ai/",
    role: "Mobile App, Website Design & Social Media Designs.",
    duration: "06 Months,\ncontinuous updating UI",
    blurb:
      "Dedicated platform that provides exclusive discounts and offers, creating a positive impact on their academic journey.",
    detail:
      "Targeting Genz audience (college-goers), Attractive UI, Fun Illustrations.",
  },
  {
    name: "Hour Consulting",
    url: "https://hourconsulting.com/",
    role: "Website Design",
    duration: "06 Months",
    blurb: "A Global recruitment and Human Resources (HR) solutions firm.",
    detail: "New generation targeting, use of bright colours.",
  },
  {
    name: "The Darjeeling Brew",
    url: "https://thedarjeelingbrew.com/",
    role: "Website Re-Design",
    duration: "05 Days",
    blurb:
      "A luxurious Tea brand offering premium tea leaves in Pan India and exporting to France.",
    detail:
      "Keeping the UX similar, the design had to be polished and made cleaner.",
  },
  {
    name: "Unito (Chandramukhi Impex)",
    url: "https://unito.co.in/",
    role: "Website Redesign",
    duration: "2 Weeks",
    blurb:
      "India's one of the largest distributor of Work wear and Industrial Clothing.",
    detail:
      "Vibrant and Client proposed colour specified for two separate business models.",
  },
];

export const skills = [
  "Figma",
  "Adobe XD",
  "Prototyping",
  "Wireframing",
  "Visual Design",
  "Usability Testing",
  "Design Systems",
  "Typography",
  "UX Strategy",
  "Micro Interactions",
  "ChatGPT - Visual Generation",
  "Claude - UX Research & Documentations",
];

export const PHONE = "+91 86975 - 00538";
export const PHONE_HREF = "tel:+918697500538";
export const EMAIL = "desgn.dd@gmail.com";
export const EMAIL_HREF = "mailto:desgn.dd@gmail.com";

/** Compact stat pills for the mobile hero */
export const stats = [
  { label: "Senior UI/UX Designer" },
  { label: "30+ Clients" },
  { label: "Exp: 4.6 years" },
  { label: PHONE, href: PHONE_HREF },
  { label: EMAIL, href: EMAIL_HREF },
];
