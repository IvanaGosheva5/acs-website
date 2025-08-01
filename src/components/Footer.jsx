import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-green-900 text-yellow-200 text-center p-4">
      <p>&copy; {new Date().getFullYear()} {t('common.company')}. {t('footer.rights')}</p>
    </footer>
  );
};

export default Footer;
