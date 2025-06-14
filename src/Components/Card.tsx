import ball from "../assets/ball.svg";
import place from "../assets/place-icon.svg";
import clock from "../assets/clock.svg";
import calendar from "../assets/calendar.svg";

interface iProps {
  modalidade: string;
  data: string;
  mes: string;
  horario: string;
  local: string;
  equipe1: string;
  equipe2: string;
}

export default function Card(props: iProps) {
  return (
    <div className="h-full w-full border-2 border-green-800 rounded-xl shadow-md transition-transform hover:scale-[1.02] duration-300 ease-in-out">
      <div className="p-3.5 flex flex-col items-center justify-center h-full">
        <h1 className="uppercase text-2xl font-semibold text-green-800 text-center">
          {props.modalidade}
        </h1>

        <hr className="border-t border-green-800 my-3 w-[90%]" />

        <div className="flex items-center justify-center gap-7 md:gap-5">
          {/* Data e bola */}
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={ball} className="h-14 w-14" />
            <div className="text-center">
              <p className="text-2xl font-bold text-green-800">{props.data}</p>
              <p className="text-sm uppercase">{props.mes}</p>
            </div>
          </div>

          {/* Informações da partida */}
          <div className="flex flex-col gap-3 justify-center text-lg md:text-md lg:text-lg w-[70%]">
            <div className="flex items-center gap-2">
              <img src={clock} className="h-6 w-6" />
              <span>
                {props.equipe1} <strong className="text-green-800">x</strong> {props.equipe2}
              </span>
            </div>

            <div className="flex items-center  gap-2">
              <img src={calendar} className="h-6 w-6" />
              <span>{props.horario}</span>
            </div>

            <div className="flex items-center gap-2">
              <img src={place} className="h-6 w-6" />
              <span>{props.local}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


