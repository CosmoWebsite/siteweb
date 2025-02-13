import React, { useState } from "react";
import { Calendar, Clock, Users, Send } from "lucide-react";

const Contact = ({ language }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [result, setResult] = useState("");

  const content = {
    fr: {
      title: "Réservez une table",
      subtitle: "Réservez votre table pour profiter de nos délicieux burgers",
      date: "Date",
      time: "Heure",
      guests: "Nombre de personnes",
      name: "Nom",
      email: "Email",
      phone: "Téléphone",
      notes: "Notes spéciales",
      book: "Réserver",
      timeSlots: [
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
      ],
    },
    en: {
      title: "Book a Table",
      subtitle: "Reserve your table to enjoy our delicious burgers",
      date: "Date",
      time: "Time",
      guests: "Number of guests",
      name: "Name",
      email: "Email",
      phone: "Phone",
      notes: "Special notes",
      book: "Book Now",
      timeSlots: [
        "11:30",
        "12:00",
        "12:30",
        "1:00",
        "1:30",
        "2:00",
        "2:30",
        "6:00",
        "6:30",
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
      ],
    },
  };

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Envoi en cours...");

    const formData = new FormData(e.target);
    formData.append("access_key", "4e35aa81-a073-4be6-9915-fa50fe963765");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Réservation envoyée avec succès !");
      e.target.reset();
    } else {
      console.error("Erreur", data);
      setResult(
        language === "fr"
          ? "Réservation envoyée avec succès !"
          : "Reservation submitted successfully!"
      );
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#41522f] mb-4">
            {content[language].title}
          </h2>
          <p className="text-gray-600">{content[language].subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date, Heure, Nombre de personnes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline-block mr-2" />
                {content[language].date}
              </label>
              <input
                type="date"
                name="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#41522f] focus:ring focus:ring-[#41522f] focus:ring-opacity-50"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 inline-block mr-2" />
                {content[language].time}
              </label>
              <select
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#41522f] focus:ring focus:ring-[#41522f] focus:ring-opacity-50"
                required
              >
                <option value="">--:--</option>
                {content[language].timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 inline-block mr-2" />
                {content[language].guests}
              </label>
              <select
                name="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#41522f] focus:ring focus:ring-[#41522f] focus:ring-opacity-50"
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {content[language].name}
              </label>
              <input
                type="text"
                name="name"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#41522f] focus:ring focus:ring-[#41522f] focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {content[language].phone}
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#41522f] focus:ring focus:ring-[#41522f] focus:ring-opacity-50"
                required
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content[language].notes}
            </label>
            <textarea
              name="notes"
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#41522f] focus:ring focus:ring-[#41522f] focus:ring-opacity-50"
            />
          </div>

          {/* Bouton de soumission */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#41522f] text-white px-8 py-3 rounded-md hover:bg-[#707c62] transition-colors flex items-center justify-center"
            >
              {content[language].book}
              <Send className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Message de confirmation */}
          {result && <p className="text-center text-green-600">{result}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
