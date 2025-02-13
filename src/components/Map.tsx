import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface MapProps {
  language: 'fr' | 'en';
}

const Map: React.FC<MapProps> = ({ language }) => {
  const content = {
    fr: {
      title: 'Nous Trouver',
      getDirections: 'Obtenir l\'itinéraire',
    },
    en: {
      title: 'Find Us',
      getDirections: 'Get Directions',
    }
  };

  const address = '13 Boulevard des Batignolles, 75008 Paris';
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.9721937175474!2d2.3175083!3d48.8824422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fb36ec5fa69%3A0x851c90e0c44df4d1!2s13%20Bd%20des%20Batignolles%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1710371547961!5m2!1sfr!2sfr`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#41522f] flex items-center justify-center gap-2">
            <MapPin className="h-8 w-8" />
            {content[language].title}
          </h2>
        </div>
        
        <div className="relative">
          <div className="relative aspect-w-16 aspect-h-9">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
            <div className="absolute top-4 right-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#41522f] px-6 py-3 rounded-md hover:bg-gray-50 transition-colors shadow-lg"
              >
                <Navigation className="h-5 w-5" />
                {content[language].getDirections}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;