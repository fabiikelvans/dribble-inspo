import React from 'react';
import {BsDropletHalf} from "react-icons/bs";

function Features() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 py-24'>
            <div className='bg-[#E5E3E1] flex  justify-center items-center p-8 rounded-2xl'>
                <div className='space-y-4'>
                    <h3 className='text-xl font-semibold w-[60%]'>Real-Time Cash & Runway Reports</h3>
                    <p>
                        Create accurate investor-ready cash flow forecast models in minutes.
                    </p>
                </div>
            </div>

            <div className='space-y-4 '>
                <h4>Run Instant Analysis</h4>
                <hr/>
                <h2 className='text-lg font-semibold'>Design and Forecast</h2>
                <hr/>
                <h4>Collaborate with Purpose</h4>
            </div>

            <div className='space-y-4'>
                <BsDropletHalf className='text-2xl'/>
                <p>
                    Find all your data in a flexible spreadsheet for easy viewing and custom modelling.
                </p>
                <p>Study real-time reports and quickly forecast with simplified tools that put you in charge</p>
            </div>
        </div>
    );
}

export default Features;