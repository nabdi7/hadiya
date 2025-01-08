import React from "react";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = ["Home", "About Us", "Programs", "Contact", "Enroll Now"];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[998]"
          onClick={onClose}
        />
      )}
      
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex flex-col h-full">
          <button
            onClick={onClose}
            className="p-4 flex justify-end"
          >
            <X className="w-6 h-6 text-[#A9B5F9]" />
          </button>

          <nav className="flex flex-col gap-4 p-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={`${
                  item === "Enroll Now"
                    ? "bg-[#A9B5F9] text-white px-6 py-3 rounded-full hover:bg-[#8b99f9] transition text-center mt-4"
                    : "text-gray-600 hover:text-[#A9B5F9] transition px-4 py-2 rounded-lg hover:bg-gray-50"
                }`}
                onClick={onClose}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;