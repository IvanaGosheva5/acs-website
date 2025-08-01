import React from 'react';
import i18n from '../i18n';

const languages = [
  { code: 'bg', label: 'БГ' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'РУ' },
  { code: 'de', label: 'DE' },
  { code: 'el', label: 'GR' }
];

const LanguageSwitcher = () => {
  const current = i18n.language;

  return (
    <div className="flex space-x-2">
      {languages.map(l => (
        <button
          key={l.code}
          onClick={() => i18n.changeLanguage(l.code)}
          className={`px-2 py-1 rounded text-sm ${
            current === l.code ? 'bg-yellow-400 text-green-900 font-bold' : 'bg-green-800 text-yellow-200'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
