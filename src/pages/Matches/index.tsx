import Card from "../../Components/Card";
import Header from "../../Components/Header";

export default function Matches() {
  const partidas = [
    {
      modalidade: "Futsal",
      data: "16",
      mes: "JUN",
      horario: "Sábado, 13:30h",
      local: "João Castelo",
      equipe1: "Caxias",
      equipe2: "Codó",
    },
    {
      modalidade: "Futsal",
      data: "16",
      mes: "JUN",
      horario: "Sábado, 13:30h",
      local: "João Castelo",
      equipe1: "Caxias",
      equipe2: "Codó",
    },
    {
      modalidade: "Futsal",
      data: "16",
      mes: "JUN",
      horario: "Sábado, 13:30h",
      local: "João Castelo",
      equipe1: "Caxias",
      equipe2: "Codó",
    },
    {
      modalidade: "Futsal",
      data: "16",
      mes: "JUN",
      horario: "Sábado, 13:30h",
      local: "João Castelo",
      equipe1: "Caxias",
      equipe2: "Codó",
    },
    {
      modalidade: "Futsal",
      data: "16",
      mes: "JUN",
      horario: "Sábado, 13:30h",
      local: "João Castelo",
      equipe1: "Caxias",
      equipe2: "Codó",
    },
  ];

  return (
    <>
      <Header />
      <main className="max-w-[90%] mx-auto px-2">
        <h1 className="text-2xl font-bold text-black my-4">Conheça Caxias</h1>
        <div className="gap-10 grid grid-cols-4">
          {partidas.map((partida, index) => (
            <Card key={index} {...partida} />
          ))}
        </div>
      </main>
    </>
  );
}
