import clock from "../assets/clock.svg";
import place from "../assets/place.svg";
import Routes from "./Button-Routes";

interface iProps {
  imgLocal: string;
  nomeLocal: string;
  funcionamento: string;
  endereco: string;
}

export default function Place(props: iProps) {
  return (
    <>
      <div className="h-[340px] w-[330px] border-2 border-green-800 rounded-[26px]">
        <img
          src={props.imgLocal}
          alt="Estabelecimento"
          className="mx-auto m-3"
        />
        <h1 className="text-center text-2xl font-semibold">{props.nomeLocal}</h1>
        <hr className="w-[90%] border-t border-green-800 border-1 my-2 mx-auto" />

        {/* Funcionamento */}
        <div className="flex flex-col p-3 gap-4">
          <div className="flex gap-2">
            <img src={clock} alt="ícone de relógio" />
            <span>Funcionamento: {props.funcionamento}</span>
          </div>
          {/* Endereço */}
          <div className="flex gap-3">
            <img src={place} alt="ícone de relógio" />
            <span>{props.endereco}</span>
          </div>
        </div>
        <Routes />
      </div>
    </>
  );
}
