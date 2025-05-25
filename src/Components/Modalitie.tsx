interface iProps {
  imagemModalide: string;
  modalidade: string;
}

export default function Modalitie(props: iProps) {
  return (
    <div className="flex border border-green-400 items-center justify-center gap-2 p-1 rounded-lg w-[150px]">
      <img
        src={props.imagemModalide}
        alt="modalidade"
        className="w-9 h-9 object-contain mb-2"
      />
      <span className="text-center text-white font-semibold uppercase">{props.modalidade}</span>
    </div>
  );
}
