import React from 'react';
import { IoMdMenu } from 'react-icons/io';
import ResponsiveMenu from './ResponsiveMenu';
const NavbarMenu=[
  {
    id:1,
    title:'Home',
    path:'#home'    
  },
  {
    id:2,
    title:'Resume',
    path:'#resume',
  },
  {
    id:3,
    title:'Services',
    path:'#services',
  },
  {
    id:4,
    title:'work',
    path:'#work',
  },
  {
    id:5,
    title:'Contact',
    path:'#contact',
  }
]
const Navbar = () => {
  const [isOpen,setIsOpen]=React.useState(false)
  return (
  <nav>
    <div className='container py-10 flex justify-between items-center'>
      {/* Logo section */}
      <div>
        <h1 className='font-bold text-2xl'>Yas<span className='text-primary'>M</span>ine Bl<span className='text-primary'>o</span>om</h1>
      </div>
      {/* Menu section */}
      <div className='hidden md:block'>
        <ul className='flex items-center gap-4'>
          {
            NavbarMenu.map((item)=>(
              <li key={item.id}>
                <a href={item.path} className='inline-block py-2 px-3 hover:text-primary relative group'>
                  
                  {item.title}</a>
              </li>
            ))
          }
        </ul>

      </div>
      {/* Mobile Hamburger Menu section */}
      <div className='lg:hidden'>
        <IoMdMenu className='text-4xl' onClick={()=>setIsOpen(!isOpen)}/>
        <div>
            <ResponsiveMenu isOpen={isOpen}/>
        </div>
      </div>
      
    </div>
  </nav>)
};

export default Navbar;