import Link from "next/link";
import Head from "next/head";

const pageDescription =
  "Vérifiez la disponibilté de votre module de commande de boite de vitesse automatique pour votre boite automatique EDC Renault Captur Diesel";
const HeadingText = "Mentions legales VBA calculateur Renault";

export default function Retours() {
  return (
    <main>
      <section className="py-[40px]">
        <Head>
          <title>VBA | Laboiteautomatique Gestion des Retours</title>
          <meta name="description" content={pageDescription} />
          <meta name="headline" content={HeadingText} />
        </Head>

        <div style={{ display: "none" }}>
          <h1>VBA | Laboiteautomatique Gestion des Retours</h1>
        </div>
        <div className="container mx-auto  rounded-2xl text-gray-900 px-5">
          <div className="mt-2">
            <h1 className="text-4xl md:text-5xl text-black font-bold text-center mb-8">
              Gestion des Retours
            </h1>
            <div className="mb-8">
              <h2 className="text-[17px] font-bold mb-2">
                Politique de Gestion des Retours
              </h2>
              <p>
                Nous mettons tout en œuvre pour garantir la satisfaction de nos
                clients et fournir des produits fiables. Nous avons également
                mis en place une politique de gestion des retours claire pour
                répondre efficacement aux éventuels problèmes rencontrés.
              </p>

              <h3 className="text-[17px] font-bold mt-6 mb-2">
                1. Conditions générales des retours
              </h3>
              <p>
                Les retours sont acceptés uniquement si les conditions suivantes
                sont remplies :
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Le calculateur est non endommagé.</li>
                <li>
                  Les vérifications détaillées en section 3 ont été effectuées
                  et le problème persiste.
                </li>
                <li>
                  La demande de retour est effectuée dans un délai de 14 jours
                  après réception du produit.
                </li>
              </ul>
              <p className="font-bold mt-2">Important :</p>
              <p>
                Les retours pour changement d&apos;avis ne sont pas acceptés.
              </p>

              <h3 className="text-[17px] font-bold mt-6 mb-2">
                2. Raisons valables pour un retour
              </h3>
              <p>Un retour peut être demandé dans les cas suivants :</p>
              <ol className="list-decimal pl-6 mt-2">
                <li>
                  Produit défectueux malgré une programmation et une
                  installation conforme.
                </li>
                <li>
                  Erreur d&apos;envoi (référence incorrecte ou produit non
                  conforme à la commande).
                </li>
              </ol>
              <p className="mt-2">
                Avant tout retour, il est nécessaire de vérifier les points
                listés en section 3 pour confirmer que le problème est lié au
                calculateur.
              </p>

              <h3 className="text-[17px] font-bold mt-6 mb-2">
                3. Vérifications préalables au retour
              </h3>
              <p>
                Avant d&apos;initier un retour, veuillez effectuer les
                vérifications suivantes pour écarter les causes externes au
                calculateur :
              </p>
              <table className="w-full mt-2 border-collapse">
                <thead>
                  <tr className="bg-gray-100 ">
                    <th className="p-2 border text-start">
                      Problème ou symptôme
                    </th>
                    <th className="p-2 border text-start">
                      Vérifications à effectuer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Le programme est-il le bon ?</td>
                    <td className="p-2 border">
                      Assurez-vous que le calculateur a bien été programmé pour
                      votre véhicule.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border">
                      Le calculateur est-il correctement branché ?
                    </td>
                    <td className="p-2 border">
                      Vérifiez toutes les connexions électriques et assurez-vous
                      qu&apos;elles sont solidement fixées.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border">
                      Problème de mouvement (obligation d&apos;appuyer sur la
                      pédale d&apos;accélérateur pour avancer ou reculer)
                    </td>
                    <td className="p-2 border">
                      Avez-vous effectué correctement le calibrage des points de
                      touche ou points de léchage ? Ceux-ci doivent être
                      supérieurs à 7 mm (les deux), et le point de
                      l&apos;embrayage 2 doit être supérieur à celui de
                      l&apos;embrayage 1 (exemple : 9.35 pour l&apos;embrayage 1
                      et 11.22 pour l&apos;embrayage 2).
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Le véhicule ne démarre pas</td>
                    <td className="p-2 border">
                      Avez-vous réalisé le calibrage du sélecteur de vitesse ?
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border">
                      Message &apos;Boîte de vitesse à contrôler&apos; affiché
                      sur le tableau de bord
                    </td>
                    <td className="p-2 border">
                      Avez-vous effacé tous les codes défaut en mémoire à
                      l&apos;aide d&apos;une valise diagnostique ?
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-[17px] font-bold mt-6 mb-2">
                4. Procédure pour initier un retour
              </h3>
              <p>Pour initier un retour :</p>
              <ol className="list-decimal pl-6 mt-2">
                <li>Contactez-nous par email ou téléphone (voir section 7).</li>
                <li>
                  Fournissez les preuves nécessaires :
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      Les codes défaut relevés avec une valise diagnostique.
                    </li>
                    <li>Une description précise des symptômes observés.</li>
                  </ul>
                </li>
                <li>
                  Une fois votre demande validée, une étiquette de retour
                  prépayée vous sera fournie.
                </li>
              </ol>

              <h3 className="text-[17px] font-bold mt-6 mb-2">
                5. Frais de retour et remboursement
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Les frais de retour sont pris en charge uniquement si le
                  calculateur est confirmé comme défectueux ou en cas
                  d&apos;erreur d&apos;envoi.
                </li>
                <li>
                  Si le problème provient d&apos;un composant autre que le
                  calculateur (par exemple : boîte, embrayage, synchro, moteur
                  d&apos;embrayage, état de la batterie, etc.), les frais
                  d&apos;envoi resteront à la charge du client.
                </li>
                <li>
                  Le remboursement ou l&apos;échange sera effectué sous 7 jours
                  ouvrés après réception et vérification du produit retourné.
                </li>
              </ul>

              <h3 className="text-[17px] font-bold mt-6 mb-2">6. Délais</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Les retours doivent être initiés dans un délai de 14 jours
                  après réception.
                </li>
                <li>
                  Le traitement du retour (validation, remboursement ou échange)
                  sera effectué sous 7 jours ouvrés après réception du produit.
                </li>
              </ul>

              <h3 className="text-[17px] font-bold mt-6 mb-2">7. Contact</h3>
              <p>
                Pour toute demande ou assistance concernant les retours,
                veuillez nous contacter via :
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Email : contact@dsg7.fr</li>
                <li>Téléphone : 07.57.83.12.03</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
