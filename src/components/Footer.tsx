import React, { useEffect, useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import client from "../Lib/sanityClient.js";

interface FooterProps {
  language: "fr" | "en";
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const [phone, setPhone] = useState("01 42 94 83 41");
  const [schedule, setSchedule] = useState([]);

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

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const query = `*[_type == "schedule"][0]{times}`;
        const data = await client.fetch(query);
        setSchedule(data?.times || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des horaires:", error);
        setSchedule([]);
      }
    }

    fetchSchedule();
  }, []);

  return (
    <footer className="bg-[#41522f] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <div>
              <p>13 Bd des Batignolles, 75008 Paris</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Clock className="h-5 w-5 mt-1" />
            <div className="text-sm">
              <div className="grid grid-cols-1 gap-x-4">
                {schedule.length > 0 ? (
                  schedule.map((item, index) => (
                    <div key={index}>
                      <span>
                        {language === "fr" ? item.fieldFr1 : item.fieldEn1}{" "}
                        {"  "}
                      </span>
                      <span>
                        {language === "fr" ? item.fieldFr2 : item.fieldEn2}
                      </span>
                    </div>
                  ))
                ) : (
                  <span>Chargement des horaires...</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <p>{phone}</p>
          </div>
        </div>

        {/* --- PARTIE FOOTER MODIFIÉE --- */}
        <div className="mt-6 pt-4 border-t border-[#707c62] text-center text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} COSMO BURGER</p>

          <p className="text-white/80">
            Created with{" "}
            <span style={{ color: "#707c62", fontSize: "1.1em" }}>❤️</span> by{" "}
            <a
              href="https://www.vasseo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/90 underline underline-offset-2"
            >
              Vasseo
            </a>
          </p>
        </div>
        {/* --- FIN MODIF --- */}
      </div>
    </footer>
  );
};

export default Footer;
