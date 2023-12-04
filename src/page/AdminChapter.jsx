import React, { useState } from "react";
import { Card, HeaderAdmin, SidebarAdmin } from "../component";
import { icon_filter } from "../assets";
import { icon_search } from "../assets";
import { icon_tambah } from "../assets";



const AdminChapter = () => {
    const [showModalTambah, setShowModalTambah] = useState(false);
    const [showModalUbah, setShowModalUbah] = useState(false);
    const [showModalHapus, setShowModalHapus] = useState(false);
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
                    <button 
                        type="button"
                        className="flex items-center justify-center  w-16 h-4 lg:w-[7.75rem] lg:h-8 mr-2 bg-[#6148FF] ring-1 ring-[#6148FF] hover:bg-indigo-200 font-semibold rounded-3xl "
                        onClick={() => setShowModalTambah(true)}>
                        <img src={icon_tambah} /> 
                    </button>

                    <button 
                        type="button"
                        className="flex items-center justify-center w-12 h-4 lg:w-24 lg:h-8 bg-white ring-1 ring-[#6148FF] hover:bg-indigo-200 font-semibold my-[1.13rem] rounded-3xl "
                        onClick={() => setShowModalFilter(true)}>
                        <img src={icon_filter} /> 
                    </button>

                    <button 
                        type="button"
                        className="flex items-center justify-center p-1 w-5 h-4 lg:w-10 lg:h-8 bg-white font-semibold my-[1.13rem] mx-1 rounded-3xl">
                        <img src={icon_search} /> 
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto min-w-screen">
                <table className="table w-full items-center bg-transparent border-collapse ">
                    <thead className="bg-[#EBF3FC] text-[0.625rem] lg:text-xs  whitespace-nowrap font-semibold text-left">
                        <tr >
                            <th className="p-6 py-2">
                                ID Kelas
                            </th>
                            <th className="p-6 py-2">
                                Nama Chapter
                            </th>
                            <th className="p-6 py-2">
                                Aksi
                            </th>
                        </tr>
                    </thead>

                    <tbody className="border-t-0 px-4 text-[0.5rem] lg:text-[0.625rem] font-bold whitespace-nowrap p-4 text-left">
                        <tr>
                            <td className="p-6 py-2">
                                5ec9d2c2-d8ca-44b2-9691-148ee1abba34
                            </td>
                            <td className="p-6 py-2">
                                Chapter 1 - Pendahuluan
                            </td>
                            <td className="flex font-bold whitespace-nowrap p-6 py-2">
                                <button 
                                    type="button"
                                    className="w-10 h-4 lg:w-[3.125rem] lg:h-[1.25rem] mr-2 text-white bg-[#6148FF] hover:bg-indigo-200 rounded-3xl "
                                    onClick={() => setShowModalUbah(true)} >
                                    Ubah
                                </button>
                                <button 
                                    type="button"
                                    className=" w-10 h-4 lg:w-[3.125rem] lg:h-[1.25rem] text-white bg-[red] hover:bg-red-200 rounded-3xl "
                                    onClick={() => setShowModalHapus(true)} >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-6 py-2 ">
                                5ec9d2c2-d8ca-44b2-9691-148ee1abba34
                            </td>
                            <td className="p-6 py-2 ">
                                Chapter 2 - Memulai Desain
                            </td>
                            <td className="flex font-bold whitespace-nowrap p-6 py-2">
                                <button 
                                    type="button"
                                    className="w-10 h-4 lg:w-[3.125rem] lg:h-[1.25rem] mr-2 text-white bg-[#6148FF] hover:bg-indigo-200 rounded-3xl "
                                    onClick={() => setShowModalUbah(true)} >
                                    Ubah
                                </button>
                                <button 
                                    type="button"
                                    className=" w-10 h-4 lg:w-[3.125rem] lg:h-[1.25rem] text-white bg-[red] hover:bg-red-200 rounded-3xl "
                                    onClick={() => setShowModalHapus(true)} >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>
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
                            <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">
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
                            <button
                                type="button"
                                className="bg-red-600 text-white active:bg-red-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-red-400 mr-1 mb-1 ease-linear transition-all duration-150"
                                onClick={() => setShowModalTambah(false)}>
                                Upload Video
                            </button>
                            <button
                                type="button"
                                className="bg-[#6148FF] text-white active:bg-indigo-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-indigo-400 mr-1 mb-1 ease-linear transition-all duration-150"
                                onClick={() => setShowModalTambah(false)}>
                                Simpan
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {/*  ---Modals Tambah Chapter---  */}

            {/*  ---Modals Ubah Chapter---  */}
            {showModalUbah ? (
                <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-2  rounded-t">
                                <button
                                    type="button"
                                    className="ml-auto text-[#6148FF] text-lg float-right leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModalUbah(false)}
                                >
                                    x
                                </button>
                            </div>

                            {/*body*/}
                            <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">
                                Ubah Chapter
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
                            <button
                                type="button"
                                className="bg-red-600 text-white active:bg-red-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-red-400 mr-1 mb-1 ease-linear transition-all duration-150"
                                onClick={() => setShowModalUbah(false)}>
                                Upload Video
                            </button>
                            <button
                                type="button"
                                className="bg-[#6148FF] text-white active:bg-indigo-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-indigo-400 mr-1 mb-1 ease-linear transition-all duration-150"
                                onClick={() => setShowModalUbah(false)}>
                                Simpan
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {/*  ---Modals Ubah Chapter---  */}


            {/*  ---Modals Hapus Chapter---  */}
            {showModalHapus ? (
                <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-5 px-10">
                            {/*header*/}
                            <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">
                                Hapus Modul
                            </p>

                            {/*body*/}
                            <p className="flex justify-center items-center text-xs text-black py-2">
                                Anda yakin ingin menghapus chapter ini?
                            </p>

                            {/*footer*/}
                            <div className="flex items-center justify-center p-2 mb-2">
                            <button
                                type="button"
                                className="bg-[#73CA5C] text-white active:bg-green-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-green-200 mr-1 mb-1 ease-linear transition-all duration-150"
                                onClick={() => setShowModalHapus(false)}>
                                Batal
                            </button>
                            <button
                                type="button"
                                className="bg-red-600 text-white active:bg-red-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-red-400 mr-1 mb-1 ease-linear transition-all duration-150"
                                onClick={() => setShowModalHapus(false)}>
                                Hapus
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {/*  ---Modals Hapus Chapter---  */}


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
                            <p className="flex justify-center items-center text-xs lg:text-sm text-[#6148FF] font-bold py-2">
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

                                <div>
                                    <p className="flex text-black font-semibold py-2">
                                        Tipe Kelas
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
                                            Gratis
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
                                            Premium
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <p className="flex text-black font-semibold py-2">
                                        Level
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
                                            Beginner
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
                                            Intermediate
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
                                            Advanced
                                        </label>
                                    </div>
                                </div>
                            </form>

                            {/*footer*/}
                            {/* <div className="flex items-center justify-center p-2 mb-2">
                                <button
                                    type="button"
                                    className="bg-[#6148FF] text-white active:bg-indigo-500 hover:bg-indigo-200 font-bold text-[0.625rem] rounded-2xl ease-linear transition-all duration-150"
                                    onClick={() => setShowModalFilter(false)}>
                                    Filter
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {/*  ---Modals Filter---  */}
        </div>
        </> 
    )
}

export default AdminChapter;