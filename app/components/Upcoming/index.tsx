'use client'

import { BLUE } from "@/app/constants"
import { Poppins, ReadexProBold, ReadexProMedium, Sen } from "@/app/fonts"

import Image from "next/image"

import UPCOMING_CARD_1_BANNER from "@/assets/upcoming_card_1_banner.png"
import UPCOMING_BACKGROUND from "@/assets/upcoming_background.png"

import RECT_IMAGE_UPCOMING_CARD from "@/assets/rect_image_upcoming_card.png"
import ARROW_LEFT_ICON from "@/assets/arrow_left_icon.png"

import TELEGRAM_ICON from "@/assets/telegram_icon.png"
import TWITTER_ICON from "@/assets/twitter_icon.png"
import DISCORD_ICON from "@/assets/discord_icon.png"
import { useRef } from "react"

export const Upcoming = () => {

    const carouselContainer = useRef<HTMLDivElement>(null)

    const prev = () => {
        const container = carouselContainer.current
        const clientWidth = container?.clientWidth

        if (container) {
            container.scrollTo({
                left: container.scrollLeft - clientWidth!,
                behavior: 'smooth'
            })
        }
    }

    const next = () => {
        const container = carouselContainer.current
        const clientWidth = container?.clientWidth

        if (container) {
            container.scrollTo({
                left: container.scrollLeft + clientWidth!,
                behavior: 'smooth',
            })
        }
    }


    return (
        <section className="w-full py-4 relative">
            <h1 style={{
                color: BLUE
            }} className={`text-center overflow-hidden ${Sen.className} py-8 font-bold text-4xl lg:text-7xl`}>
                Live
                <span className="text-black mx-4">
                    and
                </span>
                Upcoming
            </h1>

            <div className="flex relative items-center justify-center w-full">

                <Image src={UPCOMING_BACKGROUND} alt="upcoming background" className="absolute bottom-0" />

                <div onClick={prev} style={{
                    backgroundColor: BLUE
                }} className='z-10 ani cursor-pointer   mx-1 lg:mx-2 rounded-full min-w-[40px] min-h-[40px] flex items-center justify-center'>
                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className=' invert rotate-180 w-[14.16px] h-[14.56px]' />
                </div>

                <div ref={carouselContainer} className="w-full overflow-hidden h-full responsive-upcoming-width lg:w-[1000px] z-10 gap-4 rounded-[36px] flex p-2 items-center" style={{ scrollBehavior: 'smooth' }}>

                    {Array(9)
                        .fill(0)
                        .map((_, i) => (
                            <UpcomingCards key={i} />
                        ))}
                </div>

                <div onClick={next} style={{
                    backgroundColor: BLUE
                }} className='cursor-pointer z-10 ani  mx-1 lg:mx-2 rounded-full min-w-[40px] min-h-[40px] flex items-center justify-center'>
                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='invert w-[14.16px] h-[14.56px]' />
                </div>
            </div>
        </section>
    )
}

const UpcomingCards = () => {
    return (
        <div className="text-white h-full p-2 md:min-w-[265px] min-w-[300px] responsive-salescard-width lg:min-w-[385px] bg-[#191F25] rounded-[36px]">

            <div className="w-full relative">
                <Image src={UPCOMING_CARD_1_BANNER} alt="upcoming card 1 banner" className="w-[378.56px] h-[218.44px] rounded-[26px]" />
                <div className="absolute right-4 bottom-4 rounded-[36px] px-2 py-1 bg-black">
                    <div className="flex items-center justify-start">
                        {/* <Image src={TELEGRAM_ICON} alt="Telegram Icon" className="w-[28px] h-[28px]" /> */}
                        <img src='/Images/hdtelegramlogo.png' alt="Telegram Icon" className="w-[28px] h-[28px] anilogo relative z-30" />
                        {/* <Image src={TWITTER_ICON} alt="Twitter Icon" className="w-[28px] h-[28px]" /> */}
                        <img src='/Images/hdtwitterlogo.png' alt="Twitter Icon" className="w-[28px] h-[28px] anilogo relative z-30" />
                        {/* <Image src={DISCORD_ICON} alt="Discord Icon" className="w-[28px] h-[28px]" /> */}
                        <img src='/Images/hddiscordlogo.png' alt="Discord Icon" className="w-[28px] h-[28px] anilogo relative z-30" />
                    </div></div>
            </div>

            <div className=" flex items-center space-x-2 m-4">
                <Image src={RECT_IMAGE_UPCOMING_CARD} alt="rect image upcoming card" className="w-[48.91px]" />
                <h1 className={`${ReadexProBold.className} text-lg`}>Lorem Ipsum</h1>
            </div>

            <div className="w-full px-4">
                <div className="w-full h-[2px] bg-[#2D333A]"></div>
            </div>

            <div className="flex space-x-2 py-2 mx-4 my-2">
                <div className="rounded-[12px] px-4 glow py-2 bg-[#00316A]">
                    <h1 className={`text-xs ${ReadexProMedium.className}`}>BRC 20</h1>
                </div>
                <div className="rounded-[12px] px-4 glow py-2 bg-[#00316A]">
                    <h1 className={`text-xs ${ReadexProMedium.className}`}>Ordinals</h1>
                </div>
            </div>

            <div className="flex items-center justify-between w-full px-4 flex-col space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-start flex-col">
                        <h3 className="text-xs text-[##FFFFFF] opacity-50">Total Raise</h3>
                        <h2 className="text-base">$600,000</h2>
                    </div>
                    <div className="flex items-end justify-end flex-col">
                        <h3 className="text-xs text-[##FFFFFF] opacity-50">Ends In</h3>
                        <h2 className="text-base"> 6d 1h 03 5s</h2>
                    </div>
                </div>

                <div className="flex items-center justify-between w-full">
                    <div className="flex items-start flex-col">
                        <h3 className="text-xs text-[##FFFFFF] opacity-50">Sale Type</h3>
                        <h2 className="text-base">TBA</h2>
                    </div>
                    <div className="flex items-end justify-end flex-col">
                        <h3 className="text-xs text-[##FFFFFF] opacity-50">Market Maker</h3>
                        <h2 className="text-base">TBA</h2>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundColor: BLUE,
            }} className='w-full anireverse relative z-50  h-[50px]  cursor-pointer  my-4 rounded-[36px] px-2 text-white flex items-center justify-between'>
                <h1 className={`${Poppins.className} w-full ml-8 text-sm font-semibold`}>
                    Participate Now
                </h1>
                <div className='bg-white rounded-full w-[53.82px] h-[39.82px] flex items-center justify-center'>
                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                </div>
            </div>
        </div>
    )
}
