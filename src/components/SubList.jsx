import React from 'react'

const SubList = ({example}) => {
  return (
    <ul className="list-inside text-gray-500">
        <li className="">{example || ''}</li>
        </ul>
  )
}

export default SubList