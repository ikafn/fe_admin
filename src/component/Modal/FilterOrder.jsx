import React, { useState }  from "react";
import { icon_filter } from "../../assets";
import ButtonAksi from "../ButtonAksi";
import Button from "../Button";

const FilterOrder = () => {
    const [showModalFilter, setShowModalFilter] = useState(false);
    
    return (
    <>
        <Button
            variant='white'
            onClick={() => setShowModalFilter(true)}
            img={icon_filter}
        />

        {/*  ---Modals Filter---  */}
        {showModalFilter ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-1 rounded-t">
                            <button
                                type="button"
                                className="ml-auto text-[#6148FF] text-lg float-right leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModalFilter(false)}
                            >
                                x
                            </button>
                        </div>
                        <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold py-2">
                            Filter Pembayaran
                        </p>
                        <form className="bg-white max-w-max text-[0.625rem] lg:text-xs rounded-2xl px-14 py-1">
                            <div>
                                <p className="flex text-black font-semibold py-1">
                                    Status
                                </p>
                                <div className="flex items-center mb-2">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="default-checkbox"
                                        className="ms-2 font-normal text-gray-500"
                                    >
                                        Sudah Bayar
                                        </label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="default-checkbox"
                                        className="ms-2 font-normal text-gray-500"
                                    >
                                        Belum Bayar
                                    </label>
                                </div>
                            </div>
                            <div>
                                <p className="flex text-black font-semibold py-2">
                                    Metode Pembayaran
                                </p>
                                <div className="flex items-center mb-2">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="default-checkbox"
                                        className="ms-2 font-normal text-gray-500"
                                    >
                                        Bank Transfer
                                        </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="default-checkbox"
                                        className="ms-2 font-normal text-gray-500"
                                    >
                                        Credit Card
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi
                                text={'Filter'}
                                variant='darkBlue'
                                onClick={() => setShowModalFilter(false)}
                            />
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

  
export default FilterOrder;
