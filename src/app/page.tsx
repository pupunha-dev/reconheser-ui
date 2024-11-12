import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { HeaderEffect1 } from "@/components/TextHeaders";
import { Atom, FileType } from "lucide-react";
import Link from "next/link";
import imgDog from "./../public/Bolt - Foto.svg"
import imgCat from "./../public/Gato - Foto.svg"
import imgOrang from "./../public/Orangotango - Foto.svg"
import avatarDaniel from "./../public/Daniel - Avatar.svg"
import avatarCanil from "./../public/Canil - Avatar.svg"
import avatarZoo from "./../public/Zoo - Avatar.svg"
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Seção Tipografia  */}
      <Section className="bg-white" id="tipografia-e-cores">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-rsa-azul-2 mt-4">
            <FileType /><HeaderEffect1 text={"Tipografia"} e1={true} />
          </div>
          <div className="px-2">
            <p className="text-lg">Enquanto não consigo as fontes oficiais, optei por usar <b>Nunito</b>, uma das minhas favoritas muito parecida com a fonte do Duolingo. 😎</p>
          </div>
          <div className="px-2 flex justify-between">
            <div className="flex flex-col bg-rsa-cinza rounded-md p-4 items-center justify-center">
              <span className="text-sm">text-sm / font-thin</span>
              <p className="text-sm font-thin">ReconheSer Animal</p>
            </div>
            <div className="flex flex-col bg-rsa-cinza rounded-md p-4 items-center justify-center">
              <span className="text-sm">text-lg / font-semibold</span>
              <p className="text-lg font-semibold">ReconheSer Animal</p>
            </div>
            <div className="flex flex-col bg-rsa-cinza rounded-md p-4 items-center justify-center">
              <span className="text-sm">text-xl / font-bold</span>
              <p className="text-xl font-bold">ReconheSer Animal</p>
            </div>
            <div className="flex flex-col bg-rsa-cinza rounded-md p-4 items-center justify-center">
              <span className="text-sm">text-2xl / font-black</span>
              <p className="text-2xl font-black">ReconheSer Animal</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-rsa-azul-2 mt-12">
            <FileType /><HeaderEffect1 text={"Paleta de Cores"} e1={true} />
          </div>
          <div className="px-2">
            <p className="text-lg">Pesquisei algumas paletas de cores com ajuda
              da <Link href="https://www.perplexity.ai/" target="_blank"><b className="text-rsa-azul-2 underline">
                Perplexity AI</b></Link> e, baseando nas cores principais da logo, consegui essa combinação que combina
              muito bem com os elementos que podem ser usados na aplicação, conforme veremos nas seções seguintes.
            </p>
          </div>
          <div className="flex">
            <div className="w-1/6 bg-rsa-amarelo py-8 flex justify-center">
              <p className="text-sm font-semibold text-zinc-700">#FFDF58</p>
            </div>
            <div className="w-1/6 bg-rsa-azul-1 py-8 flex justify-center">
              <p className="text-sm font-semibold text-white">#03989E</p>
            </div>
            <div className="w-1/6 bg-rsa-cinza py-8 flex justify-center">
              <p className="text-sm font-semibold text-zinc-700">#F0F0F0</p>
            </div>
            <div className="w-1/6 bg-rsa-azul-2 py-8 flex justify-center">
              <p className="text-sm font-semibold text-white">#003C4F</p>
            </div>
            <div className="w-1/6 bg-rsa-coral py-8 flex justify-center">
              <p className="text-sm font-semibold text-white">#FF6B6B</p>
            </div>
            <div className="w-1/6 bg-white py-8 flex justify-center border">
              <p className="text-sm font-semibold text-zinc-700">#FFFFFF</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Seção Elementos  */}
      <Section className="bg-white" id="elementos">
        <div className="flex flex-col gap-6">

          <div className="flex items-center gap-2 text-rsa-azul-2">
            <Atom /><HeaderEffect1 text={"Elementos"} e1={true} />
          </div>

          <div className="px-2">
            <h1 className="text-xl font-bold text-zinc-700">Botões</h1>
          </div>

          <div className="flex justify-between gap-6">
            <div className="w-1/3 h-14">
              <button className="btt-primary">QUERO ADOTAR</button>
            </div>
            <div className="w-1/3 h-14">
              <button className="btt-secondary">FALAR COM O CUIDADOR</button>
            </div>
            <div className="w-1/3 h-14">
              <button className="btt-alert">CANCELAR PEDIDO</button>
            </div>
          </div>

          <div className="px-2">
            <h1 className="text-xl font-bold text-zinc-700">Cards</h1>
          </div>

          <div className="flex justify-between">
            <Card imagemPet={imgDog} altPet={"Foto do Caramelo"} nomePet={"Caramelo"}
              cuidadorNome={"Daniel S. Melo"} cuidadorStatus={"Cuidador"} cuidadorAvatar={avatarDaniel} cuidadorAlt={"Daniel S. Melo"} dataPet={"11/10/2024"} localidade={"Lapa-PR"} idadePet={"Filhote"} urlDetalhes={""} />

            <Card imagemPet={imgCat} altPet={"Foto do Magrelo"} nomePet={"Magrelo"}
              cuidadorNome={"Meira Pets"} cuidadorStatus={"Canil"} cuidadorAvatar={avatarCanil} cuidadorAlt={"Canil Meira Pets"} dataPet={"01/05/2024"} localidade={"Itajaí-SC"} idadePet={"Adulto"} urlDetalhes={""} />

            <Card imagemPet={imgOrang} altPet={"Foto do Morangotango"} nomePet={"Morangotango"}
              cuidadorNome={"Zoo Matriz "} cuidadorStatus={"Zoológico"} cuidadorAvatar={avatarZoo} cuidadorAlt={"Daniel S. Melo"} dataPet={"16/08/2022"} localidade={"Vigia-PA"} idadePet={"Jovem"} urlDetalhes={""} />
          </div>

        </div>
      </Section>

      <Footer />
    </>
  );
}
