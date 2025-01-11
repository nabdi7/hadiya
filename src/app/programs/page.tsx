import React from "react";
import ProgramsPage from "@/components/programs/ProgramsPage";

export const metadata = {
  title: "Childcare Programs | Hadiya Home Childcare Kent, WA",
  description:
    "Explore our comprehensive childcare programs at Hadiya Home Childcare in Kent, WA. We offer age-appropriate activities, early education, and cultural learning in a nurturing environment.",
  openGraph: {
    title: "Childcare Programs | Hadiya Home Childcare Kent, WA",
    description:
      "Quality childcare programs for all ages at Hadiya Home Childcare in Kent, WA. Our licensed daycare offers structured learning activities, cultural education, and engaging developmental programs.",
    type: "website",
    url: "https://hadiyachildcare.com/programs",
  },
  twitter: {
    title: "Childcare Programs - Hadiya Home Childcare Kent, WA",
    description:
      "Find the perfect childcare program for your child at Hadiya Home Childcare in Kent, WA. We offer structured activities, early learning, and cultural enrichment for every age group.",
  },
};

const page = () => {
  return (
    <div>
      <ProgramsPage />
    </div>
  );
};

export default page;
