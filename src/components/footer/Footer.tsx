// components/Footer.tsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#A9B5F9] to-blue-600 bg-clip-text text-transparent">
              KidsCare
            </div>
            <p className="text-gray-600">
              Nurturing young minds with care and compassion since 2010.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Programs', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-[#A9B5F9]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {['Toddler Care', 'Preschool', 'After School', 'Summer Camp'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-[#A9B5F9]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span>info@kidscare.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span>123 Care Street, City</span>
              </div>
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