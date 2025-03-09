"use client"; // Mark as a client component for interactivity
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data
  const faqData = [
    {
      question: "Qu’est-ce qu’une boîte S-Tronic ou DSG7 ?",
      answer:
        "La boîte DSG7 (DQ200), aussi appelée S-Tronic chez Audi, est une transmission à double embrayage et 7 rapports utilisée sur les véhicules du groupe Volkswagen (VW, Audi, Seat, Skoda). Elle combine la réactivité d'une boîte manuelle et le confort d’une boîte automatique, mais nécessite un entretien rigoureux pour éviter les pannes.",
    },
    {
      question: "Doit-on vidanger sa boîte auto ?",
      answer:
        "Oui, la vidange est essentielle pour préserver les performances et éviter une usure prématurée des composants. Pour les boîtes à double embrayage à bain d’huile (DSG6 DQ250, DQ381, 0B5 S-Tronic), la vidange est recommandée tous les 60 000 km.",
    },
    {
      question:
        "Quels sont les symptômes d’un problème avec ma boîte DSG ou EDC ?",
      answer:
        "Un dysfonctionnement peut se manifester par des passages de vitesses saccadés, un mode dégradé activé, une perte de certaines vitesses, des bruits métalliques ou des vibrations.",
    },
    {
      question:
        "Quelle est la différence entre un double embrayage à sec et mouillé ?",
      answer:
        "Le double embrayage à sec est plus léger et économique, mais plus sensible à l’usure. Le double embrayage à bain d’huile est plus durable et offre un fonctionnement plus souple.",
    },
    {
      question:
        "J’ai une Mégane III, Scénic III, Captur ou Clio IV et je n’ai pas de vitesse paire ni de marche arrière. C’est le calculateur ?",
      answer:
        "Oui, cela indique généralement un problème du calculateur. Avant de le remplacer, vérifiez les moteurs d’embrayage et les tolérances d’usure.",
    },
    {
      question: "Mon levier de vitesse est bloqué en position P. Que faire ?",
      answer:
        "Ce problème survient lorsque le calculateur ne communique plus avec le système. Vérifiez les codes défauts à la valise et testez l’alimentation du calculateur.",
    },
    {
      question:
        "J’ai une boîte DSG7 et seules les vitesses paires ou impaires passent. Calculateur ou embrayage ?",
      answer:
        "Si le problème est hydraulique, le calculateur est probablement défectueux. Si le problème concerne l’embrayage, les disques sont peut-être usés ou bloqués.",
    },
    {
      question: "Comment savoir si mon volant moteur est défectueux ?",
      answer:
        "Un volant moteur usé ne génère pas de code défaut. Si vous entendez un bruit métallique en démarrant sans accélérer, il est probablement en fin de vie.",
    },
    {
      question:
        "Le message 'Boîte de vitesses à contrôler' s’affiche. Que faire ?",
      answer:
        "Ce message peut indiquer un problème électronique ou mécanique. Vérifiez les symptômes et consultez les codes défaut à la valise.",
    },
    {
      question: "Comment commander un calculateur de boîte EDC Renault ?",
      answer: "➡ Commandez ici : La Boîte Automatique",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            {/* FAQ Header */}
            <div
              className="p-4 flex justify-between items-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-[18px] font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span className="text-gray-600">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {/* FAQ Answer */}
            {activeIndex === index && (
              <div className="p-4 border-t bg-white">
                <p className="text-[17px] font-[500] text-gray-800">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
