import Header from "../../Components/Header";
import Place from "../../Components/Place-Card";

import jonathan from '../../assets/jonathan.png'

export default function Restaurants() {
  
  return (
    <>
      <Header />
      <main className="max-w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-black my-4">Restaurantes</h1>
        {/* <div className="flex flex-wrap gap-4 justify-center">
          {modalidades.map((modalidade, index) => (
            <Modalitie key={index} {...modalidade} />
          ))}
        </div> */}
        <Place 
          imgLocal={jonathan}
          nomeLocal="Buteco do Jonathan"
          funcionamento="08h às 17h"
          endereco="Rua Veneza"
        />
      </main>
    </>
  );
}
