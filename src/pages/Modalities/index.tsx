import Header from "../../Components/Header";
import Modalitie from "../../Components/Modalitie";
import ball from "../../assets/ball.png";
import basquete from "../../assets/basquete - icon.png";
import handebol from "../../assets/handebol - icon.png";
import volei from "../../assets/volei - icon.png";
import atletismo from "../../assets/atletismo - icon.png";

export default function Modalities() {
  const modalidades = [
    {
      imagemModalide: ball,
      modalidade: "Futsal",
    },
    {
      imagemModalide: basquete,
      modalidade: "Basquete",
    },
    {
      imagemModalide: handebol,
      modalidade: "Handebol",
    },
    {
      imagemModalide: volei,
      modalidade: "Vôlei",
    },
    {
      imagemModalide: atletismo,
      modalidade: "Atletismo",
    },
  ];

  return (
    <>
      <Header />
      <main className="max-w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-white my-4">Modalidades</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {modalidades.map((modalidade, index) => (
            <Modalitie key={index} {...modalidade} />
          ))}
        </div>
      </main>
    </>
  );
}
