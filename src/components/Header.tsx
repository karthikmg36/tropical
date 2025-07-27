import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language,setLanguage] = useState(false);
  const { i18n, t } = useTranslation();
  const location = useLocation();

  // Determine if header should be considered scrolled
  const isScrolledOrNotHome = isScrolled || location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // const onChange=(e) => {
  //   const isGerman = e.target.checked;
  //   setLanguage(isGerman);
  //   i18n.changeLanguage(isGerman ? 'de' : 'en');
  // }

  const onChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isEnglish = e.target.checked;
    setLanguage(isEnglish);
    i18n.changeLanguage(isEnglish ? 'en' : 'de');
  };


  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.products'), href: '/products' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  // function handelLanguage(){
  //   setisGerman((prev)=>!prev);
  // }

  return (
      <>
        {/* Optional background overlay when mobile menu is open */}
        {isMenuOpen && (
            <div
                className="fixed inset-0 z-40 bg-black/30 md:hidden"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
            />
        )}

        <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 group">
                <div
                    className={`${
                        isScrolledOrNotHome
                            ? 'p-2 bg-gradient-to-r from-green-800 to-green-900 rounded-full'
                            : 'p-0 bg-transparent'
                    } group-hover:scale-110 transition-transform duration-300`}
                >
                  <Leaf
                      className={`h-6 w-6 ${
                          isScrolledOrNotHome ? 'text-white' : 'text-green-800'
                      }`}
                  />
                </div>
                <span
                    className={`text-xl font-bold ${
                        isScrolledOrNotHome
                            ? 'text-green-800'
                            : 'bg-gradient-to-r from-green-800 to-green-900 bg-clip-text text-transparent'
                    }`}
                >
                Tropical Foods - wholesale and retail store
              </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                      <Link
                          key={item.name}
                          to={item.href}
                          className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                              isActive
                                  ? isScrolledOrNotHome
                                      ? 'text-green-800'
                                      : 'text-black'
                                  : isScrolledOrNotHome
                                      ? 'text-gray-700 hover:text-green-800'
                                      : 'text-black/90 hover:text-black'
                          }`}
                      >
                        {item.name}
                        {isActive && (
                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-800 to-green-900 rounded-full"></div>
                        )}
                      </Link>
                  );
                }  

                )}
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" checked={language} onChange={onChangeLanguage}/> 
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">English</span>
                </label>
              </nav>

              {/* Mobile Menu Button */}
              <button
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                  className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                      isScrolledOrNotHome
                          ? 'text-gray-700 hover:bg-gray-100'
                          : 'text-green-800 hover:bg-green-100'
                  }`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 overflow-hidden animate-in slide-in-from-top-2 duration-200 z-50">
                  <nav className="px-4 py-2">
                    {navigation.map((item) => {
                      const isActive = location.pathname === item.href;
                      return (
                          <Link
                              key={item.name}
                              to={item.href}
                              className={`block py-3 px-2 font-medium transition-colors duration-300 ${
                                  isActive
                                      ? 'text-green-800 bg-green-50 rounded-lg'
                                      : 'text-gray-700 hover:text-green-800 hover:bg-gray-50 rounded-lg'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                      );
                    })}
                     <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer"/>
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">English</span>
                    </label>
                  </nav>
                </div>
            )}
          </div>
        </header>
      </>
  );
};

export default Header;