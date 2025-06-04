import Card from "../../Components/Card-Health-and-security";
import Header from "../../Components/Header";

import hospital from "../../assets/hospital-geral.png";

export default function Health() {
  return (
    <>
      <Header />
      <main className="max-w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-black my-4">Saúde</h1>
        <Card
          imgLocal={hospital}
          nomeLocal="Hospital Geral"
          enderecoLocal="R. Rio de Janeiro, Seriema"
          telefone="(99) 3421-4468"
        />
      </main>
    </>
  );
}
