export const BRAND = {
  name: "Web-Craft Projects",
  shortName: "Web-Craft",
  tagline: "We Design. We Build. We Empower.",
  slogan: "Your Business. Our Code. Endless Possibilities.",
  phone: "+234 814 272 0498",
  phoneRaw: "+2348142720498",
  whatsappNumber: "2348142720498",
  email: "webcraftprojects@gmail.com",
  website: "www.webcraftprojects.com",
  websiteUrl: "https://www.webcraftprojects.com",
  logoUrl: "/WEBCRAFT-LOGO.png",
  flierUrl: "/WEBCRAFT-FLIER.png",
  locations: "Lagos & Abuja, Nigeria",
  hours: "Mon - Sat: 8:00 AM - 8:00 PM WAT",
};

export const getWhatsAppLink = (
  message: string = "Hello Web-Craft Projects, I'd like to inquire about building a website."
) => {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
