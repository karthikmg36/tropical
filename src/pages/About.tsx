import { useEffect } from 'react';
import {
  Users,
  Award,
  Globe,
  Heart,
  Leaf,
  Target,
  Eye,
  Star
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {

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
  });

  const values = [
    {
      icon: Heart,
      title: t('about.values.heart.title'),
      description: t('about.values.heart.description')
    },
    {
      icon: Globe,
      title: t('about.values.globe.title'),
      description: t('about.values.globe.description')
    },
    {
      icon: Leaf,
      title: t('about.values.leaf.title'),
      description: t('about.values.leaf.description')
    },
    {
      icon: Users,
      title: t('about.values.user.title'),
      description: t('about.values.user.description')
    }
  ];

  const team = [
    // {
    //   name: t('about.teamobj.founder.name'),
    //   role: t('about.teamobj.founder.role'),
    //   bio: t('about.teamobj.founder.bio'),
    //   image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    // {
    //   name: t('about.teamobj.operations.name'),
    //   role: t('about.teamobj.operations.role'),
    //   bio: t('about.teamobj.operations.bio'),
    //   image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    // {
    //   name: t('about.teamobj.quality.name'),
    //   role: t('about.teamobj.quality.role'),
    //   bio: t('about.teamobj.quality.bio'),
    //   image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    // }
  ];

  const milestones = [
    { year: '2020', event: t('about.milestones.2020.title'), description: t('about.milestones.2020.description') },
    { year: '2021', event: t('about.milestones.2021.title'), description: t('about.milestones.2021.description') },
    { year: '2022', event: t('about.milestones.2022.title'), description: t('about.milestones.2022.description') },
    { year: '2023', event: t('about.milestones.2023.title'), description: t('about.milestones.2023.description') },
    { year: '2024', event: t('about.milestones.2024.title'), description: t('about.milestones.2024.description') },
    { year: '2025', event: t('about.milestones.2025.title'), description: t('about.milestones.2025.description') }
  ];

  return (
      <div className="pt-16 bg-gray-100 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {t('about.story')}
                  <span className="block text-yellow-300">Tropical Passion</span>
                </h1>
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                  {t('about.storydesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-green-700 dark:text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('about.mission')}</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {t('about.missiondesc')}
                </p>

                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-green-700 dark:text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('about.vision')}</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('about.visiondesc')}
                </p>
              </div>

              <div className="fade-in relative">
                <div className="aspect-square bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 text-white">
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <Award className="h-16 w-16 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{t('about.promise')}</h3>
                    <p className="text-lg">
                      {t('about.promisedesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.corevalue')}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('about.principal')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                  <div
                      key={value.title}
                      className="fade-in bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
                      style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-green-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.team')}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('about.teamdesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                  <div
                      key={member.name}
                      className="fade-in text-center group"
                      style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative mb-6">
                      <img
                          src={member.image}
                          alt={member.name}
                          className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-700/20 dark:from-green-800/30 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-green-700 dark:text-green-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Timeline */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.journey')}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t('about.journeydesc')}
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-700 to-green-800 rounded-full"></div>

              {milestones.map((milestone, index) => (
                  <div
                      key={milestone.year}
                      className={`fade-in relative flex items-center mb-12 ${
                          index % 2 === 0 ? 'justify-start' : 'justify-end'
                      }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-2xl font-bold text-green-700 dark:text-green-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-700 to-green-800 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-6">{t('about.join')}</h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                {t('about.joindesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-green-800 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  {t('about.touch')}
                </a>
                <a
                    href="/products"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-green-800 transition-all duration-300 hover:scale-105"
                >
                  {t('about.shopnow')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default About;