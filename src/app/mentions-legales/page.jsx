import Head from "next/head";
import React from "react";

const LegalNotice = () => {
  const pageDescription =
    "Découvrez les mentions légales de DSG7.fr, nos conditions générales et nos coordonnées de contact.";
  const HeadingText = "Mentions légales de DSG7.fr";
  return (
    <div className="max-w-7xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <Head>
        <title>Mentions légales | DSG7 | DSG7.FR</title>
        <meta name="description" content={pageDescription} />
        <meta name="headline" content={HeadingText} />
      </Head>
      <div className="sr-only">
        <h1>Mentions légales de DSG7.fr</h1>
      </div>{" "}
      <h1 className="text-4xl font-bold text-center mb-8">Mentions Légales</h1>
      <div className="space-y-6">
        {/* Section 1: Siège Social et Hébergement */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Siège Social et Hébergement
          </h2>
          <p className="text-gray-700">
            <strong>dsg7.fr</strong>
            <br />
            Siège Social : 110 rue de Fontenay, 94300 VINCENNES
            <br />
            Hébergement : <strong>02switch</strong>
          </p>
        </section>

        {/* Section 2: Conformité Loi Informatique et Libertés */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Conformité Loi Informatique et Libertés
          </h2>
          <p className="text-gray-700">
            Conformément à la Loi Informatique et Libertés du 6 janvier 1978,
            vous disposez d’un droit d’accès et de rectification aux données
            personnelles vous concernant.
          </p>
        </section>

        {/* Section 3: Propriété Intellectuelle */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Propriété Intellectuelle
          </h2>
          <p className="text-gray-700">
            L’intégralité du site <strong>dsg7.fr</strong> est protégée par les
            législations françaises et internationales relatives à la propriété
            intellectuelle.
          </p>
          <p className="text-gray-700 mt-2">
            Tous les droits de reproduction sont réservés, y compris pour les
            documents téléchargeables. L’ensemble des textes, graphismes,
            icônes, photographies, plans, logos, vidéos, sons, marques (…) et
            plus généralement l’ensemble des éléments composant le site{" "}
            <strong>dsg7.fr</strong> et le site lui-même ne peuvent,
            conformément à l’article L122-4 du Code de la Propriété
            Intellectuelle, faire l’objet d’une quelconque représentation ou
            reproduction, intégrale ou partielle, sur quelque support que ce
            soit, sans l’autorisation expresse et préalable de{" "}
            <strong>dsg7.fr</strong>.
          </p>
          <p className="text-gray-700 mt-2">
            Le non-respect de cette interdiction constitue un acte de
            contrefaçon pouvant engager la responsabilité civile et/ou pénale de
            son auteur. <strong>dsg7.fr</strong> se réserve le droit d’engager
            des poursuites judiciaires à l’encontre de toute personne qui
            n’aurait pas respecté cette interdiction.
          </p>
          <p className="text-gray-700 mt-2">
            De même, il est strictement interdit d’utiliser ou de reproduire le
            nom <strong>dsg7.fr</strong> et/ou son logo, seuls ou associés, à
            quelque titre que ce soit et sur quelque support que ce soit sans
            l’accord préalable et écrit de <strong>dsg7.fr</strong>.
          </p>
        </section>

        {/* Section 4: Responsabilité */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
          <p className="text-gray-700">
            Les informations communiquées sur le site de sont fournies à titre
            indicatif, elles sont non contractuelles et ne sauraient engager la
            responsabilité de <strong>dsg7.fr</strong>. Elles peuvent être
            modifiées ou mises à jour sans préavis. <strong>dsg7.fr</strong> se
            réserve également le droit, à tout moment et sans préavis,
            d’apporter des améliorations et/ou modifications au site.
          </p>
          <p className="text-gray-700 mt-2">
            La responsabilité de <strong>dsg7.fr</strong> ne saurait être
            engagée pour :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>
              Les dommages de toute nature, directs ou indirects, résultant de
              l’utilisation du site <strong>dsg7.fr</strong> et notamment toute
              perte d’exploitation, perte financière ou commerciale, perte de
              programmes et/ou de données en particulier dans le système
              d’information de l’utilisateur.
            </li>
            <li>
              Les dommages de toute nature, directs ou indirects, résultant du
              contenu et/ou de l’utilisation des sites Internet liés au site{" "}
              <strong>dsg7.fr</strong> ou auxquels les utilisateurs pourraient
              avoir accès via le site de <strong>dsg7.fr</strong>.
            </li>
            <li>
              Les omissions et/ou erreurs que pourraient contenir le site.
            </li>
          </ul>
        </section>

        {/* Section 5: Utilisateurs */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Utilisateurs</h2>
          <p className="text-gray-700">
            L’utilisateur du présent site est responsable des dommages de toute
            nature, matériels ou immatériels, directs ou indirects, causés à
            tout tiers, y compris à <strong>dsg7.fr</strong>, du fait de
            l’utilisation ou de l’exploitation illicite du site{" "}
            <strong>dsg7.fr</strong> lui-même et/ou de l’un de ses éléments,
            quels que soient la cause et le lieu de survenance de ces dommages,
            et garantit <strong>dsg7.fr</strong> des conséquences des
            réclamations ou actions dont elle pourrait, de ce fait, faire
            l’objet.
          </p>
          <p className="text-gray-700 mt-2">
            L’utilisateur du site <strong>dsg7.fr</strong> s’interdit tout
            recours contre <strong>dsg7.fr</strong> pour les poursuites
            diligentées par un tiers à son encontre du fait de l’utilisation
            et/ou de l’exploitation illicite du site <strong>dsg7.fr</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalNotice;
