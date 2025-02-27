import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';



const socialLinks = [
  { 
    name: 'Facebook', 
    url: 'https://www.facebook.com/share/18MZyV9xak/', 
    icon: <FaFacebookF className="w-6 h-6" />
  },
  { 
    name: 'WhatsApp', 
    url: 'https://wa.me/237679956338', 
    icon: <FaWhatsapp className="w-6 h-6" />
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/p_its_case?igsh=bzJ3YWRweGNnMDl3', 
    icon: <FaInstagram className="w-6 h-6" />
  }
];

export const SocialLinks = () => {
  return (
    <div className="flex space-x-6 items-center">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={`Suivez-nous sur ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};