'use client'
import Link from 'next/link'
import { links } from '../Constants/Constants'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  return (
    <div className="flex justify-start mt-4 ">
      <ul className=" w-1/2 flex flex-row gap-2">
        {links.map(({ label, route }) => {
          return (
            <div
              key={route}
              className={` rounded-full p-2 ${
                pathname === `${route}`
                  ? 'bg-slate-500  font-extrabold text-gray-100'
                  : ''
              }`}
            >
              <li>
                <Link href={route}>{label}</Link>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Navigation
