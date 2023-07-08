import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

interface Props {
    link: any,
    title: String
}

function NavElement({ title }: Props) {

    return (
        <div>
            <div className="group relative cursor-pointer">
                <div className="flex items-center justify-between space-x-5 bg-white px-4">
                    <p className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4">
                        {title}
                    </p>
                    
                </div>
                <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                    <NavLink to='/' className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Product One</NavLink>
                </div>
            </div>
      </div>
    )
}
  
export default NavElement
  