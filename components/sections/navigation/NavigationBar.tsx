import React from 'react'
import Image from 'next/image'
import { Nav_Items } from '@/data/navigationBar'
import logoImage from '@/assets/images/logo.svg';

export default function NavigationBar() {
  return (
    <section className='p-4'>
      {/* To push Content from the side of the screen */}
      <div className="container">
        <div className="grid grid-cols-2 border border-white/15 rounded-full p-2 px-4 items-center">
          {/* 1st Column */}
          <div className="">
            <Image
              src={logoImage}
              alt='Layers Logo'
              className='h-9 w-auto'
            />
          </div>
          {/* 2nd Column */}
          <div className="flex justify-end">
            <svg
              xmlns='https://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-menu'
            >
              <line x1={3} y1={12} x2={21} y2={12}></line>
              <line x1={3} y1={6} x2={21} y2={6}></line>
              <line x1={3} y1={18} x2={21} y2={18}></line>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
