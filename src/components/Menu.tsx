import Link from "next/link"

export const Menu = () => {
  const linksMenu = ['Tipografia e Cores', 'Elementos', 'Contato'];
  return (
    <ul className="flex gap-6">
      {linksMenu.map((links, i) => (
        <li key={i}>
          <Link href={`#${links.toLowerCase().replace(/ /g, '-')}`}>
            <span className="text-base font-semibold">{links}</span>
          </Link>
        </li>
      ))
      }
    </ul >
  )
}