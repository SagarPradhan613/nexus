import React, { useState } from "react";




const ForthSection = () => {

    const [active, setActive] = useState(1);

// console.log(active)

    return (
        <>
            <div className="relative mt-6 lg:mt-10 w-full">
                <div className="absolute hide-responsive-img right-0 z-10 -top-[70rem] w-full">
                    <img src="/Images/forthright.png" className="w-full"></img>
                </div>
                <div className="  lg:mt-16  w-full lg:gap-7 px-4 responsive-body-padding lg:px-28">
                    <div className="flex flex-col w-full justify-center items-center">
                        <p className="text-black relative z-30 sen font-bold text-3xl lg:text-7xl text-center">Makes us <span className="text-[#0075FF]">Better</span> </p>
                        <p className="text-center lg:mt-8 mt-4 font-medium lg:text-2xl text-sm">We provide straight forward tools that maximize <br></br> financial opportunities.</p>
                    </div>

                    <div className="lg:flex flex-wrap justify-center relative z-30 lg:mt-16 mt-6 gap-6">
                        <div  className={`responsive-card-width w-full rounded-[50px] bgchange  flex px-8 py-6 lg:px-8 lg:py-8`}>
                            <div className="w-1/2 mr-3  flex justify-center items-center">
                                <img className="lg:h-[70px] lg:w-[70px] h-[40px] w-[40px]" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/Nexus-N.svg"></img>
                            </div>
                            <div className="flex items-center">
                                <p className="text-white font-bold text-sm lg:text-xl">Community backed launches infused into an innovative platform.  </p>
                            </div>
                        </div>

                        <div  className={`responsive-card-width my-4 lg:my-0 w-full rounded-[50px] bgchange  flex px-8 py-6 lg:px-8 lg:py-8`}>
                            <div className="w-1/2  mr-3 flex justify-center items-center">
                                <img className="lg:h-[70px] lg:w-[70px] h-[40px] w-[40px]" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/Hammer.svg"></img>
                            </div>
                            <div className="flex items-center">
                                <p className="text-white font-bold text-sm lg:text-xl">Premium experience on all devices with user-friendly interface.  </p>
                            </div>
                        </div>

                        <div  className={`responsive-card-width  w-full rounded-[50px] bgchange  flex px-8 py-6 lg:px-8 lg:py-8`}>
                            <div className="w-1/2  mr-3 flex justify-center items-center">
                                <img className="lg:h-[70px] lg:w-[70px] h-[40px] w-[40px]" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/Settings.svg"></img>
                                
                            </div>
                            <div className="flex items-center">
                                <p className="text-white font-bold text-sm lg:text-xl">Perfected crafted tools for all new launchpad experience.<span className="font-medium">supported on desktop & mobile.</span> </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ForthSection;