import React from 'react'
import { Link } from 'react-router-dom'

const Item = item => <Link to={`/one/${'vsve'}`}>
                       <div>name</div>
                       <div>body</div>
                     </Link>

const All = props => (
  <div>
    { new Array(10).fill('zvzevzevev').map((item, key) => <Item key={key}/>) }
  </div>
)

export default All
