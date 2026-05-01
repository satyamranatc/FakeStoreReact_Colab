import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
      <h2>My App</h2>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/product'>Product</Link></li>
      </ul>
    </nav>
  )
}
