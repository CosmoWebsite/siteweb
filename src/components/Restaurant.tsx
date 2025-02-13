import React, { useEffect, useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import client from "../Lib/sanityClient.js";

interface RestaurantProps {
  language: "fr" | "en";
}

const Restaurant: React.FC<RestaurantProps> = ({ language }) => {
  const content = {
    fr: {
      title: "Notre Restaurant",
      subtitle: "Une ambiance chaleureuse au cœur des Batignolles",
      description:
        "Découvrez notre espace convivial où chaque détail a été pensé pour votre confort. Un cadre moderne et chaleureux pour savourer nos délicieux burgers.",
      atmosphere: "Ambiance décontractée",
      service: "Service attentionné",
      experience: "Expérience unique",
    },
    en: {
      title: "Our Restaurant",
      subtitle: "A warm atmosphere in the heart of Batignolles",
      description:
        "Discover our friendly space where every detail has been designed for your comfort. A modern and warm setting to enjoy our delicious burgers.",
      atmosphere: "Relaxed atmosphere",
      service: "Attentive service",
      experience: "Unique experience",
    },
  };
  const [phone, setPhone] = useState("Chargement...");

  useEffect(() => {
    async function fetchPhone() {
      try {
        const query = `*[_type == "phone"][0]{number}`;
        const data = await client.fetch(query);
        setPhone(data?.number || "Numéro non disponible");
      } catch (error) {
        console.error("Erreur lors de la récupération du numéro:", error);
        setPhone("Erreur");
      }
    }

    fetchPhone();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#41522f] mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600">{content[language].subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="relative h-80 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczMLCov0XH6zuwfL06_rh8PT_oTj9_CF5zeOmrqyNsM-aLydUWbGLpiPxr0vz48o1EFEKPbyq2Y_y3vMUrmqB8oq1WJYTKC1A7Ek1QlrouDZ5f82XlZiqYGCAIPkzF_bjArJQdbLtX4gPNeETZBFNEwn=w2076-h2076-s-no-gm?authuser=0"
              alt="Restaurant interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <span className="text-white font-medium">
                {content[language].atmosphere}
              </span>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczOxYyTnPCU4Gpwoqx6bu8w2axIgZ9TcsEVOi4ADYSjDO0xhQAVMS1D6UQ1TDGo1cCBzORDqVxwCxJ9ZqeTVHC6cNOcZnZ38_HbM4Unx726Fe60cwDQT3hA4h28kbMElEUb1EYkfnonnyfE6sWUwZxSt=w2076-h2076-s-no-gm?authuser=0"
              alt="Restaurant service"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <span className="text-white font-medium">
                {content[language].service}
              </span>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczOrUGUdrMPHrUXzcopPVpOpRhDxob2qQFLyKoIL9w3kafU2yZd2mm9cwxNdQwoqIVFyf3aH4Nk6wZE_t0ahbxeegGtWJSzZqsPoqQjl8tl7Qjc7Xcj5RirH0t8gLZW9L3JJ3GeY6-RoL8j29P0PSOQ1=w2076-h2076-s-no-gm?authuser=0"
              alt="Restaurant experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <span className="text-white font-medium">
                {content[language].experience}
              </span>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg mb-8">
            {content[language].description}
          </p>
          <div className="flex justify-center gap-8 text-[#41522f]">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>13 Bd des Batignolles</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>11:30 - 23:00</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>{phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
