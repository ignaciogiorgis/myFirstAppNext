import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-center font-extrabold my-10">Pokemon Detail</h1>
      {children}
    </div>
  )
}

export default layout
