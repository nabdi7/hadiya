import React from "react";
import AboutPage from "@/components/about/AboutPage";

export const metadata = {
  title: "About Hadiya Family Childcare | Licensed Daycare in Kent, WA",
  description:
    "Welcome to Hadiya Family Childcare, a trusted licensed daycare center in Kent, Washington. We create a warm, enriching environment where children thrive through play-based learning and cultural activities.",
  openGraph: {
    title: "About Hadiya Family Childcare | Licensed Daycare in Kent, WA",
    description:
      "Experience quality childcare at Hadiya Family Childcare in Kent, WA. Our licensed facility focuses on early childhood development through engaging activities, cultural learning, and personalized care.",
    type: "website",
    url: "https://hadiyachildcare.com/about",
  },
  twitter: {
    title: "About Hadiya Family Childcare - Kent, WA Daycare Center",
    description:
      "Join our family at Hadiya Family Childcare in Kent, WA. We provide licensed childcare services with a focus on early education, cultural enrichment, and creating a nurturing space for every child.",
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
