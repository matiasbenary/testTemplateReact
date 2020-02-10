import React from 'react';

const Card = ({title, description, img,id}) => {
    return (
        <div className="rounded-lg max-w-xs md:max-w-xs overflow-hidden bg-white shadow hover:shadow-2xl transform hover:scale-105 transition ease-in duration-200 cursor-pointer m-4">
            <img className="w-full" src={`http://fonselp.local/storage/${img}`} alt="" />
            {/* <img className="w-full" src={`http://fonselp.local/storage/uploads/images/activities/3.jpeg`} alt="" /> */}
            <div className="font-bold mb-2 px-5 text-sm md:text-2xl ">
               {title}
            </div>
            {/* <div className="px-2 py-3 flex items-end  justify-center">
                <div className="inline-block align-middle">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M16.32 7.1A8 8 0 1 1 9 4.06V2h2v2.06c1.46.18 2.8.76 3.9 1.62l1.46-1.46 1.42 1.42-1.46 1.45zM10 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM7 0h6v2H7V0zm5.12 8.46l1.42 1.42L10 13.4 8.59 12l3.53-3.54z"/>
                    </svg>
                </div>
                <p className="">01/01/tesf1</p>
                <div className="py-1">
                    <svg className="h-6  w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/>
                    </svg>
                    <p>01/01/2021</p>
                </div>
            </div> */}
            <p className="px-2 mb-5 text-base">{description}</p>
        
        </div>
    )
}

export default Card;