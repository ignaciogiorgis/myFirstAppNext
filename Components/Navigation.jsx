import React from 'react'
import Link from 'next/link'
import { links } from '../Constants/Constants'

const Navigation = () => {
  return (
    <div className="flex justify-center mt-4">
      <ul className=" border border-black w-1/2 flex flex-row justify-around">
        {links.map(({ label, route }) => {
          return (
            <div>
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
