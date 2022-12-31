import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Button from './Button'

const Navbar = () => {
  const Menus = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Portfolio', link: '/' },
    { name: 'Contact', link: '/' },
  ]

  const [bar, setBar] = useState(false)

  const handleClick = () => {
    setBar(!bar)
  }

  return (
    <div className="shadow-md w-full top-0 left-0 fixed z-10">
      <div className="md:flex md:justify-between md:items-center bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-indigo-500">
          Prayuda.
        </div>
        <div className='md:hidden cursor-pointer' onClick={handleClick}>
          {!bar ? <Bars3Icon className="w-8 absolute right-8 top-5" /> : <XMarkIcon className="w-8 absolute right-8 top-5" />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto text-center transition-all duration-200 ease-in ${!bar ? 'opacity-100' : 'top-[-490px]'}`}>
          {Menus.map((menu) => (
            <li
              key={menu.name}
              className="md:mx-4 text-xl md:my-0 my-7 border-b-[1px] border-b-slate-500 md:border-b-0"
            >
              <a
                href={menu.link}
                className="font-semibold text-slate-500 hover:text-primary duration-300"
              >
                {menu.name}
              </a>
            </li>
          ))}
          <Button title="Hire Me" />
        </ul>
      </div>
    </div>
  )
}

export default Navbar
