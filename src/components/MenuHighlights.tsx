import React from 'react';
import { Beef, Flame, UtensilsCrossed } from 'lucide-react';

interface MenuHighlightsProps {
  language: 'fr' | 'en';
}

const MenuHighlights: React.FC<MenuHighlightsProps> = ({ language }) => {
  const content = {
    fr: {
      title: 'Nos Burgers Signatures',
      description: 'Découvrez nos créations uniques qui font notre renommée',
      burgers: [
        {
          name: 'Le Canadien',
          description: 'Pain brioché maison, steak haché frais 180g, sirop d\'érable, bacon de bœuf grillé, œuf, oignons crispy, mayonnaise et sauce barbecue',
          icon: Flame,
          tag: 'BEST-SELLER'
        },
        {
          name: 'Le Reblochon',
          description: 'Pain brioché maison, steak haché frais 180g, salade, oignons rouges, tomates, fromage reblochon, sauce maison',
          icon: Beef,
          tag: 'CLASSIQUE'
        },
        {
          name: 'Le Cosmo',
          description: 'Pain brioché maison, poulet crunchy maison, cheddar, avocat, poivrons grillés, oignons rouges, sauce tex-mex maison',
          icon: UtensilsCrossed,
          tag: 'SIGNATURE'
        }
      ]
    },
    en: {
      title: 'Our Signature Burgers',
      description: 'Discover our unique creations that made our reputation',
      burgers: [
        {
          name: 'The Canadian',
          description: 'Homemade brioche bun, fresh ground beef 180g, maple syrup, grilled beef bacon, egg, crispy onions, mayonnaise and BBQ sauce',
          icon: Flame,
          tag: 'BEST-SELLER'
        },
        {
          name: 'The Reblochon',
          description: 'Homemade brioche bun, fresh ground beef 180g, lettuce, red onions, tomatoes, reblochon cheese, house sauce',
          icon: Beef,
          tag: 'CLASSIC'
        },
        {
          name: 'The Cosmo',
          description: 'Homemade brioche bun, homemade crunchy chicken, cheddar, avocado, grilled peppers, red onions, homemade tex-mex sauce',
          icon: UtensilsCrossed,
          tag: 'SIGNATURE'
        }
      ]
    }
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#41522f] mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600">
            {content[language].description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content[language].burgers.map((burger, index) => {
            const Icon = burger.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <Icon className="h-8 w-8 text-[#41522f]" />
                  <span className="bg-[#41522f] text-white text-xs px-2 py-1 rounded">
                    {burger.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#41522f] mb-2">{burger.name}</h3>
                <p className="text-gray-600">{burger.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MenuHighlights;