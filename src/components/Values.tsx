import React from 'react';
import { Leaf, Award, Heart } from 'lucide-react';

interface ValuesProps {
  language: 'fr' | 'en';
}

const Values: React.FC<ValuesProps> = ({ language }) => {
  const content = {
    fr: {
      values: [
        {
          icon: Leaf,
          title: 'Ingrédients Premium',
          description: 'Nous sélectionnons rigoureusement nos ingrédients pour garantir une qualité exceptionnelle.'
        },
        {
          icon: Award,
          title: 'Fait Maison',
          description: 'La viande est hachée sur place, le pain livré chaque jour, et nos desserts sont faits maison. Chaque burger est préparé avec soin.'
        },
        {
          icon: Heart,
          title: 'Engagement Local',
          description: 'Fiers de faire partie de la communauté des Batignolles.'
        }
      ]
    },
    en: {
      values: [
        {
          icon: Leaf,
          title: 'Premium Ingredients',
          description: 'We carefully select our ingredients to ensure exceptional quality.'
        },
        {
          icon: Award,
          title: 'Homemade',
          description: 'The meat is ground on site, bread delivered daily, and our desserts are homemade. Each burger is carefully prepared.'
        },
        {
          icon: Heart,
          title: 'Local Commitment',
          description: 'Proud to be part of the Batignolles community.'
        }
      ]
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content[language].values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="bg-[#41522f]/10 p-4 rounded-full mb-6">
                  <Icon className="h-8 w-8 text-[#41522f]" />
                </div>
                <h3 className="text-xl font-bold text-[#41522f] mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;