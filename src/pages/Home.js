import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default () => {
  const cruds = useSelector(s => s.cruds)

  return (
    <>
      <h2>Home Page</h2>
      <ul>
        {cruds.data.map(c => (
          <li key={c.path}>
            <Link to={c.path}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}