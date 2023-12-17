import { useState } from "react";
import { bx_search } from "../assets"
import axios from "axios";

const HeaderAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      console.log('Search Term:', searchTerm);

      // Perform an API request for search based on the searchTerm
      const response = await axios.get(`https://befinalprojectbinar-production.up.railway.app/api/courses?name=${searchTerm}`);
      
      // Handle the response data, for example, log it to the console
      console.log('Search Results:', response.data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  const handleKeyPress = (e) => {
    // Trigger search if Enter key is pressed
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <>
    <header className="fixed min-w-full flex  p-4  bg-[#EBF3FC] h-12 sm:h-14 lg:h-20 justify-between items-center">
      <h1 className="text-[#6148FF] font-bold text-xs md:text-sm lg:text-lg ml-16 lg:ml-32">Hi, Admin!</h1>

      <div className="flex lg:mr-[5rem]">
        <div className="flex items-center justify-center w-44 h-8 lg:w-72 lg:h-12 bg-white font-semibold rounded-2xl py-2 px-3">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Cari"
              className="w-full h-full text-xs lg:text-sm text-gray-900 focus:outline-none"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              />
            <button
              type="button"
              onClick={handleSearch}

              className="flex items-center justify-center bg-[#6148FF] w-6 h-6 lg:w-[2.300rem] lg:h-[2.250rem] rounded-lg lg:rounded-xl">
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
