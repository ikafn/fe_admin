import React  from "react";


const bgColor = {
  darkBlue: '#6148FF',
  white: 'white',
  lightBlue: '#489CFF',
  success: '#73CA5C'
}


const Button = ({variant, onClick, img}) => {
  return (
    <button 
        type="button"
        className="flex items-center justify-center w-auto h-4 lg:h-7 bg-white ring-1 ring-[#6148FF] hover:bg-indigo-200 font-semibold p-2 m-1 rounded-3xl "
        style={{backgroundColor: bgColor[variant]}} onClick={onClick}>
        <img src={img} className="w-auto h-3 lg:h-5"/>
    </button>
  )
};

  
export default Button;
