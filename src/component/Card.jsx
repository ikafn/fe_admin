import React  from "react";
import { icon_user } from "../assets";

const bgColor = {
    lightBlue: '#489CFF',
    success: '#73CA5C',
    darkBlue: '#6148FF',
    info: 'yellow'
}

const Card = ({totalUser, countClassUser, variant}) => {
    return (
        <>
        <div className="justify-between mt-10 w-72 h-28 rounded-2xl" style={{backgroundColor: bgColor[variant]}}>
            <div className="flex items-center">
                <img className="m-6 h-16 w-16 object-cover" src={icon_user} alt="profile" />
                <div>
                    <h3 className="text-2xl text-white">{totalUser}</h3>
                    <span className="block text-xl font-bold text-white">{countClassUser}</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;