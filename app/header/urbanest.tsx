import React from 'react';
import Nav from "@/components/header/urbanest/Nav";
import Header from "@/components/header/urbanest/Header";
import {Dosis} from "@next/font/google";
import Features from "@/components/header/urbanest/Features";

// Dribble Link
// https://dribbble.com/shots/19229963-3D-Assets-Web-Site-Design-Landing-Page-Home-Page-UI


const dosis = Dosis({ subsets: ['latin'] })

function Urbanest()
{
    return (
        <div style={dosis.style} className='bg-[#F6F4F0] px-12 md:px-24'>
            <Nav/>
            <Header/>
            <Features/>
        </div>
    );
}

export default Urbanest;