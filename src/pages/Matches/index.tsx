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
      equipe2: "Codó"
    },
  ];

  return (
    <>
      <Header />
      <h1>Partidas</h1>
      <div className=" gap-4 justify-center mt-4">
        {partidas.map((partida, index) => (
          <Card key={index} {...partida} />
        ))}
      </div>
      
    </>
  );
}
