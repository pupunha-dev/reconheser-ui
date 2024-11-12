import { Logotipo } from "./Logotipo"
import logo from "./../public/ReconheSer Logo.svg"
import avatar from "./../public/Bolt - Avatar.svg"
import { Menu } from "./Menu"
import { Avatar } from "./Avatar"

export const Header = () => {
  return (
    <header className="w-4/5 flex justify-between bg-white mt-4 rounded-md px-8 py-4 items-center
     text-zinc-800 shadow-md">
      <div className="flex items-center w-3/5 gap-12">
        <div className="relative w-[100px] h-[100px]">
          <Logotipo src={logo} alt="ReconheSer Animal" />
        </div>
        <Menu />
      </div>
      <div className="flex flex-1 flex-row-reverse items-center gap-4">
        <div className="relative w-[50px] h-[50px] cursor-pointer">
          <Avatar src={avatar} alt="Bolt" />
        </div>
        <p className="font-semibold text-rsa-azul-2 text-sm">Seja bem-vindo, Bolt!</p>
      </div>
    </header>
  )
}