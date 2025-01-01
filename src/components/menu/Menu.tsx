import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = ["Home", "About Us", "Programs", "Contact", "Enroll Now"];

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-80 bg-white z-[999] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } shadow-2xl`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="relative w-32 h-16">
            <Image
              src="/hadiya-transparent.png"
              alt="Hadiya Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col py-8 px-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className={`py-4 text-lg text-gray-600 hover:text-[#A9B5F9] transition-colors ${
                item === "Enroll Now"
                  ? "bg-[#A9B5F9] px-6 py-3 rounded-full text-center mt-4"
                  : "border-b border-gray-100"
              }`}
              onClick={onClose}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
