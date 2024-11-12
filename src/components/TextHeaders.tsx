interface IHeaderEffects {
  text: string;
  e1?: boolean;
  e2?: boolean
}

const HeaderEffect1 = ({ text, e1, e2 }: IHeaderEffects) => {
  return (
    <>
      {e1 && <h1 className="bg-gradient-to-r from-rsa-azul-1 to-rsa-azul-2 text-3xl
    font-bold text-transparent bg-clip-text">{text}</h1>}
      {e2 && <h1 className="bg-gradient-to-r from-rsa-azul-1 to-rsa-coral text-3xl
    font-bold text-transparent bg-clip-text">{text}</h1>}
    </>
  )
}


export { HeaderEffect1 }