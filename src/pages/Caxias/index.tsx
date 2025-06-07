import Header from "../../Components/Header";
import Know from "../../Components/Know";
import restaurants from "../../assets/restaurant.svg";
import lazer from "../../assets/leisure.svg";
import saude from "../../assets/healthcare.svg";
import policia from "../../assets/policia.svg";
import telefone from "../../assets/contacts.svg";
import organizacao from "../../assets/organization.svg";
import seta from "../../assets/arrow.svg";

export default function Caxias() {
  const cards = [
    {
      imagem: restaurants,
      titulo: "Restaurantes",
      icone: seta,
    },
    {
      imagem: lazer,
      titulo: "Lazer",
      icone: seta,
    },
    {
      imagem: saude,
      titulo: "Saúde",
      icone: seta,
    },
    {
      imagem: policia,
      titulo: "Segurança",
      icone: seta,
    },
    {
      imagem: telefone,
      titulo: "Contatos",
      icone: seta,
    },
    {
      imagem: organizacao,
      titulo: "Organizacao",
      icone: seta,
    },
  ];

  return (
    <>
      <Header />
      <main className="max-w-[90%] mx-auto px-2">
        <h1 className="text-2xl font-bold text-black my-4">Conheça Caxias</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 ">
          {cards.map((card, index) => (
            <Know key={index} {...card} />
          ))}
        </div>
      </main>
    </>
  );
}
