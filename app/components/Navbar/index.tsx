
import { BLUE } from '@/app/constants'
import { Inter, Poppins, ReadexProBold } from '@/app/fonts'
import Image from 'next/image'

import NEXUS_LOGO from '@/assets/nexus_logo.png'
import ARROW_LEFT_ICON from '@/assets/arrow_left_icon.png'
import USER_ICON from '@/assets/user_icon.png'
import NOTIFICATION_BELL_ICON from '@/assets/notification_bell_icon.png'
import HAMBURGER_ICON from '@/assets/hamburger_icon.png'

export const Navbar: React.FC = () => {
    return (
        <nav className="w-screen h-[68.6px] lg:h-[144.55px] flex items-center px-8 lg:px-28 justify-between">

            <div className="h-[32px] lg:h-[56.85px] flex text-white bg-[#0075FF] lg:bg-black rounded-[36px] items-center justify-between px-10 space-x-4">
                <div className={`space-x-2 flex items-center justify-center tracking-widest uppercase ${ReadexProBold.className}`}>
                    <Image src={NEXUS_LOGO} alt="Nexus Logo" className='w-[14.16px] h-[14.56px]' />
                    <h1 className='text-base'>Nexus</h1>
                </div>

                <div style={{
                    backgroundColor: BLUE,
                }} className='px-4 hidden lg:block py-2 rounded-[36px]'>
                    <h1 className={`text-base font-medium ${Inter.className}`}>Launchpad</h1>
                </div>

                <div className='px-4 hidden lg:block py-2 rounded-[36px]'>
                    <h1 className={`text-base font-medium ${Inter.className}`}>Nexus</h1>
                </div>
            </div>

            <div className='flex items-center justify-center space-x-2'>
                <div className='bg-black lg:w-[50px] lg:h-[48px] w-[32px] h-[32px] rounded-full flex items-center justify-center'>
                    <Image src={HAMBURGER_ICON} alt="Hamburger Icon" className='w-[8.76px] h-[8.73px] lg:hidden block' />
                    <Image src={USER_ICON} alt="User Icon" className='w-[15.28px] hidden lg:block h-[19.65px]' />
                </div>
                <div className='bg-black hidden lg:flex w-[50px] h-[48px] rounded-full items-center justify-center'>
                    <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[15.28px] h-[19.65px]' />
                </div>
                <div style={{
                    backgroundColor: BLUE,
                }} className='max-w-[215.1px] h-[56.85px] w-full rounded-[36px] px-4 text-white p-2 hidden lg:flex items-center justify-between'>
                    <h1 className={`${Poppins.className} w-full whitespace-nowrap text-base font-bold`}>Connect Wallet</h1>
                    <div className='bg-white rounded-full w-[49.82px] h-[39.82px] flex items-center justify-center'>
                        <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                    </div>
                </div>
            </div>
        </nav>
    )
}