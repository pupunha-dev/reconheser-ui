import Image from "next/image"
import { CalendarDays, Circle, MapPinHouse, PawPrint } from "lucide-react"
import { Avatar } from "./Avatar"
import Link from "next/link"

interface ICard {
  imagemPet: string;
  altPet: string;
  nomePet: string;
  cuidadorNome: string;
  cuidadorStatus: string;
  cuidadorAvatar: string;
  cuidadorAlt: string;
  dataPet: string;
  localidade: string;
  idadePet: string;
  urlDetalhes: string;
}

export const Card = (props: ICard) => {
  return (
    <div className="flex flex-col border shadow-lg border-rsa-azul-1 rounded-xl w-[340px] p-4 gap-5">
      <div className="relative w-full h-[300px] rounded-lg">
        <Image src={props.imagemPet} alt={props.altPet} fill className="rounded-xl" />
        <span className="absolute bg-white z-10 flex rounded-xl p-1 bottom-4 right-4">
          <Circle width={14} height={14} className="text-rsa-azul-2" fill="#003C4F" />
          <Circle width={14} height={14} className="text-[#ccc]" fill="#ccc" />
          <Circle width={14} height={14} className="text-[#ccc]" fill="#ccc" />
        </span>
      </div>
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold tracking-tight">{props.nomePet}</h1>
        <div className="flex items-center gap-2">
          <div className="flex flex-col justify-center items-end">
            <span className="text-sm leading-3">{props.cuidadorNome}</span>
            <span className="text-xs font-bold text-rsa-azul-2 ">{props.cuidadorStatus}</span>
          </div>
          <div className="relative w-[40px] h-[40px] cursor-pointer">
            <Avatar src={props.cuidadorAvatar} alt={props.cuidadorAlt} />
          </div>
        </div>
      </div>
      <div className="flex px-2 justify-between">
        <div className="flex items-center gap-1">
          <CalendarDays width={20} className="text-rsa-azul-1" />
          <span className="text-sm">{props.dataPet}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPinHouse width={20} className="text-rsa-azul-1" />
          <span className="text-sm">{props.localidade}</span>
        </div>
        <div className="flex items-center gap-1">
          <PawPrint width={20} className="text-rsa-azul-1" />
          <span className="text-sm">{props.idadePet}</span>
        </div>
      </div>
      <div className="h-[60px]">
        <Link href={props.urlDetalhes}>
          <button className="btt-primary">VER DETALHES</button>
        </Link>
      </div>
    </div>
  )
}