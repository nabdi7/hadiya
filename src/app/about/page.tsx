import React from "react";
import AboutPage from "@/components/about/AboutPage";

export const metadata = {
  title: "About Hadiya Home Childcare | In Kent, WA provides full and part-time care for Infants, Toddlers, and Preschool students.",
  description:
    "Welcome to Hadiya Home Childcare, a trusted licensed daycare center in Kent, Washington. We create a warm, enriching environment where children thrive through play-based learning and cultural activities.",
  openGraph: {
    title: "About Hadiya Home Childcare | In Kent, WA provides full and part-time care for Infants, Toddlers, and Preschool students.",
    description:
      "Experience quality childcare at Hadiya Home Childcare in Kent, WA. Our licensed facility focuses on early childhood development through engaging activities, cultural learning, and personalized care.",
    type: "website",
    url: "https://hadiyachildcare.com/about",
  },
  twitter: {
    title: "About Hadiya Home Childcare - Kent, WA Daycare Center",
    description:
      "Join our family at Hadiya Home Childcare in Kent, WA. We provide licensed childcare services with a focus on early education, cultural enrichment, and creating a nurturing space for every child.",
  },
};

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;
