'use client'


// import { Featured } from "./components/Featured"
// import { Landing } from "./components/Landing"
// import { Upcoming } from "./components/Upcoming"
// import { AnimatePresence } from 'framer-motion'

import ELLIPSE_TOP_LEFT from '@/assets/ellipse_top_left.png'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Landing } from '../components/Landing'
import { Featured } from '../components/Featured'
import { Upcoming } from '../components/Upcoming'
import { CompletedSales } from '../components/CompletedSales'
import UpperFooter from '../components/UpperFooter'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'


const Launchpad = () => {
    return (
        <>
            <AnimatePresence>
                <div className='pb-16'>
                    <Navbar></Navbar>
                    <Image src={ELLIPSE_TOP_LEFT} alt="Ellipse Top Left" className='absolute z-10 -top-36 -left-36' />
                    <Landing />
                    <Featured />
                    <Upcoming />
                    <CompletedSales />
                    <UpperFooter />
                    <Footer></Footer>
                </div>

            </AnimatePresence>
        </>
    )
}

export default Launchpad