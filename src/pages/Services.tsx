import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Truck,
  Clock,
  Shield,
  Gift,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Package,
  Leaf,
  Heart
} from 'lucide-react';
import { useTranslation } from 'react-i18next';



const Services = () => {
  const { i18n, t } = useTranslation();
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
      <div className="pt-16 bg-gray-100 dark:bg-gray-900">
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-6">{t('services.comingsoon')}</h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                {/* Choose the service that fits your needs and start enjoying fresh tropical fruits today. */}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button className="inline-flex items-center px-8 py-4 bg-white text-green-800 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                  Start Subscription
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button> */}
                {/* <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-green-800 transition-all duration-300 hover:scale-105">
                 <Link
                  to="/contact"
                 >Contact Us</Link> 
                </button> */}
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Services;