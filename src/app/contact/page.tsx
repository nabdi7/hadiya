import React from "react";
import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Contact Hadiya Home Childcare | Kent, WA Daycare Enrollment",
  description:
    "Ready to enroll your child? Contact Hadiya Home Childcare in Kent, WA. Schedule a tour, learn about enrollment, or ask questions about our licensed daycare services.",
  openGraph: {
    title: "Contact Hadiya Home Childcare | Kent, WA Daycare Enrollment",
    description:
      "Connect with Hadiya Home Childcare in Kent, WA. Get information about our daycare programs, schedule a visit, or start the enrollment process for your child today.",
    type: "website",
    url: "https://hadiyachildcare.com/contact",
  },
  twitter: {
    title: "Contact Hadiya Home Childcare - Kent, WA Enrollment Info",
    description:
      "Get in touch with Hadiya Home Childcare in Kent, WA. Learn about our childcare programs, availability, and enrollment process. Schedule your visit today.",
  },
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
