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
        <div className="flex items-center justify-between rounded-2xl w-28 h-12 md:w-44 md:h-20 lg:w-72 lg:h-28 lg:mt-10" style={{backgroundColor: bgColor[variant]}}>
            <div className="flex items-center">
                <img className="m-2 lg:m-6 w-5 h-5 md:w-10 md:h-10 lg:h-16 lg:w-16 object-cover" src={icon_user} alt="profile" />
                <div className=" text-[0.5rem] md:text-xs lg:text-xl text-white">
                    <p>{totalUser}</p>
                    <p className="font-bold">{countClassUser}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;