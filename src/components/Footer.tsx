import { Mic, Sparkles, Mail, MapPin, Phone, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'How It Works', 'Pricing', 'Download'],
    Company: ['About Us', 'Careers', 'Press', 'Contact'],
    Support: ['Help Center', 'Community', 'Privacy Policy', 'Terms of Service'],
    Developers: ['API Documentation', 'SDK', 'Webhooks', 'Status'],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Mic className="h-8 w-8 text-primary-400" />
                <Sparkles className="h-4 w-4 text-secondary-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold text-white">KaraML</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Revolutionizing karaoke with AI-powered recommendations, smart queueing, and personalized experiences for singers everywhere.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary-400" />
              <span className="text-white/70">hello@karaml.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-secondary-400" />
              <span className="text-white/70">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span className="text-white/70">San Francisco, CA</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">
              © 2024 KaraML. All rights reserved. Built with ❤️ for karaoke lovers.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;