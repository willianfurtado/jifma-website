import Header from "../../Components/Header";
import Know from "../../Components/Know";
import restaurants from "../../assets/restaurant.svg";
import lazer from "../../assets/leisure.svg";
import saude from "../../assets/healthcare.svg";
import policia from "../../assets/policia.svg";
import organizacao from "../../assets/organization.svg";
import seta from "../../assets/arrow.svg";

import PageTransition from "../../Components/PageTransition";

export default function Caxias() {
  const cards = [
    {
      imagem: restaurants,
      titulo: "Restaurantes",
      icone: seta,
      rota: "/restaurantes" 
    },
    {
      imagem: lazer,
      titulo: "Lazer",
      icone: seta,
      rota: "/lazer"
    },
    {
      imagem: saude,
      titulo: "Saúde",
      icone: seta,
      rota: "/saúde"
    },
    {
      imagem: policia,
      titulo: "Segurança",
      icone: seta,
      rota: "/seguranca"
    },
    {
      imagem: organizacao,
      titulo: "Organizacao",
      icone: seta,
      rota: "/organizacao"
    },
  ];

  return (
    <>
      <Header />
      <PageTransition>
        <main className="max-w-[91%] mx-auto px-2">
          <h1 className="text-2xl font-bold text-black my-4">Conheça Caxias</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 ">
            {cards.map((card, index) => (
              <Know key={index} {...card} />
            ))}
          </div>
        </main>
      </PageTransition>
    </>
  );
}
