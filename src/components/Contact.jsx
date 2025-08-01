import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-green-50 p-10" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-green-900 mb-6">{t('contact.title')}</h2>

  <div data-aos="fade-in">
    <p><strong>{t('contact.person')}:</strong> Евгени Смиленски</p>
    <p><strong>{t('contact.phone')}:</strong> 073 881 228, 0898 650 041, 0899 950 041, 0885 180 319</p>
    <p><strong>{t('contact.email')}:</strong> a_c_s@abv.bg</p>
    <p className="mt-4">
      <strong>{t('contact.instagram')}:</strong>{' '}
      <a href="https://www.instagram.com/acspltd" target="_blank" rel="noreferrer" className="text-green-700 underline">
        @acspltd
      </a>
    </p>
    <p>
      <strong>{t('contact.facebook')}:</strong>{' '}
      <a
        href="https://www.facebook.com/profile.php?id=100057144203397"
        target="_blank"
        rel="noreferrer"
        className="text-green-700 underline"
      >
        Facebook
      </a>
    </p>
  </div>
</section>

  );
};

export default Contact;
