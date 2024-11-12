interface ISection {
  className?: string;
  children: React.ReactNode;
  id: string;
}

export const Section = (props: ISection) => {
  return (
    <section className={`${props.className} p-10 rounded-md w-4/5 min-h-screen shadow-md`} id={props.id}>
      {props.children}
    </section>
  )
}