import React from "react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Contact", path: "/contact" },
    { name: "Enroll Now", path: "/contact" },
  ];

  return (
    <footer className="bg-[#A9B5F9]/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight ">
            Hadiya Home Childcare
          </h2>
          <div className="space-y-3">
            <p className="text-lg text-gray-600 hover:text-gray-800 transition-colors">
              11409 Southeast 219th Place, Kent, WA 98031
            </p>
            <a
              href="tel:+12067718840"
              className="text-2xl font-semibold text-[#A9B5F9] hover:text-[#8494f8] transition-colors inline-block"
            >
              (206) 771-8840
            </a>
          </div>
        </div>

        <nav className="mt-12">
          <ul className="flex flex-wrap justify-center gap-8">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-sm text-gray-600 hover:text-[#A9B5F9] transition-all duration-200 font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-200 mt-12 pt-8 space-y-2">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hadiya Childcare. All rights
            reserved.
          </p>
          <p className="text-center text-gray-500 text-sm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://qdwebdesigns.com"
              className="text-[#8494f8] hover:text-[#8494f8] transition-colors"
            >
              QD Web Designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
