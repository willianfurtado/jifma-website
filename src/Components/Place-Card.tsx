import clock from "../assets/relogio.svg";
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
      <div className="h-full w-full border-2 border-green-800 rounded-[26px] flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300 ease-in-out">
        <img
          src={props.imgLocal}
          alt="Estabelecimento"
          className="mx-auto mt-3 mb-1 w-[90%] h-auto rounded-[26px]"
        />
        <h1 className="text-center text-2xl font-semibold px-4">
          {props.nomeLocal}
        </h1>
        <hr className="w-[90%] border-t border-green-800 border-1 my-2 mx-auto" />

        {/* Funcionamento */}
        <div className="flex flex-col px-4 gap-4 mb-4 text-base">
          <div className="flex items-start gap-2">
            <img
              src={clock}
              alt="ícone de relógio"
              className="w-5 h-5 mt-[2px]"
            />
            <span className="text-wrap">
              Funcionamento: {props.funcionamento}
            </span>
          </div>
          {/* Endereço */}
          <div className="flex items-start gap-2">
            <img
              src={place}
              alt="ícone de local"
              className="w-5 h-5 mt-[2px]"
            />
            <span className="text-wrap">{props.endereco}</span>
          </div>
        </div>

        <div className="px-4 pb-4 ">
          <Routes />
        </div>
      </div>
    </>
  );
}
