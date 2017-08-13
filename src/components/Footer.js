import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Link } from 'react-router-dom'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    <Link to='/instascan'>camera</Link>
  </p>
)

export default Footer
