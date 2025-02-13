import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, setLanguage }) => {
  return (
    <div className="flex items-center">
      <Globe className="h-5 w-5 text-[#41522f] mr-2" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
        className="bg-transparent text-[#41522f] cursor-pointer focus:outline-none"
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageToggle;