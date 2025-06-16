'use client'
import React,{useEffect} from 'react'
import 'aos/dist/aos.css';
import { Card } from '@/components/ui/card';



const AboutUs = () => {

  return (
    <div className='mt-10 bg-gray-100 p-4'>
 
  <div className=' p-4 mb-6'>
    <h3 className='text-red-500 mb-2'>About Us</h3>
    <h1 className=' text-3xl font-bold text-gray-700 mb-2'><span className='underline p-1 decoration-red-500 '>Soaring</span> to New Heights</h1>
    <p className='font-light text-sm'>
      Tiercel Consulting takes its name from the male falcon—swift, precise, and reliable. Like our namesake,
      we help students navigate the complex journey of studying abroad with speed and accuracy, guiding them
      to prestigious institutions in the UK, USA, Canada, Ireland, Australia, Europe. Our foundation is built
      on trust, transparency, and a genuine passion for empowering student success.
    </p>
  </div>


  <Card className='flex flex-row  p-2'>

<div className="bg-gray-500 flex justify-center items-center min-h-screen">
  <div className="relative w-3/4 max-w-md">
    <img
      className="w-full h-auto object-cover"
      src="./assets/ceo.jpg"  // Make sure this image is in the `/public` folder if using Next.js
      alt="Leader Image"
    />

    {/* Bottom overlay with h4 headings */}
    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90">
      <div className="flex flex-col sm:flex-row justify-between text-white text-center">
        <h4 className="w-full text-transparent sm:w-1/2 bg-[#001F3F] text-lg font-semibold p-4">
          15+ Years of Experience
        </h4>
        <h4 className="w-full text-transparent sm:w-1/2 bg-[#001F3F] text-lg font-semibold p-4">
          5000+ Students
        </h4>
      </div>
    </div>
  </div>
</div>




    <div className='w-2/3 flex flex-col justify-start'>
      <div className='mb-2'>
        <h4 className='text-red-500 text-lg font-semibold'>LEADERSHIP</h4>
      </div>
      <div className='mb-2'>
        <h2 className='text-2xl font-bold text-gray-800'>Meet Our Founder & CEO</h2>
      </div>
      <div className='flex flex-row items-center gap-6'>
        <h3 className='text-lg font-medium'>Mahmood Ur Rehman</h3>
        <span className='text-md text-red-500 '>Founder & Chief Executive Officer</span>
     
         </div>
      <div className='mt-4 text-sm text-gray-700'>
        <p>
          Driven by a clear vision to revolutionize the educational consulting landscape, Mahmood founded Tiercel Consulting.
          He masterfully combines his deep-seated industry expertise and an extensive network of relationships with top-tier
          institutions worldwide with genuine, personalized care for each student's journey, ensuring Tiercel clients receive
          unparalleled opportunities and insightful guidance.
        </p>
        <p className='mt-2'>
          With over 15+ years of shaping future of students, Mahmood Ur Rehman brings a wealth of experience and a deep passion
          for empowering students to achieve their academic ambitions abroad. His journey is built on a genuine commitment to
          guiding scholars through every step of their international education.
        </p>
        <p className='mt-2'>
          His expertise was significantly sharpened during his impactful tenure with Study Group, where he demonstrated exceptional
          leadership by adeptly spearheading the development of the crucial UK and US markets within Pakistan. Furthermore, Mahmood
          skillfully managed the broader dynamic South Asia market, encompassing key countries like India, Bangladesh, and Sri Lanka,
          showcasing his versatile market acumen.
        </p>
        <p className='mt-2'>
          As a distinguished foreign graduate himself, holding an Education degree from the prestigious Queen Mary University of
          London, Mahmood possesses an invaluable firsthand understanding of the unique challenges and transformative opportunities
          that await international students. This personal experience fuels his empathetic and effective approach to consulting.
        </p>
      </div>
    </div>
  </Card>
</div>

  )
}

export default AboutUs