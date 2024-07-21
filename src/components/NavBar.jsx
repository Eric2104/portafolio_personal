import React from 'react'
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { RiCodeView } from "react-icons/ri";


export default function NavBar() {
  return (
    <nav className='hidden md:block top-0 z-20 left-0 w-full fixed bg-dark-gray text-light-cream shadow-md'>
      <div className='flex justify-between items-center p-4'>
        <div className='flex items-center'>
          <h1 className='text-lg font-bold px-2'>Portafolio - Eric Soto</h1>
          <RiCodeView size={25} />

        </div>
        <ul className='flex space-x-4'>
          <li>
            <Link href='#' className='p-2 transition-colors duration-150 hover:bg-warm-orange rounded text-base mx-1'>Inicio</Link>
          </li>
          <li>
            <Link href='#' className='p-2 transition-colors duration-150 hover:bg-warm-orange rounded text-base mx-1'>Sobre mí</Link>
          </li>
          <li>
            <Link href='#' className='p-2 transition-colors duration-150 hover:bg-warm-orange rounded text-base mx-1'>Proyectos</Link>
          </li>
          <li>
            <Link href='#' className='p-2 transition-colors duration-150 hover:bg-warm-orange rounded text-base mx-1'>Contacto</Link>
          </li>
        </ul>
        <div className='flex space-x-3'>
          <a href='https://linkedin.com' target='_blank' className='text-light-cream hover:text-warm-orange'>
            <FaLinkedin size={20} />
          </a>
          <a href='https://github.com' target='_blank' className='text-light-cream hover:text-warm-orange'>
            <FaGithub size={20} />
          </a>
          <a href='https://twitter.com' target='_blank' className='text-light-cream hover:text-warm-orange'>
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
      <hr className='opacity-10' />
    </nav>
  );
}