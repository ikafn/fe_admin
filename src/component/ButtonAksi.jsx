import React  from "react";

const bgColor = {
  darkBlue: '#6148FF',
  red: 'red',
  success: '#73CA5C'
}


const ButtonAksi = ({text, onClick, variant}) => {
  return (
    <button 
      type="submit"
      className="w-10 h-4 lg:w-[3.125rem] lg:h-[1.25rem] m-1 text-white text-[0.5rem] lg:text-[0.625rem] font-semibold rounded-3xl "
      style={{backgroundColor: bgColor[variant]}} onClick={onClick}>{text}
    </button>
  )
};

export default ButtonAksi;
