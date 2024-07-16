import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <h3 className='mern' >Mern Stack Blog app</h3>
      <ul className='mid'>
        <Link to={'/'}>
        <li>Home</li>
        </Link>
        <Link to ={'/add-blog'}>
        <li>Add blogs</li>

        </Link>
      </ul>
    </div>
  )
}
