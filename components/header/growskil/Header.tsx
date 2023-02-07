import React from 'react';
import Image from "next/image";

function Header() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 pt-20 relative'>
            <div className='w-full md:w-[90%]'>
                <h1 className='text-5xl font-bold'>
                    Improve your soft skills
                </h1>
                <p className='py-10'>Simplified and straight to the point courses created for you. Maximise your results</p>

                <div className='relative w-full md:w-[80%]'>
                    <input className='px-4 py-3 md:py-4 rounded-xl w-full border border-gray-500 focus:outline-none' placeholder='your email address'/>
                    <button className='px-4 h-[80%] my-auto rounded-xl bg-black absolute top-[10%] right-2 text-sm text-white'> Start Now</button>
                </div>

                <div className='flex items-center justify-between text-sm mt-8'>
                    <div>
                        <h4><span className='text-red-500'>|</span> <span className='font-bold'> 2 hour</span> Class weekly 2 days</h4>
                    </div>
                    <div>
                        <h4><span className='text-green-500'>|</span> <span className='font-bold'> $800</span> Average per year</h4>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='relative w-full h-90 md:h-[440px] py-40 mt-8 md:-mt-4'>
                    <Image src={'/images/teacher.png'}
                           alt={'Teacher'}
                           fill
                           className='object-cover w-full h-full'
                           sizes="(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                  33vw"
                    />
                </div>
            </div>

            <div className='h-64 w-36 -z-10 bg-orange-500 absolute top-[30%] left-[40%] rounded-full blur-3xl'></div>
        </div>
    );
}

export default Header;