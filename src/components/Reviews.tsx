import React from 'react';
import { Star } from 'lucide-react';

interface ReviewsProps {
  language: 'fr' | 'en';
}

const Reviews: React.FC<ReviewsProps> = ({ language }) => {
  const reviews = {
    fr: [
      {
        text: "Un délice à chaque bouchée ! Les meilleurs burgers que j'ai goûtés à Paris.",
        author: "Marie L.",
      },
      {
        text: "La qualité des ingrédients fait toute la différence. Un vrai régal !",
        author: "Sophie M.",
      },
      {
        text: "Une expérience culinaire exceptionnelle, à ne pas manquer !",
        author: "Thomas B.",
      },
    ],
    en: [
      {
        text: "A delight in every bite! The best burgers I've tasted in Paris.",
        author: "Marie L.",
      },
      {
        text: "The quality of ingredients makes all the difference. A real treat!",
        author: "Sophie M.",
      },
      {
        text: "An exceptional culinary experience, not to be missed!",
        author: "Thomas B.",
      },
    ],
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Rating Section */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-white shadow-xl rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczNqUe9MwT-440HjTL-UR6h9eOLZd_R8w3rT_1sNwmBHuW3pTO_5UmFN3FkS6Tt9K67Y56JPYdip5prDWn-ZthvTz1lCUI-BsTi82qF92v4qn6qKwDHOQ3pAWX-8GsdFmxsuCQXTSHg6ZW-sj6rvzGJB=w959-h479-s-no-gm?authuser=0"
                alt="Google Reviews"
                className="h-8"
              />
            </div>
            <div className="text-4xl font-bold text-[#41522f] mb-2">4.9</div>
            <div className="text-gray-600">
              {language === 'fr' ? '+200 avis clients' : '+200 customer reviews'}
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#41522f] mb-12">
          {language === 'fr' ? 'Recommandé par nos clients !' : 'Recommended by our customers!'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews[language].map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
              <p className="font-semibold text-[#41522f]">– {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;