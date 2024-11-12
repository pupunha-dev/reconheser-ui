import Image from "next/image"

interface ILogotipo {
  src: string;
  alt: string;
}

export const Logotipo = (props: ILogotipo) => {
  return (
    <Image src={props.src} alt={props.alt} fill priority />
  )
}