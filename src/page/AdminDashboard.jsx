
import { Button, ButtonAksi, Card, HeaderAdmin, SidebarAdmin } from "../component";
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

            {/*  ---Tabel Payment---  */}
            <div className="flex justify-between">
                <div className="flex items-center">
                    <p className="text-[0.625rem] lg:text-sm font-bold">
                        Status Pembayaran
                    </p>
                </div>

                <div className="flex items-center">
                    <Button
                        variant='white'
                        onClick={() => setShowModalFilter(true)}
                        img={icon_filter}
                    />
                    <button 
                        type="button"
                        className="flex items-center justify-center p-1 w-5 h-4 lg:w-10 lg:h-7 bg-white font-semibold my-[1.13rem] rounded-3xl">
                        <img src={icon_search} /> 
                    </button>
                </div>
            </div>
        
            <div className="overflow-x-auto min-w-screen">
                <table className="table w-full items-center bg-transparent border-collapse ">
                    <thead className="bg-[#EBF3FC] lg:py-3 text-[0.625rem] lg:text-xs whitespace-nowrap font-semibold text-left">
                        <tr>
                            <th className="p-6 py-2">
                                ID
                            </th>
                            <th className="p-6 py-2">
                                Kategori
                            </th>
                            <th className="p-6 py-2">
                                Kelas Premium
                            </th>
                            <th className="p-6 py-2">
                                Status
                            </th>
                            <th className="p-6 py-2">
                                Metode Pembayaran
                            </th>
                            <th className="p-6 py-2">
                                Tanggal Bayar
                            </th>
                        </tr>
                    </thead>

                    <tbody className="border-t-0 px-4 text-[0.5rem] lg:text-[0.625rem] font-bold whitespace-nowrap p-4 text-left">
                        <tr>
                            <td className="p-6 py-2 text-[#4E5566]">
                                johndoe23
                            </td>
                            <td className="p-6 py-2 text-[#4E5566]">
                                UI/UX Design
                            </td>
                            <td className="p-6 py-2">
                                Belajar Web Designer dengan Figma 
                            </td> 
                            <td className="p-6 py-2">
                                SUDAH BAYAR
                            </td>
                            <td className="p-6 py-2">
                                Credit Card
                            </td>
                            <td className="p-6 py-2">
                                21 Sep, 2023 at 2:00 AM
                            </td>
                        </tr>
                        <tr>
                            <th className="p-6 py-2 text-[#4E5566]">
                                johndoe23
                            </th>
                            <td className="p-6 py-2 text-[#4E5566]">
                                UI/UX Design
                            </td>
                            <td className="p-6 py-2">
                                Belajar Web Designer dengan Figma 
                            </td> 
                            <td className="p-6 py-2">
                                BELUM BAYAR
                            </td>
                            <td className="p-6 py-2">
                                -
                            </td>
                            <td className="p-6 py-2">
                                -
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

                        {/*body*/}
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

                        {/* footer */}
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

export default AdminDashboard;