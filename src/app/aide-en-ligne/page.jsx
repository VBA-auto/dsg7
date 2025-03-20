import Head from "next/head";
import AideenLigneSearch from "../Components/AideenLigneSearch";
import SEOErrorCodes from "../Components/SeoErrorCodes";

const MiseEnLigne = () => {
  const pageDescription =
    "En fonction de vos codes défaut nous pouvons vous aider";
  const HeadingText = "Problème vitesse paire ou impaire";
  return (
    <main className="aide mb-8 ">
      <Head>
        <title>Aide en ligne - Diagnostic Boîte Auto DSG & EDC | DSG7</title>
        <meta name="description" content={pageDescription} />
        <meta name="headline" content={HeadingText} />
      </Head>
      <div className="sr-only">
        <h1>Problème vitesse paire ou impaire</h1>
        <h1>boite de vitesse a controler </h1>
        <h2>pas de marche arriere </h2>
      </div>

      <section className="md:px-0 px-5 container mx-auto">
        <div className="">
          <div className="relative">
            {/* Partie gauche - Texte initial */}
            <main className="py-[50px]">
              <div className="container mx-auto">
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                    Aide en ligne
                  </h1>
                </div>
                <div className="">
                  <SEOErrorCodes />
                </div>
                <div className="md:w-[700px] mx-auto w-full">
                  <div className="">
                    <AideenLigneSearch />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MiseEnLigne;
