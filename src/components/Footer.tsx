import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Leaf,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolledOrNotHome = isScrolled || location.pathname !== '/';
  const textColorClass = isScrolledOrNotHome ? 'text-white' : 'text-black';
  const iconColorClass = isScrolledOrNotHome ? 'text-white' : 'text-black';

  return (
      <footer className={`bg-gradient-to-b from-green-900 to-green-950 ${isScrolledOrNotHome ? 'text-white' : 'text-black'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-green-700 to-green-800 rounded-full">
                  <Leaf className={`h-6 w-6 ${iconColorClass}`} />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                {t('footer.brand')}
              </span>
              </div>
              <p className={`leading-relaxed ${textColorClass}`}>
                {t('footer.branddec')}
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                    <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-110"
                        aria-label={`Follow us on ${Icon.name}`}
                    >
                      <Icon className={`h-5 w-5 ${iconColorClass}`} />
                    </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: t('nav.home'), href: '/' },
                  { name: t('nav.about'), href: '/about' },
                  { name: t('nav.products'), href: '/products' },
                  { name: t('nav.services'), href: '/services' },
                  { name: t('nav.contact'), href: '/contact' },
                ].map((link) => (
                    <li key={link.name}>
                      <Link
                          to={link.href}
                          className={`hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block ${textColorClass}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Popular Products</h3>
              <ul className="space-y-3">
                {t('footer.products', { returnObjects: true }).map((product) => (
                    <li key={product}>
                  <span className={`hover:text-green-400 transition-colors duration-300 cursor-pointer ${textColorClass}`}>
                    {product}
                  </span>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className={`h-5 w-5 mt-1 flex-shrink-0 ${iconColorClass}`} />
                  <span className={textColorClass}>
                  266, Altendorfer str,<br />
                  Essen 45143, Germany
                </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className={`h-5 w-5 ${iconColorClass}`} />
                  <span className={textColorClass}>0201-8009-5818</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className={`h-5 w-5 ${iconColorClass}`} />
                  <a href="mailto:tropicalfoods830@yahoo.com" className={`hover:text-green-400 ${textColorClass}`}>
                    tropicalfoods830@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Footer */}
          <div className="border-t border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`flex items-center flex-wrap gap-1 ${textColorClass}`}>
              © {new Date().getFullYear()} Tropical Food Store. Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for authentic food lovers.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link
                  to="/privacy-policy"
                  className={`hover:text-green-400 transition-colors duration-300 ${textColorClass} text-sm`}
              >
                Privacy Policy
              </Link>
              <Link
                  to="/impressum"
                  className={`hover:text-green-400 transition-colors duration-300 ${textColorClass} text-sm`}
              >
                Legal Notice (Impressum)
              </Link>
              <Link
                  to="/terms"
                  className={`hover:text-green-400 transition-colors duration-300 ${textColorClass} text-sm`}
              >
                Terms & Conditions
              </Link>
              <Link
                  to="/cookies"
                  className={`hover:text-green-400 transition-colors duration-300 ${textColorClass} text-sm`}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;