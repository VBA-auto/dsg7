import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Qui sommes-nous ?
          </h2>

          <h4 className="text-[18px] font-[500] mb-5">
            Depuis près de huit ans, nous nous consacrons à l'univers complexe
            et fascinant des boîtes automatiques. Si nos premiers pas nous ont
            conduits à intervenir sur des boîtes à convertisseur de couple et
            des boîtes à variation continue (CVT), notre expertise s'est
            progressivement affinée pour se concentrer exclusivement sur les
            boîtes à double embrayage. Aujourd'hui, nous sommes devenus des
            spécialistes reconnus des transmissions{" "}
            <b className="text-red-500">DSG du groupe Volkswagen</b> et des{" "}
            <b className="text-red-500">EDC 6DCT250 GETRAG de Renault</b>.
          </h4>

          <h4 className="text-[18px] font-[500] mb-5">
            Notre savoir-faire repose sur un service complet de programmation,
            réparation et vente de calculateurs de marque{" "}
            <b className="text-red-500">Continental</b>. Pour garantir des
            interventions précises et fiables, nous nous appuyons sur un{" "}
            <b className="text-red-500">banc d'essai dédié</b>, conçu
            exclusivement pour tester et optimiser les calculateurs de boîtes
            automatiques. Chaque panne est pour nous un défi technique à
            relever, chaque diagnostic une opportunité d'affiner notre maîtrise
            de ces systèmes sophistiqués.
          </h4>

          <h4 className="text-[18px] font-[500] mb-5">
            Si les boîtes à double embrayage sont au cœur de notre activité,
            nous en maîtrisons chaque subtilité, qu'elles soient à sec- comme
            les <b className="text-red-500">EDC (DC4) de Renault</b> et les{" "}
            <b className="text-red-500">DSG7 (DQ200) du groupe Volkswagen</b> -
            ou à bain d'huile, à l'image des{" "}
            <b className="text-red-500">DSG6, 0B5 DL501, DQ381 et DQ500</b>.
            Derrière ces désignations techniques se cachent des mécaniques de
            précision, où la moindre anomalie peut impacter le comportement du
            véhicule. Notre mission ? Diagnostiquer et corriger ces
            dysfonctionnements avec la plus grande rigueur.
          </h4>

          <h4 className="text-[18px] font-[500] mb-5">
            Un voyant{" "}
            <b className="text-red-500">"Boîte de vitesses à contrôler"</b>{" "}
            s'allume sur votre tableau de bord ? Un message vous invite à{" "}
            <b className="text-red-500">"Aller à l'atelier"</b> ? Ne laissez pas
            un problème mécanique se transformer en panne irréversible. Notre
            équipe est à votre disposition pour vous accompagner et trouver la
            meilleure solution. Nous sommes ouverts du lundi au vendredi, de 8h
            à 18h.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
