import React, { useEffect, useState }  from "react";
import ButtonAksi from "./ButtonAksi";
import axios from "axios";

const TableOrders = () => {

    const [orders, setOrders] = useState([]);
    const getListOrders = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/orders');
            // console.log(data)
            setOrders(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getListOrders();
    }, [])

    return (
      <>
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
                            <td className="p-6 py-2">
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

      </>
    )
  };
  
    
  export default TableOrders;



