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

  const handleClickCollect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#click-collect");
    if (section) {
      const navHeight = 80; // Hauteur de la barre de navigation
      const targetPosition =
        section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
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
              <button
                onClick={handleClickCollect}
                className="bg-white text-[#41522f] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                {content[language].cta2}
              </button>
            </div>
            <div className="mt-12 flex justify-center gap-6">
              <a
                href="https://www.ubereats.com/fr/store/cosmo-burger/T3FJphpaUjSCCF4m3QP2jg?srsltid=AfmBOoqngS1Z0NcsxVkoDCsWt_0VDL5o-yzgKndjoM2Gz0zvxnzaU5Si"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczNcZfvW11yXtzCCsKGqRjTrLli0NzB3UJagAGlB-u9HcO6b_uL073AVoOnkDhF7ofiCoB3cDfrSyK38dUAXtgN-GqzMR7SqGg9sbWnG49YXGDRhLP-3z8KXC18NjZnXQqjlc10_Po7YKJtxXfMuIku7=w2076-h2076-s-no-gm?authuser=0"
                  alt="Uber Eats"
                  className="h-8 opacity-90"
                />
              </a>
              <a
                href="https://deliveroo.fr/fr/menu/paris/8eme-europe/cosmo-burger-paris"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczM7sxaFd4Teci1vaBog_SpK1XenvDuYh_tHEStFuDmnQ4baQl4m8uxSeKs02JLmI9dzTUmYwrCJQYDWUkucOet06b0YUZt_5aCOyrcuJxggddN_y_HdZ9_1_8gaY19UH5k9AHXHGJ38eHg9Qv7Ml6eH=w225-h225-s-no-gm?authuser=0"
                  alt="Deliveroo"
                  className="h-8 opacity-90"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Modal */}
      {showMenu && menuPdfUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-lg  flex flex-col">
            {/* Bouton Fermer */}
            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-black p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Conteneur avec gestion du scroll */}
            <div className="flex-1">
              <iframe src={menuPdfUrl} className="w-full h-full"></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
