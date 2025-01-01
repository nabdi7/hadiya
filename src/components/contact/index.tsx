import { LucideIcon, Phone, Mail, MapPin } from "lucide-react";

export interface ContactFormState {
  formSubmitted: boolean;
  contactMessage: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}

export interface ContactMethod {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  details: string;
  description: string;
  link: string;
  linkProps: {
    target?: string;
    rel?: string;
  };
}

export const contactMethods: ContactMethod[] = [
  {
    icon: <Phone className="w-6 h-6 text-pink-500" />,
    title: "Call Us Anytime",
    details: "(206) 422-8654",
    description: "Available for Emergency Care",
    link: "tel:+12064228654",
    linkProps: {},
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-500" />,
    title: "Email Us",
    details: "khalfaj2000@gmail.com",
    description: "Response within 2 hours",
    link: "mailto:khalfaj2000@gmail.com",
    linkProps: {},
  },
  {
    icon: <MapPin className="w-6 h-6 text-yellow-500" />,
    title: "Our Location",
    details: "8411 8th Ave SW, Seattle, WA 98106",
    description: "Seattle, WA 98126",
    link: "https://maps.app.goo.gl/uCbDNx5tc2zp9FMj6",
    linkProps: { target: "_blank", rel: "noopener noreferrer" },
  },
];

export const initialFormState: ContactFormState = {
  formSubmitted: false,
  contactMessage: "",
  user_name: "",
  user_email: "",
  user_phone: "",
  message: "",
};
