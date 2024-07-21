import React from 'react'
import Image from 'next/image'
// import photoEric from '../../public/eric-photo.jpg';
import photoEric from '../../public/foto_temp.jpg';

export default function Hero() {
  return (
    <div className=' text-light-cream py-20 md:py-12 lg:py-16 w-full h-auto lg:h-screen px-4'>
      <div className='containe mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-0 lg:px-12'>
        <div className='order-last md:order-first space-y-6 flex flex-col justify-center px-0 md:px-2'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center md:text-left'>
            Hola, soy <span className='text-warm-orange'>Eric Soto</span>
          </h1>
          <p className='text-2xl md:text-3xl text-center md:text-left'>
            Licenciado en Desarrollo de Software
          </p>
          <div className='rounded-lg '>
            <hr className='opacity-30 my-2' />
            
            <div className='flex flex-col md:flex-row justify-between'>
              <div className='flex flex-col py-2'>
                <span className='font-bold'>Fecha de nacimiento:</span>
                <span>21 de abril del 2002</span>
              </div>
              <div className='flex flex-col py-2'>
                <span className='font-bold'>Dirección:</span>
                <span>Panamá, Panamá Oeste, Arraiján</span>
              </div>
            </div>
            
            <div className='flex flex-col md:flex-row justify-between'>
              <div className='flex flex-col py-2'>
                <span className='font-bold'>Correo electrónico:</span>
                <span>ericasoto2104@gmail.com</span>
              </div>
              <div className='flex flex-col py-2'>
                <span className='font-bold'>Teléfono:</span>
                <span>+507 xxxx-xxxx</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col py-2'>
                <span className='font-bold'>Idiomas:</span>
                <span>Español, Ingles(Intermedio)</span>
              </div>
          
          <button className='bg-warm-orange text-light-cream py-3 px-6 rounded-full mt-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:font-semibold self-center md:self-start'>
            Descargar CV
          </button>
        </div>
        
        <div className='order-first md:order-last flex justify-center items-center'>
          <div className='relative h-48 w-48 md:h-80 md:w-80 lg:h-96 lg:w-96 overflow-hidden flex justify-center items-center rounded-full bg-light-gray shadow-2xl'>
            <Image src={photoEric} width={720} height={480}  alt='Foto de Eric Soto' className='rounded-full object-cover' />
          </div>
        </div>
        
      </div>
    </div>
  );
}
