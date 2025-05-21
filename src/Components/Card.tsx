import ball from "../assets/ball.png";
import place from "../assets/place-icon.png";
import clock from "../assets/clock-icon.png";
import calendar from "../assets/calendar-icon.png";

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
    <>
      <main className="max-w-[90%] mx-auto">
        <div className="h-[230px] w-[300px] border border-green-800 rounded-xl ">
          <div className="p-2">
            <h1 className="uppercase text-center text-2xl font-semibold">
              {props.modalidade}
            </h1>
            <hr className=" border-t border-gray-300 my-2 mx-auto" />

            <div className="flex p-2 justify-between">
              {/* Lado da bola e data */}
              <div className="flex flex-col items-center justify-center gap-1 mt-3 ">
                <img src={ball} className="h-12 w-12" />
                <div className="text-center text">
                  <p className="text-2xl">{props.data}</p>
                  <p className="text-xl uppercase">{props.mes}</p>
                </div>
              </div>

              {/* Informações da partida */}
              <div className="flex flex-col gap-3 text-lg mt-3">
                {/* Equipes */}
                <div className="flex gap-5">
                  <img src={clock} className="h-7.5 w-7.5" />
                  <span>
                    {props.equipe1} x {props.equipe2}
                  </span>
                </div>

                {/* Data e horário */}
                <div className="flex gap-5">
                  <img src={calendar} className="h-7.5 w-7.5" />
                  <span>{props.horario}</span>
                </div>

                {/* Local */}
                <div className="flex gap-5">
                  <img src={place} className="h-7.5 w-7.5" />
                  <span>{props.local}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
