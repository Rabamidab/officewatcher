import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/welcome'>Welcome</Link></li>
    <li><Link to='/camera'>Camera</Link></li>
  </ul>
)

export default Navigation
