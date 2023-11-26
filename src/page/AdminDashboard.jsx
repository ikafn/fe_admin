
import { Card, HeaderAdmin, SidebarAdmin } from "../component";
import { icon_filter } from "../assets";
import { icon_search } from "../assets";

const AdminDashboard = () => {
    return (
        <>
        <HeaderAdmin />
        <SidebarAdmin />

        <div className="ml-[23rem] mr-16">
            {/*  ---Card Count Class and User---  */}
            <div className=" items-center grid md:grid-flow-col">
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
            <div className="flex justify-between mt-6">
                <div className="flex items-center">
                    <p className="font-bold">
                        Status Pembayaran
                    </p>
                </div>

                <div className="flex ">
                    <button 
                        type="button"
                        className="flex items-center justify-center w-24 h-8 bg-white ring-1 ring-[#6148FF] hover:bg-indigo-200 font-semibold my-[1.13rem] rounded-3xl ">
                        <img src={icon_filter} /> 
                    </button>
                    <button 
                        type="button"
                        className="flex items-center justify-center w-10 h-8 bg-white font-semibold my-[1.13rem] mx-1 mr-4 rounded-3xl">
                        <img src={icon_search} /> 
                    </button>
                </div>
            </div>
        
            <div className="inline-block min-w-screen overflow-hidden">
                <table className="table-fixed items-center bg-transparent border-collapse ">
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
        </>
    )
}

export default AdminDashboard;