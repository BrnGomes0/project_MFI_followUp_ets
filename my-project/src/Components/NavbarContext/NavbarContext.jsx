import React from 'react'

function NavbarContext() {
  return (
     <div className='w-96'>
         <ul className='flex justify-between text-lg'>
        <li>
          <a href='/upload'>Upload</a>
        </li>
        <li>
          <a href='/view'>View</a>
        </li>
        <li>
          <a href='/e-mail'>E-mail</a>
        </li>
        <li>
          <a href='/'><img/></a>
        </li>
      </ul>
     </div>
  )
}

export default NavbarContext;
