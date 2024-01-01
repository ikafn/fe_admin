
import { Button, ButtonAksi, CardCount, Checkbox, HeaderAdmin, SidebarAdmin } from "../component";
import { icon_filter } from "../assets";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [showModalFilter, setShowModalFilter] = useState(false);

    const [orders, setOrders] = useState([]);

    const [selectedStatus, setSelectedStatus] = useState([]);
    const [selectedMethod, setSelectedMethod] = useState([]);


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
      
    const handleStatusChange = (status) => {
        setSelectedStatus((prevStatus) => (prevStatus === status ? null : status));
    };
    const handleMethodChange = (order_method) => {
        setSelectedMethod((prevOrder_method) => (prevOrder_method === order_method ? null : order_method));
    };
      
    // FILTER ORDER
    const handleFilter = async () => {
        try {
          const response = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/orders', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            params: {
              status: selectedStatus,
              method: selectedMethod
            },
          });
          console.log('Filtered Courses:', response.data);
          setOrders(response.data.data);
          setShowModalFilter(false);
        } catch (error) {
          console.error('Error during filtering:', error);
        }
    };
    const handleClearFilters = () => {
        setSelectedStatus([]);
        setSelectedMethod([]);
        getListOrders();
        setShowModalFilter(false);
    };

    useEffect(() => {
        getListOrders()
    }, [])

    return (
        <>
        <HeaderAdmin />
        <SidebarAdmin />

        <div className="container mx-auto pl-14 pr-5 lg:pl-20 flex flex-col">
            {/*  ---Card Count Class and User---  */}
                <CardCount />
            {/*  ---Card Count Class and User---  */}

            <div className="flex justify-between">
                <div className="flex items-center">
                    <p className="text-[0.563rem] lg:text-sm font-bold">Status Pembayaran</p>
                </div>
                <div className="flex items-center p-2">
                    {/* <FilterOrder />  */}

                    <Button
                        variant='white'
                        onClick={() => setShowModalFilter(true)}
                        img={icon_filter}
                    />
                </div>
            </div>      
             
            {/*  ---Tabel Orders---  */}
            <div className="overflow-x-auto min-w-screen">
                <table className="table w-full items-center bg-transparent border-collapse ">
                    <thead className="bg-[#EBF3FC] lg:py-3 text-[0.5rem] lg:text-xs whitespace-nowrap font-semibold text-left">
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
                                    {order.order_method || '-'}
                                </td>
                                <td className="p-6 py-2">
                                    {order.payment_date || '-'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/*  ---Tabel Orders---  */}
        </div>

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
                                <p className="flex text-black text-[0.625rem] lg:text-xs font-semibold py-1">Status Pembayaran</p>
                                <Checkbox 
                                    name={'SUDAH BAYAR'}
                                    isChecked={selectedStatus === 'SUDAH BAYAR'}
                                    onChange={() => handleStatusChange('SUDAH BAYAR')}
                                />
                                <Checkbox 
                                    name={'BELUM BAYAR'}
                                    isChecked={selectedStatus === 'BELUM BAYAR'}
                                    onChange={() => handleStatusChange('BELUM BAYAR')}
                                />
                            </div>
                            {/* <div>
                                <p className="flex text-black text-[0.625rem] lg:text-xs font-semibold py-1">Metode Pembayaran</p>
                                <Checkbox 
                                    name={'Credit Card'}
                                    isChecked={selectedMethod === 'Credit Card'}
                                    onChange={() => handleMethodChange('Credit Card')}
                                />
                                <Checkbox 
                                    name={'Bank Transfer'}
                                    isChecked={selectedMethod === 'Bank Transfer'}
                                    onChange={() => handleMethodChange('Bank Transfer')}
                                />
                            </div> */}
                        </form>
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi text={'Clear'} variant='red' onClick={handleClearFilters} />
                            <ButtonAksi text={'Filter'} variant='darkBlue' onClick={handleFilter}/>
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