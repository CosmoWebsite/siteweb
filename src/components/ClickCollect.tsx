import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface ClickCollectProps {
  language: 'fr' | 'en';
}

const ClickCollect: React.FC<ClickCollectProps> = ({ language }) => {
  const content = {
    fr: {
      title: 'Commandez et récupérez facilement vos burgers',
      subtitle: 'Préparez votre commande en ligne et récupérez-la directement au restaurant.',
    },
    en: {
      title: 'Order and Pick Up Your Burgers Easily',
      subtitle: 'Place your order online and pick it up directly at the restaurant.',
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#41522f] mb-6">
              {content[language].title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {content[language].subtitle}
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-32 bg-gray-100 rounded-md">
                <ShoppingBag className="h-12 w-12 text-[#707c62]" />
                <span className="ml-4 text-gray-500">
                  {language === 'fr' ? 'Module de commande à venir' : 'Order module coming soon'}
                </span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczO26W0wI7tJQcnXGgqY6hGGVgDE_Ir_wAxc1-85X5Fdkh0yJqomxcOELATqdt6M6_Lvap5kmQsrefaUL14jAOwDuO8W-5nwIembLECSAepRZbfcf_ihuvwQxF-PZBe7QFyyIQOiyyuAjJQV3b-PHFgC=w1500-h1080-s-no-gm"
              alt="Click & Collect"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center text-white">
                  <ShoppingBag className="h-6 w-6 mr-3" />
                  <span className="text-lg font-medium">
                    {language === 'fr' ? 'Prêt en 15-20 minutes' : 'Ready in 15-20 minutes'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClickCollect;