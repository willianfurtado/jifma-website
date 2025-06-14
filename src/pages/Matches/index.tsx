import Card from "../../Components/Card";
import Header from "../../Components/Header";
import PageTransition from "../../Components/PageTransition";

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
      <PageTransition>
        <main className="max-w-[90%] mx-auto px-2">
          <h1 className="text-2xl font-bold text-color-primary my-4">Partidas</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partidas.map((partida, index) => (
              <Card key={index} {...partida} />
            ))}
          </div>
        </main>
      </PageTransition>
    </>
  );
}
