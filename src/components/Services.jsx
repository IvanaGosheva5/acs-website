import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="p-10 bg-yellow-100" data-aos="fade-left">
  <h2 className="text-3xl font-bold text-green-900 mb-6">{t('services.title')}</h2>
  <ul className="list-disc list-inside space-y-2 max-w-3xl mx-auto text-green-900">
    <li data-aos="fade-right" data-aos-delay="100">{t('services.service1')}</li>
    <li data-aos="fade-right" data-aos-delay="200">{t('services.service2')}</li>
    <li data-aos="fade-right" data-aos-delay="300">{t('services.service3')}</li>
    <li data-aos="fade-right" data-aos-delay="400">{t('services.service4')}</li>
    <li data-aos="fade-right" data-aos-delay="500">{t('services.service5')}</li>
  </ul>
</section>

  );
};

export default Services;
