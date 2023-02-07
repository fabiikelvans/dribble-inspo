"use client"
import React, {useState} from 'react';
import Link from "next/link";

const menus = [
    { name: "Courses", link: "/" },
    { name: "Resources", link: "/",},
    { name: "News", link: "/" },
    { name: "Jobs", link: "/" },
];

function Nav() {

    const [navbar, setNavbar] = useState(false);

    return (
        <div className='flex items-center justify-between py-8'>
            <nav className="w-full bg-white  z-20 fixed md:relative top-0 left-0 ">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div>
                                <h2 className='text-xl font-bold'>Groskil</h2>
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >
                            <div className='flex h-[100vh] md:h-full flex-col md:flex-row items-center justify-center space-y-8 md:space-x-6 md:space-y-0'>
                                {menus?.map((menu, i) => (
                                    <Link href={menu?.link}
                                          key={i}
                                          className={'font-light text-lg md:text-sm'}

                                    >   {menu?.name} </Link>
                                ))}
                                <div>
                                    <button className='px-4 py-2 border border-black text-md md:text-sm rounded-lg'
                                    >Contact</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>


    );
}

export default Nav;