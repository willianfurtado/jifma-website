import Card from "../../Components/Card-Health-and-security";
import Header from "../../Components/Header";

import hospital from "../../assets/hospitalGeral.jpeg";

export default function Health() {
  const healthCareLocations = [
    {
      imgLocal: hospital,
      nomeLocal: "Hospital Geral",
      enderecoLocal: "R. Rio de Janeiro, Seriema",
      telefone: "(99) 3421-4468",
    },
    {
      imgLocal: hospital,
      nomeLocal: "Hospital Geral",
      enderecoLocal: "R. Rio de Janeiro, Seriema",
      telefone: "(99) 3421-4468",
    },
    {
      imgLocal: hospital,
      nomeLocal: "Hospital Geral",
      enderecoLocal: "R. Rio de Janeiro, Seriema",
      telefone: "(99) 3421-4468",
    },
    {
      imgLocal: hospital,
      nomeLocal: "Hospital Geral",
      enderecoLocal: "R. Rio de Janeiro, Seriema",
      telefone: "(99) 3421-4468",
    },
  ];

  return (
    <>
      <Header />
      <main className="max-w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-black my-4">Saúde</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {healthCareLocations.map((location, index) => (
            <Card key={index} {...location} />
          ))}
        </div>
      </main>
    </>
  );
}
