'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import IconMenu from '../../public/icon-menu.svg'
import { FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';

export default function NavBarMobile() {
  
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className='top-0 z-20 left-0 w-full fixed block md:hidden bg-dark-gray text-light-cream'>
      <div className='flex justify-between items-center p-4'>
        <h1 className='text-lg font-bold text-light-cream'>Portafolio - Eric Soto</h1>
        <button onClick={()=>{setMenuOpen(!menuOpen)}}>
          <svg className="fill-light-cream w-8 h-8 stroke-2	" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fillRule="nonzero"/></svg>
        </button>
      </div>
      <div className={`absolute w-full flex-col items-center bg-light-cream text-dark-gray font-normal transition-all duration-200 ease-in-out ${menuOpen ? 'h-52' : 'h-0'} overflow-hidden text-center`}>
        <div className='h-full'>
          <ul className='flex flex-col justify-center'>
            <Link href='#' className='p-2 transition-colors duration-150 hover:bg-soft-gray text-base hover:font-semibold'>Inicio</Link>
            <Link href='#' className='p-2 transition-colors duration-150 hover:bg-soft-gray text-base hover:font-semibold'>Sobre mí</Link>
            <Link href='#' className='p-2 transition-colors duration-150 hover:bg-soft-gray text-base hover:font-semibold'>Proyectos</Link>
            <Link href='#' className='p-2 transition-colors duration-150 hover:bg-soft-gray text-base hover:font-semibold'>Contacto</Link>
            <button  className='p-2 transition-colors duration-150 hover:bg-soft-gray text-base hover:font-semibold'>test</button>

          </ul>
          <div className='flex space-x-6 py-2 justify-center'>
            <a href='https://linkedin.com' target='_blank' className='text-dark-gray hover:text-warm-orange'>
              <FaLinkedin size={20} />
            </a>
            <a href='https://github.com' target='_blank' className='text-dark-gray hover:text-warm-orange'>
              <FaGithub size={20} />
            </a>
            <a href='https://twitter.com' target='_blank' className='text-dark-gray hover:text-warm-orange'>
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

    </nav>
  );
}