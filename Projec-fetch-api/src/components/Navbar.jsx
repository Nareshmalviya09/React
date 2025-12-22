import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Navbar = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    const axios = require('axios');
axios.get('https://fakestoreapi.com/products')
  .then(response => console.log(response.data));
     })
 

  return (
    <div>
      <h1>My Project</h1>

      <ul>
         
      </ul>
    </div>
  )
}

export default Navbar
