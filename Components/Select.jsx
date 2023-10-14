'use client'
import React, { useState } from 'react'

const Select = ({ results }) => {
  const [type, setType] = useState(null)
  console.log(type)
  return (
    <div className="flex flex-col gap-5 ml-16">
      <label htmlFor="" className="font-extrabold uppercase">
        Select Type
      </label>
      <select
        name=""
        id=""
        onChange={(e) => setType(e.target.value)}
        className="w-1/6 py-2 px-10 mb-16"
      >
        {results.map((element, id) => {
          return (
            <option key={id} value={element.name}>
              {element.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select
