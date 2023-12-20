
import { Card, FilterOrder, HeaderAdmin, SidebarAdmin } from "../component";
import { icon_search } from "../assets";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [counts, setCounts] = useState([]);

    // GET LIST ORDER 
    const getListOrders = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/orders', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setOrders(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }

    // GET COUNTS 
    const getCounts = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/counts', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setCounts(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getListOrders(),
        getCounts();
    }, [])

    return (
        <>
        <HeaderAdmin />
        <SidebarAdmin />

        <div className="container mx-auto pl-20 pr-10 flex flex-col">
            {/*  ---Card Count Class and User---  */}
            <div className="flex mt-16 justify-between"> 
                <Card
                    totalUser= {counts.total_user}
                    countClassUser= "Active Users"
                    variant="darkBlue" 
                />
                <Card
                    totalUser= {counts.total_course}
                    countClassUser= "Active Class"
                    variant="success" 
                />
                <Card
                    totalUser= {counts.total_premium_course}
                    countClassUser= "Premium Class"
                    variant="lightBlue" 
                />
            </div>
            {/*  ---Card Count Class and User---  */}

            <div className="flex justify-between">
                <div className="flex items-center">
                    <p className="text-[0.625rem] lg:text-sm font-bold">Status Pembayaran</p>
                </div>
                <div className="flex items-center p-2">
                    <FilterOrder />
                    {/* <button 
                        type="button"
                        className="flex items-center justify-center p-1 w-5 h-4 lg:w-10 lg:h-7 bg-white font-semibold my-[1.13rem] rounded-3xl">
                        <img src={icon_search} /> 
                    </button> */}
                </div>
            </div>      
             
            {/*  ---Tabel Orders---  */}
            <div className="overflow-x-auto min-w-screen">
                <table className="table w-full items-center bg-transparent border-collapse ">
                    <thead className="bg-[#EBF3FC] lg:py-3 text-[0.625rem] lg:text-xs whitespace-nowrap font-semibold text-left">
                        <tr>
                            <th className="p-6 py-2">ID</th>
                            <th className="p-6 py-2">Kategori</th>
                            <th className="p-6 py-2">Kelas Premium</th>
                            <th className="p-6 py-2">Status</th>
                            <th className="p-6 py-2">Metode Pembayaran</th>
                            <th className="p-6 py-2">Tanggal Bayar</th>
                        </tr>
                    </thead>
                    <tbody className="border-t-0 px-4 text-[0.5rem] lg:text-[0.625rem] font-bold whitespace-nowrap p-4 text-left">
                        {orders.map((order) => ( 
                            <tr key={order.id}>
                                <td className="p-6 py-2 text-[#4E5566]">
                                    {order.user.email}
                                </td>
                                <td className="p-6 py-2 text-[#4E5566]">
                                    {order.course.category.category}
                                </td>
                                <td className="p-6 py-2">
                                    {order.course.name}
                                </td> 
                                <td className={`p-6 py-2 ${order.status === "BELUM BAYAR" ? 'text-red-500' : 'text-green-500'}`}>
                                    {order.status}
                                </td>
                                <td className="p-6 py-2">
                                    {order.order_method}
                                </td>
                                <td className="p-6 py-2">
                                    {order.payment_date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/*  ---Tabel Orders---  */}
        </div>
        </>
    )
}

export default AdminDashboard;