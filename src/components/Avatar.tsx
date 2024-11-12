import Image from "next/image";

interface IAvatar {
  src: string;
  alt: string;
}

export const Avatar = (props: IAvatar) => {
  return (
    <Image src={props.src} alt={props.alt} priority fill />
  )
}