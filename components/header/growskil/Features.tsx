import React from 'react';

function Features() {
    return (
        <div className='relative flex flex-col md:flex-row justify-between space-x-0 text-center md:text-left space-y-16 md:space-y-0 md:space-x-12 my-24'>
            <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>Design Guideline</h3>
                <p className='text-sm font-light w-full md:w-[70%]'>We built the design guideline to help you understand the design system clearly.</p>
            </div>

            <div className='md:h-28 md:w-1 md:opacity-40 bg-gray-800 w-full h-[0.5px]'></div>

            <div className='text-center space-y-4'>
                <span className='text-sm font-light'>Be open to feedback</span>
                <div className='w-20 h-[1px] mx-auto bg-blue-500'/>
                <h2 className='text-xl font-semibold'>How to Improve Your Soft Skills in a Workplace</h2>
            </div>

            <div className='md:h-28 md:w-1 bg-white w-full h-[0.5px]'></div>

            <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>Design Tutorial</h3>
                <p className='text-sm font-light w-full md:w-[70%]'>These libraries would help the designer understand and work correctly with the system</p>
            </div>

            <div className='h-64 w-36 -z-10 bg-green-400 absolute top-[10%] right-[30%] rounded-full blur-3xl'></div>

        </div>
    );
}

export default Features;