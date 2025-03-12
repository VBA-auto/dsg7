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
        "<div><p>La boîte <strong>DSG7 (DQ200)</strong>, aussi appelée <strong>S-Tronic</strong> chez Audi, est une transmission à <strong>double embrayage</strong> et <strong>7 rapports</strong> utilisée sur les véhicules du groupe Volkswagen (VW, Audi, Seat, Skoda).</p><p>Elle est composée de :</p><ul class='list-disc ms-5'><li>Un <strong>calculateur (module de commande)</strong> électro-hydraulique qui gère l'embrayage et les rapports de vitesse.</li><li>Deux <strong>embrayages à sec</strong>, permettant des passages de vitesses rapides et fluides.</li></ul><p>Elle combine la réactivité d'une boîte manuelle et le confort d’une boîte automatique, mais nécessite un entretien rigoureux pour éviter les pannes.</p></div>",
    },
    {
      question: "Doit-on vidanger sa boîte auto ?",
      answer:
        "<div><p>Oui, la vidange est essentielle pour préserver les performances et éviter une usure prématurée des composants, mais elle dépend du type de boîte :</p><ul class='list-disc ms-5'><li><strong>Boîtes à double embrayage à sec</strong> (DSG7 DQ200, EDC DC4 Renault) :<ul class='list-disc ms-5'><li>Pas de vidange d’embrayage, mais le calculateur (module de commande) utilise une huile spécifique.</li><li>Pour les EDC DC4, un bouchon sous le cardan permet d’accéder à l’huile.</li></ul></li><li><strong>Boîtes à double embrayage à bain d’huile</strong> (DSG6 DQ250, DQ381, 0B5 S-Tronic) :<ul class='list-disc ms-5'><li>Vidange recommandée tous les 60 000 km avec une huile spécifique.</li><li>Ces boîtes sont plus robustes, mais nécessitent un entretien rigoureux pour éviter l’encrassement du circuit hydraulique.</li></ul></li></ul><p>Une absence d’entretien peut provoquer <b>des à-coups, du patinage excessif et des erreurs du calculateur (module de commande)</b></p></div>",
    },
    {
      question:
        "Quels sont les symptômes d’un problème avec ma boîte DSG ou EDC ?",
      answer:
        "<div><p>Un dysfonctionnement peut se manifester par :</p><ul class='list-disc ms-5'><li>Passages de vitesses saccadés, lents ou bloqués.</li><li>Mode dégradé activé (voyant au tableau de bord).</li><li>Perte de certaines vitesses (paires ou impaires).</li><li>Bruits métalliques ou vibrations lors du passage des rapports.</li><li>À-coups ou patinage excessif de l’embrayage.</li></ul></div>",
    },
    {
      question:
        "Quelle est la différence entre un double embrayage à sec et mouillé ?",
      answer:
        "<div><p><strong>Double embrayage à sec</strong> (DSG7 - DQ200, Renault EDC DC4) :</p><ul class='list-disc ms-5'><li>Plus léger et plus économe en carburant.</li><li>Sensible à l’usure et aux surchauffes.</li><li>Pas de vidange d’huile d’embrayage.</li></ul><p><strong>Double embrayage à bain d’huile</strong> (DSG6, DSG7 DQ500, certaines EDC) :</p><ul class='list-disc ms-5'><li>Durée de vie plus longue grâce à la lubrification.</li><li>Fonctionnement plus souple, idéal pour les moteurs puissants.</li><li>Vidange obligatoire tous les 60 000 km.</li></ul></div>",
    },
    {
      question:
        "J’ai une Mégane III, Scénic III, Captur ou Clio IV et je n’ai pas de vitesse paire ni de marche arrière. C’est le calculateur ?",
      answer:
        "<div><p>Oui, cela indique généralement un problème du calculateur (module de commande). Avant de le remplacer, vérifiez :</p><ul class='list-disc ms-5'><li>Les moteurs d’embrayage (haut et bas de la boîte).</li><li>Les limites de tolérance de l’embrayage (en mm).</li><li>Le kilométrage du véhicule, car l’usure joue un rôle clé.</li></ul></div>",
    },
    {
      question: "Mon levier de vitesse est bloqué en position P. Que faire ?",
      answer:
        "<div><p>Ce problème survient quand le calculateur (module de commande) ne communique plus avec le système. Par sécurité, il empêche alors le passage des rapports.</p><ul class='list-disc ms-5'><li>Vérifiez si des codes défauts sont enregistrés à la valise.</li><li>Testez l’alimentation et le câblage du calculateur.</li><li>Vérifiez la batterie : une tension trop basse peut bloquer le levier.</li></ul></div>",
    },
    {
      question:
        "J’ai une boîte DSG7 et seules les vitesses paires ou impaires passent. Calculateur ou embrayage ?",
      answer:
        "<div><p>Le diagnostic dépend des codes défaut enregistrés à la valise :</p><ul class='list-disc ms-5'><li>Si le problème est hydraulique → <strong>Calculateur (module de commande)</strong> défectueux.</li><li>Si le problème concerne l’embrayage → <strong>Disques usés</strong> ou mécanisme bloqué.</li></ul></div>",
    },
    {
      question: "Comment savoir si mon volant moteur est défectueux ?",
      answer:
        "<div><p>Le volant moteur ne génère aucun code défaut à la valise car c’est une panne mécanique. Pour le diagnostiquer :</p><ul class='list-disc ms-5'><li>Démarrez le moteur sans accélérer → Si vous entendez un bruit métallique (bruit de casserole), il est probablement usé.</li><li>Ce problème apparaît généralement entre 150 000 et 200 000 km.</li></ul></div>",
    },
    {
      question:
        "Le message 'Boîte de vitesses à contrôler' s’affiche. Que faire ?",
      answer:
        "<div><p>Ce message peut indiquer un problème électronique ou mécanique. Pour diagnostiquer :</p><ul class='list-disc ms-5'><li>Vérifiez les symptômes (à-coups, vitesses bloquées, vibrations).</li><li>Consultez les codes défaut à la valise pour identifier la panne.</li><li>Prenez en compte le kilométrage du véhicule (usure de l’embrayage ou du calculateur).</li></ul></div>",
    },
    {
      question: "Comment commander un calculateur de boîte EDC Renault ?",
      answer:
        "<div><p>➡ Commandez ici : <strong>La Boîte Automatique</strong></p></div>",
    },
    {
      question:
        "J’ai un problème sur mon Captur, Mégane, Scénic ou Clio IV. Que faire ?",
      answer:
        "<div><p>Obtenez une assistance en ligne via notre site partenaire.</p><p>➡ Accédez à l’aide en ligne ici : <strong>Aide en ligne - La Boîte Automatique</strong></p></div>",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center mb-8">
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
                <h4
                  className="text-[18px] font-[500] text-gray-800"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
