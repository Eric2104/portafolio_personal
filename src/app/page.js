import React from 'react'
import Hero from '../components/Hero'
import NavBar from '@/components/NavBar'
import NavBarMobile from '@/components/NavBarMobile'
import ColorsTemp from '@/components/ColorsTemp'
import Experiences from '@/components/Experiences'
export default function page() {
  return (
    <>
      <NavBarMobile />
      <NavBar />
      <div className='mx-auto mt-0 md:mt-10 '>
        <Hero />
        {/* <ColorsTemp /> */}
        {/* <ColorsTemp /> */}
        <Experiences />

        {/* Aqui estara diferentes seccion del sitio web a medida que se construya */}
      </div>
    </>
  )
}
