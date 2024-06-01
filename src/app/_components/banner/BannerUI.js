import React from 'react'

const BannerUI = () => {
    return (
         <div className="flex flex-col justify-center">
            <div className="relative flex flex-wrap mx-auto justify-center">
                <div className="min-w-[340px]flex flex-col group">
                    <div
                        className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                        <img src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
                            className="object-cover w-screen h-full scale-100 group-hover:scale-110 transition-all duration-400"
                            alt="" />

                            <div
                                className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                            </div>

                    </div>
                    

                </div>
            </div>
        </div>
  )
}

export default BannerUI