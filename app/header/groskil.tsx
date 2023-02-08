import React from 'react';
import Nav from "@/components/header/growskil/Nav";
import Header from "@/components/header/growskil/Header";
import Features from "@/components/header/growskil/Features";

// Dribble Link
// https://dribbble.com/shots/17432201/attachments/12561912?mode=media

function Groskil() {
    return (
        <div className='px-12 md:px-24 bg-gradient-to-r from-cyan-100/25 to-blue-100/30 overflow-hidden'>
            <Nav/>
            <Header/>
            <Features/>
        </div>
    );
}

export default Groskil;