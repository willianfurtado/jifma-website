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
    <div className="h-full w-full border-2 border-green-800 rounded-xl shadow-md">
      <div className="p-4 flex flex-col items-center justify-center h-full">
        <h1 className="uppercase text-xl font-semibold text-green-800 text-center">
          {props.modalidade}
        </h1>

        <hr className="border-t border-green-800 my-3 w-[90%]" />

        <div className="flex items-center justify-center gap-4">
          {/* Data e bola */}
          <div className="flex flex-col items-center gap-1">
            <img src={ball} className="h-14 w-14" />
            <div className="text-center">
              <p className="text-2xl font-bold text-green-800">{props.data}</p>
              <p className="text-sm uppercase">{props.mes}</p>
            </div>
          </div>

          {/* Informações da partida */}
          <div className="flex flex-col gap-2 text-center text-sm">
            <div className="flex items-center justify-center gap-2">
              <img src={clock} className="h-5 w-5" />
              <span>
                {props.equipe1} <strong className="text-green-800">x</strong> {props.equipe2}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <img src={calendar} className="h-5 w-5" />
              <span>{props.horario}</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <img src={place} className="h-5 w-5" />
              <span>{props.local}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


