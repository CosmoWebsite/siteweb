import React, { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import client from "../Lib/sanityClient.js";

interface HeroSectionProps {
  language: "fr" | "en";
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPdfUrl, setMenuPdfUrl] = useState("");

  const content = {
    fr: {
      title: "Découvrez le Meilleur Burger des Batignolles",
      subtitle: "Artisan burgers faits maison, avec des ingrédients frais.",
      cta1: "Voir le menu",
      cta2: "Click & Collect",
      closeMenu: "Fermer",
    },
    en: {
      title: "Discover the Best Burger in Batignolles",
      subtitle: "Handcrafted burgers made with fresh ingredients.",
      cta1: "View Menu",
      cta2: "Click & Collect",
      closeMenu: "Close",
    },
  };

  useEffect(() => {
    async function fetchMenu() {
      try {
        const query = `*[_type == "menu"][0]{ "fileUrl": file.asset->url }`;
        const data = await client.fetch(query);
        setMenuPdfUrl(data?.fileUrl || "");
      } catch (error) {
        console.error("Erreur lors de la récupération du menu PDF:", error);
      }
    }

    fetchMenu();
  }, []);

  console.log("Menu PDF URL:", menuPdfUrl);

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Burger"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-medium text-white/90 mb-6 tracking-wide">
              {content[language].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {content[language].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowMenu(true)}
                className="bg-[#41522f] text-white px-8 py-3 rounded-md hover:bg-[#707c62] transition-colors flex items-center justify-center"
              >
                {content[language].cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white text-[#41522f] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
                {content[language].cta2}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Modal sans iframe */}
      {showMenu && menuPdfUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
            {/* Bouton Fermer */}
            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-black p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Contenu du menu */}
            <div className="flex-1 overflow-auto p-6">
              <h2 className="text-xl font-semibold mb-4 text-center">
                {content[language].cta1}
              </h2>

              <div className="border rounded-lg overflow-hidden shadow-md">
                <embed
                  src={menuPdfUrl}
                  type="application/pdf"
                  className="w-full h-[60vh] hidden sm:block"
                />
                <p className="text-center text-gray-600 sm:hidden">
                  📄 Votre appareil ne prend pas en charge l'aperçu du PDF.
                  <br />
                  <a
                    href={menuPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Cliquez ici pour télécharger le menu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
