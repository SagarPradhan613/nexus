
'use client'

import { BLUE } from '@/app/constants'
import { Inter, Poppins, ReadexProBold } from '@/app/fonts'
import Image from 'next/image'
import Modal from './Modal'
import NEXUS_LOGO from '@/assets/nexus_logo.png'
import ARROW_LEFT_ICON from '@/assets/arrow_left_icon.png'
import USER_ICON from '@/assets/user_icon.png'
import NOTIFICATION_BELL_ICON from '@/assets/notification_bell_icon.png'
import HAMBURGER_ICON from '@/assets/hamburger_icon.png'
import { use, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
    const pathname = usePathname();

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    const navbarToggle = () => {
        setIsNavbarOpen((prev) => !prev)
    }

    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isNavbarOpen])

    const [isModalOpen, setIsModalOpen] = useState(false);

    // const toggleModal = () => {
    //     setIsModalOpen((prev) => !prev);
    // };

    const ShowModal = () => {
        setIsModalOpen(true);
    }

    const HideModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>

            {isModalOpen && (
                <Modal>
                    {/* <button onClick={HideModal}>Close</button>
                    <h1>This is the modal content</h1> */}
                    <>
                        <div className='bg-[#000000] text-white sem px-10 py-8 rounded-[50px] w-full'>
                            <div className='flex justify-between items-center'>
                                <p className='text-xl lg:text-3xl'>Sign in</p>
                                <img src='/Images/modalarrow.png' onClick={HideModal} className='w-[40px] h-[40px]'></img>
                            </div>
                            <div className='w-full mt-10 flex justify-center items-center'>
                                <p className='font-medium lg:text-base text-sm text-white opacity-55 readex'>Your Nexus wallet in one click</p>
                            </div>

                            <div className='mt-6 rounded-[40px] py-4 bg-[#111928] flex justify-center items-center'>
                                <img src='/Images/google.png'></img>
                            </div>
                            <div className='mt-4 gap-2 flex w-full'>
                                <div className='w-1/3 bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/twitter.png'></img>
                                </div>
                                <div className='w-1/3 bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/fb.png'></img>
                                </div>
                                <div className='w-1/3 bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/discord.png'></img>
                                </div>

                            </div>
                            <div className='mt-6 font-medium readex border-[#263043] border lg:text-lg text-[#0075FF] text-base rounded-[40px] py-4 flex justify-center items-center'>
                                View More Options
                            </div>
                            <div className='w-full mt-10 flex justify-center items-center'>
                                <p className='font-medium lg:text-base text-sm text-white opacity-55 readex'>We do not store any data related to social login</p>
                            </div>

                            <div className='bg-[#FFFFFF40] w-full h-[1px] bg-white opacity-40 mt-10'>

                            </div>

                            <input type='text' placeholder='name@email.com' className='mt-6 px-8 rounded-[40px] py-4 bg-[#49505F] w-full  flex justify-center items-center'>

                            </input>

                            <div className='mt-6 px-8 rounded-[40px] py-4 bg-[#0075FF] w-full  flex justify-between items-center'>
                                <p>Continue</p>
                                <img src='/Images/continue.png'></img>
                            </div>
                        </div>
                    </>
                </Modal>
            )}
            <div className='flex relative z-50 items-center justify-center w-full'>
                <nav className="w-screen max-w-[2660px] h-[68.6px] lg:h-[144.55px] flex items-center px-4 lg:px-28 justify-between">

                    {isNavbarOpen && <NavbarMobile />}

                    <div className="h-[32px] lg:h-[56.85px] flex text-white bg-[#0075FF] lg:bg-black rounded-[36px] items-center justify-between lg:px-10 space-x-4">
                        <div className={pathname === '/' ? `space-x-2 active flex bgchange py-2 px-3 rounded-[36px] items-center justify-center tracking-widest uppercase readex ${ReadexProBold.className}` : `space-x-2 flex bgchange py-2 px-3 rounded-[36px] items-center justify-center tracking-widest uppercase  readex ${ReadexProBold.className}`} >
                            <Image src={NEXUS_LOGO} alt="Nexus Logo" className='w-[14.16px] h-[14.56px]' />
                            <a href='/'><h1 className='text-base'>Nexus</h1></a>
                        </div>

                        <div className={pathname === '/launchpad' ? `px-4 hidden bgchange lg:block py-2 rounded-[36px] active` : 'px-4 hidden bgchange lg:block py-2 rounded-[36px]'}>
                            <a href='/launchpad'><h1 className={`text-base font-medium ${Inter.className}`}>Launchpad</h1></a>
                        </div>

                        <div className={pathname === '/nexus' ? `px-4 hidden z-10 cursor-pointer bgchange lg:block py-2 rounded-[36px] active` : `px-4 hidden z-10 cursor-pointer bgchange lg:block py-2 rounded-[36px]`}>
                            <a href='/nexus'> <h1 className={`text-base font-medium ${Inter.className}`}>Nexus</h1></a>
                        </div>
                    </div>

                    <div className='flex items-center justify-center space-x-2'>
                        <div className='bg-black anireverse hidden lg:flex lg:w-[55px] lg:h-[50px] w-[32px] h-[32px] rounded-[50%] items-center justify-center'>
                            <Image onClick={ShowModal} src={USER_ICON} alt="User Icon" className='w-[15.28px] hidden lg:block h-[19.65px]' />
                        </div>
                        <div onClick={navbarToggle} style={{
                            zIndex: 1000,
                        }} className='bg-black lg:w-[50px]  cursor-pointer flex lg:hidden lg:h-[48px] w-[32px] h-[32px] rounded-full items-center justify-center'>
                            <Image src={HAMBURGER_ICON} alt="Hamburger Icon" className='w-[8.76px] h-[8.73px]' />
                        </div>
                        <div className='bg-black hidden anireverse lg:flex w-[55px] h-[50px] rounded-full items-center justify-center'>
                            <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[15.28px] h-[19.65px]' />
                        </div>
                        <div style={{
                            backgroundColor: BLUE,
                        }} className='max-w-[215.1px] h-[56.85px] z-10 anireverse cursor-pointer w-full rounded-[36px] px-4 text-white p-2 hidden lg:flex items-center justify-between'>
                            <h1 className={`${Poppins.className} w-full whitespace-nowrap text-base font-bold`}>Connect Wallet</h1>
                            <div className='bg-white rounded-full w-[49.82px] h-[39.82px] flex items-center justify-center'>
                                <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] hover:translate-x-[1.009] h-[14.56px]' />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

const NavbarMobile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const toggleModal = () => {
    //     setIsModalOpen((prev) => !prev);
    // };

    const ShowModal = () => {
        setIsModalOpen(true);
    }

    const HideModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            {isModalOpen && (
                <Modal>
                    {/* <button onClick={HideModal}>Close</button>
                    <h1>This is the modal content</h1> */}
                    <>
                        <div className='bg-[#000000] text-white sem px-10 py-8 rounded-[50px] w-full'>
                            <div className='flex justify-between items-center'>
                                <p className='text-xl lg:text-3xl'>Sign in</p>
                                <img src='/Images/modalarrow.png' onClick={HideModal} className='w-[40px] h-[40px]'></img>
                            </div>
                            <div className='w-full mt-10 flex justify-center items-center'>
                                <p className='font-medium lg:text-base text-sm text-white opacity-55 readex'>Your Nexus wallet in one click</p>
                            </div>

                            <div className='mt-6 rounded-[40px] py-4 bg-[#111928] flex justify-center items-center'>
                                <img src='/Images/google.png'></img>
                            </div>
                            <div className='mt-4 gap-2 flex w-full'>
                                <div className='w-1/3 bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/twitter.png'></img>
                                </div>
                                <div className='w-1/3 bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/fb.png'></img>
                                </div>
                                <div className='w-1/3 bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/discord.png'></img>
                                </div>

                            </div>
                            <div className='mt-6 font-medium readex border-[#263043] border lg:text-lg text-[#0075FF] text-base rounded-[40px] py-4 flex justify-center items-center'>
                                View More Options
                            </div>
                            <div className='w-full mt-10 flex justify-center items-center'>
                                <p className='font-medium lg:text-base text-sm text-white opacity-55 readex'>We do not store any data related to social login</p>
                            </div>

                            <div className='bg-[#FFFFFF40] w-full h-[1px] bg-white opacity-40 mt-10'>

                            </div>

                            <input type='text' placeholder='name@email.com' className='mt-6 px-8 rounded-[40px] py-4 bg-[#49505F] w-full  flex justify-center items-center'>

                            </input>

                            <div className='mt-6 px-8 rounded-[40px] py-4 bg-[#0075FF] w-full  flex justify-between items-center'>
                                <p>Continue</p>
                                <img src='/Images/continue.png'></img>
                            </div>
                        </div>
                    </>
                </Modal>
            )}
            <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='fixed  top-0 text-white flex lg:hidden left-0 w-screen h-screen bg-white z-[100] flex-col items-center justify-start py-16'>
                <ul className='w-full space-y-8 px-16 py-8 flex flex-col h-full justify-between'>
                    <div className='space-y-8'>
                        <li className='w-full'>
                            <a href='/'>
                                <div  className='bg-black px-4 py-2 relative z-50 space-x-8 flex w-full rounded-full items-center justify-center'>
                                    {/* <Image src={USER_ICON} alt="User Icon" className='w-[15.28px] h-[19.65px]' /> */}
                                    <h1> Home </h1>
                                </div>
                            </a>

                        </li>

                        <li className='w-full '>
                            <a href='/launchpad'>
                                <div  className='bg-black px-4 py-2 space-x-8 flex w-full rounded-full items-center justify-center'>
                                    {/* <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[15.28px] h-[19.65px]' /> */}
                                    <h1> Launchpad </h1>
                                </div>
                            </a>

                        </li>
                        <li className='w-full '>
                            <a href='/nexus'>
                                <div  className='bg-black px-4 py-2 space-x-8 flex w-full rounded-full items-center justify-center'>
                                    {/* <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[15.28px] h-[19.65px]' /> */}
                                    <h1> Nexus </h1>
                                </div>
                            </a>

                        </li>
                    </div>


                    <li className='w-full '>
                        <div className='bg-black px-4 py-2 space-x-8 flex w-full rounded-full items-center justify-center'>
                            <h1 className={`${Poppins.className} text-base font-bold`}>Connect Wallet</h1>
                            <div className='bg-white rounded-full w-[39.82px] h-[39.82px] flex items-center justify-center'>
                                <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                            </div>
                        </div>
                    </li>


                </ul>
            </motion.div>
        </>

    )
}