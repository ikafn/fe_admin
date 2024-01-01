import { useState } from "react";
import { bx_search } from "../assets"

const HeaderAdmin = ({searchData}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    searchData(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
    <header className="fixed min-w-full flex  bg-[#EBF3FC] h-12 sm:h-14 lg:h-20 justify-between items-center">
      <h1 className="text-[#6148FF] font-bold text-[0.625rem] md:text-sm lg:text-lg ml-14 lg:ml-28">Hi, Admin!</h1>

      <div className=" mr-5 lg:mr-14">
        <div className="flex items-center justify-center w-32 h-6 lg:w-72 lg:h-12 bg-white font-semibold rounded-2xl py-2 px-3">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Cari"
              className="w-full h-full text-[0.625rem] lg:text-sm text-gray-900 focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              />
            <button
              type="button"
              onClick={handleSearch}
              className="flex items-center justify-center bg-[#6148FF] w-5 h-5 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl">
              <img src= {bx_search} alt="search"/>
            </button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default HeaderAdmin;
