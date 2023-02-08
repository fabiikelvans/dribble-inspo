import React from 'react';
import Image from "next/image";

function Header() {
    return (
        <div className='min-h-[100vh]'>
            <div className='grid grid-cols-1 md:grid-cols-2'>

                <div className='pt-24 space-y-6'>
                    <h4 className='font-semibold text-gray-500'>
                        <span className='bg-[#E5E3E1] text-black px-2 py-2 rounded-full mr-1'>Financial</span>
                        Planning with Urbanest
                    </h4>

                    <h1 className='text-5xl md:text-7xl font-semibold'>
                        Financial <br/>Automation for <br/>Startups
                    </h1>

                    <div className='flex flex-col md:flex-row md:items-center justify-between pt-8 space-y-6 md:space-y-0'>
                        <div className='flex items-center space-x-4'>
                            <h1 className='text-3xl font-bold'>700+</h1>
                            <span className='text-gray-600 md:w-[60%]'>Companies Using Urbanest</span>
                        </div>

                        <div className='hidden md:block'>|</div>

                        <div className='flex items-center space-x-4'>
                            <h1 className='text-3xl font-bold'>17</h1>
                            <span className='text-gray-600 md:w-[60%]'>Awarded Active Mentors</span>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <div className='relative w-full h-96 md:h-[540px] py-40 mt-8 md:mt-4'>
                        <Image src={'/images/avatar.png'}
                               alt={'Avatar'}
                               fill
                               className='object-cover w-full h-full'
                               sizes="(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                  33vw"
                        />
                    </div>


                        <div className='h-36 w-full relative cursor-pointer -mt-[35%]'>
                            <Image priority src="/images/card.png" alt='logo' layout='fill' objectFit='contain'/>
                        </div>

                </div>
            </div>
        </div>
    );
}

export default Header;