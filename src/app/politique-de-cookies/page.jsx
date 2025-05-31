import Head from "next/head";
import React from "react";

const CookiePolicy = () => {
  const pageDescription =
    "Informations sur l'utilisation des cookies sur DSG7.fr et votre droit à la confidentialité.";
  const HeadingText = "Politique de cookies DSG7.fr";

  return (
    <div className="max-w-7xl mx-auto p-6 shadow-md my-8 rounded-lg">
      <Head>
        <title>Politique de cookies | DSG7</title>
        <meta name="description" content={pageDescription} />
        <meta name="headline" content={HeadingText} />
      </Head>
      <div className="sr-only">
        <h1>Politique de cookies DSG7.fr</h1>
      </div>{" "}
      <h1 className="text-4xl font-bold text-center mb-8">
        Politique de cookies (UE)
      </h1>
      <p className="text-sm text-gray-600 text-center mb-8">
        Cette politique de cookies a été mise à jour pour la dernière fois le{" "}
        <strong>janvier 11, 2025</strong> et s’applique aux citoyens et aux
        résidents permanents légaux de l’Espace Économique Européen et de la
        Suisse.
      </p>
      <div className="space-y-6">
        {/* Section 1: Introduction */}
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Notre site web,{" "}
            <a href="https://dsg7.fr" className="text-red-500 hover:underline">
              https://dsg7.fr
            </a>{" "}
            (ci-après : « le site web »), utilise des cookies et autres
            technologies liées (par simplification, toutes ces technologies sont
            désignées par le terme « cookies »). Des cookies sont également
            placés par des tierces parties que nous avons engagées. Dans le
            document ci-dessous, nous vous informons de l’utilisation des
            cookies sur notre site web.
          </p>
        </section>

        {/* Section 2: Que sont les cookies ? */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. Que sont les cookies ?
          </h2>
          <p className="text-gray-700">
            Un cookie est un petit fichier simple envoyé avec les pages de ce
            site web et stocké par votre navigateur sur le disque dur de votre
            ordinateur ou d’un autre appareil. Les informations qui y sont
            stockées peuvent être renvoyées à nos serveurs ou aux serveurs des
            tierces parties concernées lors d’une visite ultérieure.
          </p>
        </section>

        {/* Section 3: Que sont les scripts ? */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Que sont les scripts ?
          </h2>
          <p className="text-gray-700">
            Un script est un élément de code utilisé pour que notre site web
            fonctionne correctement et de manière interactive. Ce code est
            exécuté sur notre serveur ou sur votre appareil.
          </p>
        </section>

        {/* Section 4: Qu’est-ce qu’une balise invisible ? */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Qu’est-ce qu’une balise invisible ?
          </h2>
          <p className="text-gray-700">
            Une balise invisible (ou balise web) est un petit morceau de texte
            ou d’image invisible sur un site web, utilisé pour suivre le trafic
            sur un site web. Pour ce faire, diverses données vous concernant
            sont stockées à l’aide de balises invisibles.
          </p>
        </section>

        {/* Section 5: Cookies */}
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-1">
                5.1 Cookies techniques ou fonctionnels
              </h3>
              <p className="text-gray-700">
                Certains cookies assurent le fonctionnement correct de certaines
                parties du site web et la prise en compte de vos préférences en
                tant qu’internaute. En plaçant des cookies fonctionnels, nous
                vous facilitons la visite de notre site web. Ainsi, vous n’avez
                pas besoin de saisir à plusieurs reprises les mêmes informations
                lors de la visite de notre site web et, par exemple, les
                éléments restent dans votre panier jusqu’à votre paiement. Nous
                pouvons déposer ces cookies sans votre consentement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">
                5.2 Cookies statistiques
              </h3>
              <p className="text-gray-700">
                Nous utilisons des cookies statistiques afin d’optimiser
                l’expérience des internautes sur notre site web. Avec ces
                cookies statistiques, nous obtenons des informations sur
                l’utilisation de notre site web. Nous demandons votre permission
                pour placer des cookies statistiques.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">
                5.3 Cookies de marketing/suivi
              </h3>
              <p className="text-gray-700">
                Les cookies de marketing/suivi sont des cookies ou toute autre
                forme de stockage local, utilisés pour créer des profils
                d’utilisateurs afin d’afficher de la publicité ou de suivre
                l’utilisateur sur ce site web ou sur plusieurs sites web dans
                des finalités marketing similaires.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">5.4 Réseaux sociaux</h3>
              <p className="text-gray-700">
                Sur notre site web, nous avons inclus du contenu provenant de
                Instagram pour promouvoir des pages web (par exemple, « like »,
                « pin ») ou les partager (par exemple, « tweet ») sur des
                réseaux sociaux comme Instagram. Ce contenu est intégré grâce un
                code obtenu de Instagram et place des cookies. Ce contenu peut
                stocker et traiter certaines informations à des fins de
                publicité personnalisée.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Consentement */}
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Consentement</h2>
          <p className="text-gray-700">
            Lorsque vous visitez notre site web pour la première fois, nous vous
            montrerons une fenêtre contextuelle avec une explication sur les
            cookies. Dès que vous cliquez sur « Enregistrer les préférences »,
            vous nous autorisez à utiliser les catégories de cookies et
            d’extensions que vous avez sélectionnées dans la fenêtre
            contextuelle, comme décrit dans la présente politique de cookies.
            Vous pouvez désactiver l’utilisation des cookies via votre
            navigateur, mais veuillez noter que notre site web pourrait ne plus
            fonctionner correctement.
          </p>
        </section>

        {/* Section 7: Activer/désactiver et supprimer les cookies */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            7. Activer/désactiver et supprimer les cookies
          </h2>
          <p className="text-gray-700">
            Vous pouvez utiliser votre navigateur internet pour supprimer
            automatiquement ou manuellement les cookies. Vous pouvez également
            spécifier que certains cookies ne peuvent pas être placés. Une autre
            option consiste à modifier les réglages de votre navigateur Internet
            afin que vous receviez un message à chaque fois qu’un cookie est
            placé. Pour plus d’informations sur ces options, reportez-vous aux
            instructions de la section Aide de votre navigateur.
          </p>
        </section>

        {/* Section 8: Vos droits concernant les données personnelles */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            8. Vos droits concernant les données personnelles
          </h2>
          <p className="text-gray-700">
            Vous avez les droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Vous avez le droit de savoir pourquoi vos données personnelles
              sont nécessaires, ce qui leur arrivera et combien de temps elles
              seront conservées.
            </li>
            <li>
              Droit d’accès : vous avez le droit d’accéder à vos données
              personnelles que nous connaissons.
            </li>
            <li>
              Droit de rectification : vous avez le droit à tout moment de
              compléter, corriger, faire supprimer ou bloquer vos données
              personnelles.
            </li>
            <li>
              Si vous nous donnez votre consentement pour le traitement de vos
              données, vous avez le droit de révoquer ce consentement et de
              faire supprimer vos données personnelles.
            </li>
            <li>
              Droit de transférer vos données : vous avez le droit de demander
              toutes vos données personnelles au responsable du traitement et de
              les transférer dans leur intégralité à un autre responsable du
              traitement.
            </li>
            <li>
              Droit d’opposition : vous pouvez vous opposer au traitement de vos
              données. Nous obtempérons, à moins que certaines raisons ne
              justifient ce traitement.
            </li>
          </ul>
        </section>

        {/* Section 9: Coordonnées */}
        <section>
          <h2 className="text-xl font-semibold mb-2">9. Coordonnées</h2>
          <p className="text-gray-700">
            Pour des questions et/ou des commentaires sur notre politique de
            cookies et cette déclaration, veuillez nous contacter en utilisant
            les coordonnées suivantes :
          </p>
          <address className="text-gray-700 not-italic mt-2">
            <strong>DSG7.FR</strong>
            <br />
            110 Rue de Fontenay
            <br />
            94300 VINCENNES
            <br />
            France
            <br />
            Site web :{" "}
            <a href="https://dsg7.fr" className="text-red-500 hover:underline">
              https://dsg7.fr
            </a>
            <br />
            E-mail :{" "}
            <a
              href="mailto:contact@dsg7.fr"
              className="text-red-500 hover:underline"
            >
              contact@dsg7.fr
            </a>
            <br />
            Numéro de téléphone :{" "}
            <a href="tel:+33145147254" className="text-red-500 hover:underline">
              01.45.14.72.54
            </a>
          </address>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
