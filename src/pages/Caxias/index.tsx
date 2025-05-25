import Header from "../../Components/Header";
import Know from "../../Components/Know";
import garfo from "../../assets/garfo - icon.png";
import piscina from "../../assets/piscina - icon.png";
import farmacia from "../../assets/farmacia - icon.png";
import policia from "../../assets/policia - icon.png";
import telefone from "../../assets/telefone - icon.png";
import seta from "../../assets/seta-direita-icon.png";

export default function Caxias() {
  const cards = [
    {
      imagem: garfo,
      titulo: "Restaurantes",
      icone: seta,
    },
    {
      imagem: piscina,
      titulo: "Lazer",
      icone: seta,
    },
    {
      imagem: farmacia,
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
  ];

  return (
    <>
      <Header />
      <main className="max-w-[90%] mx-auto px-2">
        <h1 className="text-2xl font-bold text-white my-4">Conheça Caxias</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 ">
          {cards.map((card, index) => (
            <Know key={index} {...card} />
          ))}
        </div>
      </main>
    </>
  );
}
