import React, { useState }  from "react";
import { icon_filter } from "../../assets";
import ButtonAksi from "../ButtonAksi";
import Button from "../Button";
import axios from "axios";
import Checkbox from "../Checkbox";

const FilterCourse = () => {
    const [showModalFilter, setShowModalFilter] = useState(false);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);

    const handleCategoryChange = (category) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter((c) => c !== category);
            } else {
                return [...prevCategories, category];
            }
        });
     };
      
    const handleTypeChange = (type) => {
        setSelectedTypes((prevTypes) => (prevTypes === type ? null : type));
    };
      
    const handleLevelChange = (level) => {
        setSelectedLevels((prevLevels) => (prevLevels === level ? null : level));
    };
    const handleClearFilters = () => {
        setSelectedCategories([]);
        setSelectedTypes([]);
        setSelectedLevels([]);
    };

    const handleFilter = async () => {
        try {
          const response = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/courses', {
            params: {
              category: selectedCategories, type: selectedTypes, level: selectedLevels,
            },
          });
          console.log('Filtered Courses:', response.data);
          setShowModalFilter(false);
        } catch (error) {
          console.error('Error during filtering:', error);
        }
    };
      
    return (
    <>
        <Button variant='white' onClick={() => setShowModalFilter(true)} img={icon_filter} />

        {/*  ---Modals Filter---  */}
        {showModalFilter ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-1 rounded-t">
                            <button
                                type="button"
                                className="ml-auto text-[#6148FF] text-lg float-right font-semibold"
                                onClick={() => setShowModalFilter(false)}
                            >
                                x
                            </button>
                        </div>
                        <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold py-2">
                            Filter Kelas
                        </p>
                        <form className="bg-white text-[0.625rem] lg:text-xs max-w-max rounded-2xl px-14 py-1">
                            <div>
                                <p className="flex text-black font-semibold py-1">Kategori</p>
                                <Checkbox 
                                    name={'Android'}
                                    isChecked={selectedCategories.includes('Android')}
                                    onChange={() => handleCategoryChange('Android')}
                                />
                                <Checkbox 
                                    name={'Data Science'}
                                    isChecked={selectedCategories.includes('Data Science')}
                                    onChange={() => handleCategoryChange('Data Science')}
                                />
                                <Checkbox 
                                    name={'UI/UX'}
                                    isChecked={selectedCategories.includes('UI/UX')}
                                    onChange={() => handleCategoryChange('UI/UX')}
                                />
                                <Checkbox 
                                    name={'Product Manager'}
                                    isChecked={selectedCategories.includes('Product Manager')}
                                    onChange={() => handleCategoryChange('Product Manager')}
                                />
                                <Checkbox 
                                    name={'Web Development'}
                                    isChecked={selectedCategories.includes('Web Development')}
                                    onChange={() => handleCategoryChange('Web Development')}
                                />
                                <Checkbox 
                                    name={'IOS'}
                                    isChecked={selectedCategories.includes('IOS')}
                                    onChange={() => handleCategoryChange('IOS')}
                                />
                            </div>
                            <div>
                                <p className="flex text-black font-semibold py-2">Tipe Kelas</p>
                                <Checkbox 
                                    name={'Free'}
                                    isChecked={selectedTypes === 'Free'}
                                    onChange={() => handleTypeChange('Free')}
                                />
                                <Checkbox 
                                    name={'Premium'}
                                    isChecked={selectedTypes === 'Premium'}
                                    onChange={() => handleTypeChange('Premium')}
                                />
                            </div>
                            <div>
                                <p className="flex text-black font-semibold py-2">Level</p>
                                <Checkbox 
                                    name={'Beginner'}
                                    isChecked={selectedLevels === 'Beginner'}
                                    onChange={() => handleLevelChange('Beginner')}
                                />
                                <Checkbox 
                                    name={'Intermediate'}
                                    isChecked={selectedLevels === 'Intermediate'}
                                    onChange={() => handleLevelChange('Intermediate')}
                                />
                                <Checkbox 
                                    name={'Advanced'}
                                    isChecked={selectedLevels === 'Advanced'}
                                    onChange={() => handleLevelChange('Advanced')}
                                />
                            </div>
                        </form>
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi text={'Clear'} variant='red' onClick={handleClearFilters} />
                            <ButtonAksi text={'Filter'} variant='darkBlue' onClick={handleFilter} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
            ) : null}
        {/*  ---Modals Filter---  */}
    </>
  )
};

export default FilterCourse;
