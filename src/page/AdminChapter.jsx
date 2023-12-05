import React, { useState } from "react";
import { Button, ButtonAksi, Card, HeaderAdmin, SidebarAdmin, TableChapter } from "../component";
import { icon_filter } from "../assets";
import { icon_search } from "../assets";
import { icon_tambah } from "../assets";


const AdminChapter = () => {
    const [showModalTambah, setShowModalTambah] = useState(false);
    const [showModalFilter, setShowModalFilter] = useState(false);

    return (
        <>
        
        <HeaderAdmin />
        <SidebarAdmin />
        <div className="container mx-auto pl-20 pr-10 flex flex-col">
            {/*  ---Card Count Class and User---  */}
            <div className="flex mt-16 justify-between">   
                <Card
                    totalUser= "450"
                    countClassUser= "Active Users"
                    variant="lightBlue" 
                />
                <Card
                    totalUser= "25"
                    countClassUser= "Active Class"
                    variant="success" 
                />
                <Card
                    totalUser= "20"
                    countClassUser= "Premium Class"
                    variant="darkBlue" 
                />        
            </div>
            {/*  ---Card Count Class and User---  */}

            {/*  ---Tabel Chapter---  */}
            <div className="flex justify-between">
                <div className="flex items-center">
                    <p className="text-[0.625rem] lg:text-sm font-bold">
                        Kelola Chapter
                    </p>
                </div>

                <div className="flex items-center">
                    <Button
                        variant='darkBlue'
                        onClick={() => setShowModalTambah(true)}
                        img={icon_tambah}
                    />
                    <Button
                        variant='white'
                        onClick={() => setShowModalFilter(true)}
                        img={icon_filter}
                    />
                    {/* <Button
                        variant='white'
                        onClick={}
                        img={icon_search}
                    /> */}

                    <button 
                        type="button"
                        className="flex items-center justify-center p-1 w-5 h-4 lg:w-10 lg:h-7 bg-white font-semibold my-[1.13rem] rounded-3xl">
                        <img src={icon_search} /> 
                    </button>
                </div>
            </div>

            <TableChapter />
            
            {/*  ---Tabel Chapter---  */}
        </div>


        {/*  ---Modals Tambah Chapter---  */}
            {showModalTambah ? (
                <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-2  rounded-t">
                                <button
                                    type="button"
                                    className="ml-auto text-[#6148FF] text-lg  float-right leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModalTambah(false)}
                                >
                                    x
                                </button>
                            </div>

                            {/*body*/}
                            <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold py-2">
                                Tambah Chapter
                            </p>
                            <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                                <div className="flex-auto p-1">
                                    <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">ID Kelas</label>
                                    <select class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border">
                                        <option>5ec9d2c2-d8ca-44b2-9691-148ee1abba34</option>
                                        <option>5ec9d2c2-d8ca-44b2-9691-148ee1abba34</option>
                                        <option>5ec9d2c2-d8ca-44b2-9691-148ee1abba34</option>
                                    </select>
                                </div>
                                <div className="flex-auto p-1">
                                    <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Nama Chapter</label>
                                    <input 
                                        type="text"
                                        id="name" 
                                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                        placeholder="Text" />
                                </div>
                            </form>
                            
                            {/*footer*/}
                            <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi
                                text={'Batal'}
                                variant='red'
                                onClick={() => setShowModalTambah(false)}
                            />
                            <ButtonAksi
                                text={'Simpan'}
                                variant='success'
                                onClick={() => setShowModalTambah(false)}
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {/*  ---Modals Tambah Chapter---  */}

            {/*  ---Modals Filter---  */}
            {showModalFilter ? (
                <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-1  rounded-t">
                                <button
                                    type="button"
                                    className="ml-auto text-[#6148FF] text-lg float-right leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModalFilter(false)}
                                >
                                    x
                                </button>
                            </div>
                            <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold py-2">
                                Filter Chapter
                            </p>

                            {/*body*/}
                            <form className="bg-white text-[0.625rem] lg:text-xs max-w-max rounded-2xl px-14 py-1">
                                <div>
                                    <p className="flex text-black font-semibold py-1">
                                        Kategori
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
                                           UI/UX Design
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
                                            Web Development
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
                                            Android Development
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
                                            Data Science
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
                                            Business Intelligence
                                        </label>
                                    </div>
                                </div>

                            </form>

                            {/*footer*/}
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
}

export default AdminChapter;