"use client";
import emailjs from "@emailjs/browser";
import React, { useState, useRef, FormEvent } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

interface ContactFormState {
  formSubmitted: boolean;
  contactMessage: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}
const ContactPage = () => {
  const [
    {
      formSubmitted,
      // contactMessage,
      user_name,
      user_email, 
      user_phone,
      message,
    },
    setState,
  ] = useState<ContactFormState>({
    formSubmitted: false,
    contactMessage: "",
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  console.log("Service ID:", process.env.NEXT_PUBLIC_APP_SERVICE_ID);
  console.log("Template ID:", process.env.NEXT_PUBLIC_APP_TEMPLATE_ID);
  console.log("User ID:", process.env.NEXT_PUBLIC_APP_USER_ID);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_APP_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_APP_TEMPLATE_ID ?? "",
        formRef.current!,
        process.env.NEXT_PUBLIC_APP_USER_ID ?? ""
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setState((prevState) => ({
            ...prevState,
            formSubmitted: true,
            contactMessage: "We got your message. Thanks!",
          }));
          setTimeout(() => {
            setState((prevState) => ({
              ...prevState,
              contactMessage: "",
              user_name: "",
              user_phone: "",
              user_email: "",
              message: "",
              formSubmitted: false,
            }));
          }, 2000);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div className="relative bg-gradient-to-b from-[#A9B5F9]/5 to-white min-h-screen py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#A9B5F9]/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#A9B5F9]/8 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/4 w-[700px] h-[700px] bg-[#A9B5F9]/5 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="inline-block px-6 py-2 bg-[#A9B5F9]/15 rounded-full text-sm font-medium text-[#A9B5F9] mb-4 shadow-sm">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let&apos;s Start a
            <span className="block text-[#A9B5F9] mt-2">Conversation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Have questions about our programs? We&apos;re here to help you find the perfect fit for your child.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#A9B5F9]/15 rounded-full" />
              <h3 className="text-3xl font-bold text-gray-900 mb-6 relative">
                Get in Touch
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Phone size={24} />, text: "(206) 771-8840" },
                { icon: <Mail size={24} />, text: "abdiqadro5@gmail.com" },
                { icon: <Clock size={24} />, text: "Open: Daily 24 Hours" },
                { icon: <MapPin size={24} />, text: "11409 SE 219th PL, Kent, WA 98031" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#A9B5F9]/15 flex items-center justify-center text-[#A9B5F9] group-hover:bg-[#A9B5F9]/25 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                  type="text"
                  name="user_name"
                  value={user_name}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      user_name: e.target.value,
                    }))
                  }
                  required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#A9B5F9]"
                  />
                </div>
                {/* phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="user_phone"
                    value={user_phone}
                    onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      user_phone: e.target.value,
                    }))
                      }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#A9B5F9]"
                  />
                  </div> 
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={user_email}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        user_email: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#A9B5F9]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        message: e.target.value,
                      }))
                    }
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#A9B5F9]"
                  />
                </div>
                <button className="w-full bg-[#A9B5F9] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                  Send Message
                </button>
                {formSubmitted && (
                  <p className="text-[#A9B5F9]">
                    Message received. Successfull!!.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="relative group mt-16">
          
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="w-full h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.338914890002!2d-122.1888045!3d47.405330199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905dd89377c3f5%3A0x6e5d903978bd9f29!2sHadiya%20Home%20Childcare!5e0!3m2!1sen!2sus!4v1736304112892!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;