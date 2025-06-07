import Header from "../../Components/Header";
import Modalitie from "../../Components/Modalitie";
import ball from "../../assets/ball.svg";
import basquete from "../../assets/basquete.svg";
import handebol from "../../assets/handebol.svg";
import volei from "../../assets/volei.svg";
import atletismo from "../../assets/athlete.svg";
import natacao from "../../assets/swimming.svg"
import praia from "../../assets/volei-praia.svg"
import xadrez from "../../assets/chess.svg"
import tenis from "../../assets/tenis-sport-svgrepo-com.svg"

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
      imagemModalide: ball,
      modalidade: "Futebol",
    },
    {
      imagemModalide: atletismo,
      modalidade: "Atletismo",
    },
    {
      imagemModalide: praia,
      modalidade: "Vôlei de praia",
    },
    {
      imagemModalide: natacao,
      modalidade: "Natação",
    },
    {
      imagemModalide: tenis,
      modalidade: "Tênis de mesa",
    },
    {
      imagemModalide: xadrez,
      modalidade: "Xadrez",
    },
  ];

  return (
    <>
      <Header />
      <main className="max-w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-black my-4">Modalidades</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12  ">
          {modalidades.map((modalidade, index) => (
            <Modalitie key={index} {...modalidade} />
          ))}
        </div>
      </main>
    </>
  );
}
