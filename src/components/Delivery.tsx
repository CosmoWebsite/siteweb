import React from 'react';
import { Truck } from 'lucide-react';

interface DeliveryProps {
  language: 'fr' | 'en';
}

const Delivery: React.FC<DeliveryProps> = ({ language }) => {
  const content = {
    fr: {
      title: 'Livrés chez vous, quand vous voulez',
      subtitle: 'Commandez nos délicieux burgers directement sur Uber Eats ou Deliveroo.',
    },
    en: {
      title: 'Delivered to You, When You Want',
      subtitle: 'Order our delicious burgers directly on Uber Eats or Deliveroo.',
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#41522f] mb-6">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600">
            {content[language].subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <a
            href="https://www.ubereats.com/fr/store/cosmo-burger/T3FJphpaUjSCCF4m3QP2jg?srsltid=AfmBOoqngS1Z0NcsxVkoDCsWt_0VDL5o-yzgKndjoM2Gz0zvxnzaU5Si"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          >
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczNcZfvW11yXtzCCsKGqRjTrLli0NzB3UJagAGlB-u9HcO6b_uL073AVoOnkDhF7ofiCoB3cDfrSyK38dUAXtgN-GqzMR7SqGg9sbWnG49YXGDRhLP-3z8KXC18NjZnXQqjlc10_Po7YKJtxXfMuIku7=w2076-h2076-s-no-gm?authuser=0"
              alt="Uber Eats"
              className="h-12"
            />
          </a>
          <a
            href="https://deliveroo.fr/fr/menu/paris/8eme-europe/cosmo-burger-paris"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          >
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczM7sxaFd4Teci1vaBog_SpK1XenvDuYh_tHEStFuDmnQ4baQl4m8uxSeKs02JLmI9dzTUmYwrCJQYDWUkucOet06b0YUZt_5aCOyrcuJxggddN_y_HdZ9_1_8gaY19UH5k9AHXHGJ38eHg9Qv7Ml6eH=w225-h225-s-no-gm?authuser=0"
              alt="Deliveroo"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Delivery;