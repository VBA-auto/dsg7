import AideenLigneSearch from "../Components/AideenLigneSearch";
import SEOErrorCodes from "../Components/SeoErrorCodes";

const MiseEnLigne = () => {
  return (
    <main className="aide mb-8">
      <section className="md:px-0 px-5">
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
                <div className="w-[700px]">
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
