// https://larainfo.com/blogs/create-hoverable-dropdown-menu-react-with-tailwind-css
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

interface Props {
    title: string,
    dropdown: Array<any>
}

function NavElement({ title, dropdown }: Props) {

    return (
        <div>
            <div className="group relative cursor-pointer">
                <div className="flex items-center justify-between space-x-5 bg-white hover:font-medium hover:underline hover:decoration-2 hover:underline-offset-8">
                    {
                        (dropdown.length !== 0) ? (
                            <p className="menu-hover my-2 py-2 text-base text-black lg:mx-4">
                                {title}
                            </p>
                        ) : (
                            <Link to={"/" + title.toLowerCase()} className="menu-hover my-2 py-2 text-base text-black lg:mx-4">
                                {title}
                            </Link>
                        )
                    }
                    
                    
                </div>
                {
                    (dropdown.length !== 0) ? (
                        <div className="invisible absolute z-50 text-center flex flex-col py-1 text-gray-800 shadow-xl group-hover:visible">
                        {
                            dropdown.map((drop: Array<string>, index: any) =>
                                <div key={index}>
                                    <NavLink to={drop[1]} className="my-2 block border-b border-gray-100 py-1 hover:text-black md:mx-2">{drop[0]}</NavLink>
                                </div>
                            )
                        }
                        </div>
                    ) : null
                }
                
            </div>
      </div>
    )
}
  
export default NavElement
  