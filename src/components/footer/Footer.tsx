"use client";
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
    { name: 'Enroll Now', path: '/enroll-now' },
  ];

  const programLinks = [
    { name: 'Infant Care', path: '/programs#infant' },
    { name: 'Toddler Care', path: '/programs#toddler' },
    { name: 'Preschool', path: '/programs#preschool' },
    { name: 'After School', path: '/programs#after-school' },
  ];

  return (
    <footer className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#A9B5F9] to-blue-600 bg-clip-text text-transparent">
                Hadiya
              </div>
            </Link>
            <p className="text-gray-600">
              Nurturing young minds with care and compassion since 2018.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-gray-600 hover:text-[#A9B5F9] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-gray-600 hover:text-[#A9B5F9] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <Link 
                href="tel:+1234567890" 
                className="flex items-center gap-2 text-gray-600 hover:text-[#A9B5F9] transition-colors"
              >
                <Phone size={16} />
                <span>(206) 771-8840</span>
              </Link>
              <Link 
                href="mailto:info@hadiya.com"
                className="flex items-center gap-2 text-gray-600 hover:text-[#A9B5F9] transition-colors"
              >
                <Mail size={16} />
                <span>abdiqadro5@gmail.com</span>
              </Link>
              <Link 
                href="https://maps.app.goo.gl/X8hp5qo6G6KmxrHE9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#A9B5F9] transition-colors"
              >
                <MapPin size={16} />
                <span>11409 Southeast 219th Place Kent, WA</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Hadiya Childcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;