import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and short about */}
          <div className="md:col-span-1">
            <Link 
              to="home" 
              smooth={true} 
              duration={800} 
              className="text-2xl font-display font-bold text-white cursor-pointer"
            >
              DreamingVaishnav
            </Link>
            <p className="mt-4 text-neutral-400">
              Crafting exceptional digital experiences with passion and precision.
            </p>
            
            {/* Social media */}
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <Github size={20} />, url: "#", label: "Github" },
                { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
                { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
                { icon: <Instagram size={20} />, url: "#", label: "Instagram" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={800}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'UI/UX Design', 
                'Web Development', 
                'Mobile Apps', 
                'AI Integration',
                'Consultation'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-400">
                maharashtra , mumbai
              </li>
              <li>
                <a href="mailto:hello@johndoe.com" className="text-neutral-400 hover:text-white transition-colors duration-300">
                  daydreamingvaishu@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-neutral-400 hover:text-white transition-colors duration-300">
                  +91 9167925510
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;