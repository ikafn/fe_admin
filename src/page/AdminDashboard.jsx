
import { Card, HeaderAdmin, SidebarAdmin } from "../component";
import { icon_filter } from "../assets";
import { icon_search } from "../assets";
import { useState } from "react";

const AdminDashboard = () => {
    const [showModalFilter, setShowModalFilter] = useState(false);

    return (
        <>
        <HeaderAdmin />
        <SidebarAdmin />

        <div className="container mx-auto pl-20 pr-10 flex flex-col">
            {/*  ---Card Count Class and User---  */}
            <div className=" flex mt-20 justify-between">
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

            {/*  ---Tabel Payment---  */}
            <div className="flex justify-between mt-2">
                <div className="flex items-center">
                    <p className="font-bold">
                        Status Pembayaran
                    </p>
                </div>

                <div className="flex ">
                    <button 
                        type="button"
                        className="flex items-center justify-center w-24 h-8 bg-white ring-1 ring-[#6148FF] hover:bg-indigo-200 font-semibold my-[1.13rem] rounded-3xl "
                        onClick={() => setShowModalFilter(true)}>
                        <img src={icon_filter} /> 
                    </button>
                    <button 
                        type="button"
                        className="flex items-center justify-center w-10 h-8 bg-white font-semibold my-[1.13rem] mx-1 rounded-3xl">
                        <img src={icon_search} /> 
                    </button>
                </div>
            </div>
        
            <div className="overflow-x-auto min-w-screen">
                <table className="table w-full items-center bg-transparent border-collapse ">
                    <thead >
                        <tr>
                            <th className="px-6 bg-[#EBF3FC] text-black py-3 text-xs  whitespace-nowrap font-semibold text-left">
                                ID
                            </th>
                            <th className="px-6 bg-[#EBF3FC] text-black py-3 text-xs  whitespace-nowrap font-semibold text-left">
                                Kategori
                            </th>
                            <th className="block px-6 bg-[#EBF3FC] text-black py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Kelas Premium
                            </th>
                            <th className="px-6 bg-[#EBF3FC] text-black py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Status
                            </th>
                            <th className="px-6 bg-[#EBF3FC] text-black py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Metode Pembayaran
                            </th>
                            <th className="px-6 bg-[#EBF3FC] text-black py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Tanggal Bayar
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold text-[#4E5566] whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                johndoe23
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold text-[#4E5566] whitespace-nowrap p-4 ">
                                UI/UX Design
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                Belajar Web Designer dengan Figma 
                            </td> 
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                SUDAH BAYAR
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                Credit Card
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                21 Sep, 2023 at 2:00 AM
                            </td>
                        </tr>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold text-[#4E5566] whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                johndoe23
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold text-[#4E5566] whitespace-nowrap p-4 ">
                                UI/UX Design
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                Belajar Web Designer dengan Figma
                            </td> 
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                BELUM BAYAR
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                -
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                21 Sep, 2023 at 2:00 AM
                            </td>
                        </tr>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold text-[#4E5566] whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                johndoe23
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold text-[#4E5566] whitespace-nowrap p-4 ">
                                UI/UX Design
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                Belajar Web Designer dengan Figma
                            </td> 
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                BELUM BAYAR
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                -
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[0.625rem] font-bold whitespace-nowrap p-4">
                                21 Sep, 2023 at 2:00 AM
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
            {/*  ---Tabel Payment---  */}
        </div>


        {/*  ---Modals Filter---  */}
        {showModalFilter ? (
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
                                onClick={() => setShowModalFilter(false)}
                            >
                                x
                            </button>
                        </div>
                        <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">
                            Filter Pembayaran
                        </p>

                        {/*body*/}
                        <form className="bg-white max-w-max rounded-2xl px-14 py-1">
                            <div>
                                <p className="flex text-xs text-black font-semibold py-1">
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
                                        className="ms-2 text-xs font-normal text-gray-500"
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
                                        className="ms-2 text-xs font-normal text-gray-500"
                                    >
                                        Belum Bayar
                                    </label>
                                </div>
                            </div>

                            <div>
                                <p className="flex text-xs text-black font-semibold py-2">
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
                                        className="ms-2 text-xs font-normal text-gray-500"
                                    >
                                        Bank Transfer
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
                                        className="ms-2 text-xs font-normal text-gray-500"
                                    >
                                        Credit Card
                                    </label>
                                </div>
                            </div>
                        </form>

                        {/*footer*/}
                        <div className="flex items-center justify-center p-2 mb-2">
                            <button
                                type="button"
                                className="bg-[#6148FF] text-white active:bg-indigo-500 hover:bg-indigo-200 font-bold text-[0.625rem] py-2 px-6 rounded-2xl mr-1 mb-1 ease-linear transition-all duration-150"
                                onClick={() => setShowModalFilter(false)}>
                                Filter
                            </button>
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

export default AdminDashboard;