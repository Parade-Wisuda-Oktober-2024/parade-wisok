import React from 'react'
import Organogram from './organogram'
import Visi from "~/app/about-us/visi-misi";

const AboutUsPage = () => {
  return (
    <div className='relative'>
      <div
        style={{backgroundImage: "url('/vismis/about-us-bg-1-desktop.svg')"}}
        className="bg-center bg-cover w-full h-screen fixed top-0 -z-10 "></div>
      <Visi/>
      <Organogram/>
    </div>
  )
}

export default AboutUsPage
