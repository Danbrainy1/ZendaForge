export const BRAND = {
  name: "Zendaforge",
  shortName: "Zendaforge",
  tagline: "We Design. We Build. We Empower.",
  slogan: "Your Business. Our Code. Endless Possibilities.",
  phone: "+234 814 272 0498",
  phoneRaw: "+2348142720498",
  whatsappNumber: "2348142720498",
  email: "hello@zendaforge.com",
  emailAlt: "zendaforge@gmail.com",
  website: "www.zendaforge.com",
  websiteUrl: "https://www.zendaforge.com",
  logoUrl: "/zendaforge-full-logo.png",
  emblemUrl: "/zendaforge-emblem.png",
  flierUrl: "/zendaforge-full-logo.png",
  locations: "Lagos & Abuja, Nigeria (Global Remote)",
  hours: "Mon - Sat: 8:00 AM - 8:00 PM WAT",
};

export const getWhatsAppLink = (
  message: string = "Hello Zendaforge, I'd like to inquire about building a web platform."
) => {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
