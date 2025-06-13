import Header from "../../Components/Header";
import Place from "../../Components/Place-Card";

import jonathan from "../../assets/jonathan.jpg";

export default function Leisure() {
  const leisureLocations = [
    {
      imgLocal: jonathan,
      nomeLocal: "Buteco do Jonathan",
      funcionamento: "08h às 17h",
      endereco: "Rua Veneza",
    },
    {
      imgLocal: jonathan,
      nomeLocal: "Buteco do Jonathan",
      funcionamento: "08h às 17h",
      endereco: "Rua Veneza",
    },
    {
      imgLocal: jonathan,
      nomeLocal: "Buteco do Jonathan",
      funcionamento: "08h às 17h",
      endereco: "Rua Veneza",
    },
    {
      imgLocal: jonathan,
      nomeLocal: "Buteco do Jonathan",
      funcionamento: "08h às 17h",
      endereco: "Rua Veneza",
    },
    {
      imgLocal: jonathan,
      nomeLocal: "Buteco do Jonathan",
      funcionamento: "08h às 17h",
      endereco: "Rua Veneza",
    },
  ];

  return (
    <>
      <Header />
      <main className="max-w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-black my-4">Restaurantes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {leisureLocations.map((modalidade, index) => (
            <Place key={index} {...modalidade} />
          ))}
        </div>
      </main>
    </>
  );
}
