import { useEffect, useRef, useState } from "react";
import { ButtonAksi, Card, CreateModul, HeaderAdmin, SidebarAdmin } from "../component";
import axios from "axios";

const AdminModul = () => {
    const [showModalUbah, setShowModalUbah] = useState(false);
    const [showModalHapus, setShowModalHapus] = useState(false);
    const [modules, setModules] = useState([]);
    const [modulesData, setModulesData] = useState([]);
    const [counts, setCounts] = useState([]);

    const chapter_idRef = useRef('')
    const nameRef = useRef('')
    const videoRef = useRef('')
    const durationRef = useRef('')

    const [alert, setAlert] = useState(null);

    // GET ALL MODULES 
    const getListModules = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/modules', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setModules(data.data.data);
            console.log(data.data.data)
        } catch(err) {
            console.log(err)
        }
    };

    // UPDATE MODULE 
    const handleUpdate = async () => {
        try {
            const payloadUpdate = {
                chapter_id : chapter_idRef.current.value,
                name: nameRef.current.value,
                video: videoRef.current.value,
                duration: durationRef.current.value
            }
            const res = await axios.put(`https://befinalprojectbinar-production.up.railway.app/api/admin/modules/${modulesData.id}`, payloadUpdate, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setAlert({ type: "success", message: "Modul updated successfully" });
            setTimeout(() => setAlert(null), 1000);

            console.log("Data berhasil diupdate:", res.data);
            setShowModalUbah(false);
            getListModules()
        } catch(err) {
            setAlert({ type: "error", message: `Modul added failed: ${err.response.data.message}` });
            setTimeout(() => setAlert(null), 1000);
            console.log(err);
        } 
    };

    // DELETE MODULE 
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`https://befinalprojectbinar-production.up.railway.app/api/admin/modules/${modulesData.id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setAlert({ type: "success", message: "Modul deleted successfully" });
            setTimeout(() => setAlert(null), 1000);

            console.log("Data berhasil dihapus:", res.data);
            setShowModalHapus(false)
            getListModules()
        } catch(err) {
            setAlert({ type: "error", message: `Modul failed to delete: ${err.response.data.message}` });
            setTimeout(() => setAlert(null), 1000);
            console.log(err)
        }
    };

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
    };
    
    // SEARCH DATA 
    const capitalizeFirstLetter = (str) => {
        var words = str.split(" ");
        for (var i = 0; i < words.length; i++) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    };
    const searchData = async (searchTerm) => {
        try {
          const response = await axios.get(`https://befinalprojectbinar-production.up.railway.app/api/admin/modules?name=${capitalizeFirstLetter(searchTerm)}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          setModules(response.data.data);
          console.log('Search Results:', response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getListModules(),
        getCounts()
    }, []);

    return (
        <>
        <HeaderAdmin searchData={searchData}/>
        <SidebarAdmin />
        <div className="container mx-auto pl-14 pr-5 lg:pl-20 flex flex-col">
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

            <div className="flex justify-between py-2">
                <div className="flex items-center">
                    <p className="text-[0.563rem] lg:text-sm font-bold">Kelola Modul</p>
                </div>

                <div className="flex items-center">
                    <CreateModul />
                </div>
            </div>

            {/* <TableModul /> */}
            <div className="overflow-x-auto min-w-screen">
                <table className="table w-full items-center bg-transparent border-collapse ">
                    <thead className="bg-[#EBF3FC] text-[0.5rem] lg:text-xs  whitespace-nowrap font-semibold text-left">
                        <tr >
                            <th className="p-6 py-2">Nama Chapter</th>
                            <th className="p-6 py-2">Nama Modul</th>
                            <th className="p-6 py-2">Durasi</th>
                            <th className="p-6 py-2">Aksi</th>
                        </tr>
                    </thead>

                    <tbody className="border-t-0 px-4 text-[0.5rem] lg:text-[0.625rem] font-bold whitespace-nowrap p-4 text-left">
                        {modules.map((module) => ( 
                            <tr key={module.id}>
                                <td className="p-6 py-2">{module.chapter.name}</td>
                                <td className="p-6 py-2">{module.name}</td>
                                <td className="p-6 py-2">{module.duration}</td>
                                <td className="flex font-bold whitespace-nowrap p-6 py-2">
                                    <ButtonAksi text={'Ubah'} variant='success' onClick={() => {setShowModalUbah(true); setModulesData(module)}} />
                                    <ButtonAksi text={'Hapus'} variant='red' onClick={() => {setShowModalHapus(true); setModulesData(module)}} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/*  ---Tabel Modul---  */}
        </div>

        {/*  ---Modals Ubah Modul---  */}
        {showModalUbah ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-2  rounded-t">
                            <button
                                type="button"
                                className="ml-auto text-[#6148FF] text-lg float-right leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModalUbah(false)}
                            >
                                x
                            </button>
                        </div>
                        <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold py-2">
                            Ubah Modul
                        </p>
                        <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                            <div className="flex-auto p-1">
                                <label htmlFor="chapter_id" className="text-gray-800  font-bold leading-tight tracking-normal">ID Chapter</label>
                                <input 
                                    type="text"
                                    id="chapter_id" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    ref={chapter_idRef}
                                    defaultValue={modulesData.chapter.id}
                                    disabled
                                    />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Nama Modul</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    ref={nameRef}
                                    defaultValue={modulesData.name}
                                    />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="video" className="text-gray-800  font-bold leading-tight tracking-normal">Link Video Modul</label>
                                <input 
                                    type="text"
                                    id="video" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    ref={videoRef}
                                    defaultValue={modulesData.video}
                                    />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="duration" className="text-gray-800  font-bold leading-tight tracking-normal">Durasi</label>
                                <input 
                                    type="number"
                                    id="duration" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    ref={durationRef}
                                    defaultValue={modulesData.duration}
                                    />
                            </div>
                        </form>
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi text={'Batal'} variant='red' onClick={() => setShowModalUbah(false)} />
                            <ButtonAksi text={'Simpan'} variant='success' onClick={() => handleUpdate()} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        {/*  ---Modals Ubah Modul---  */}

        {/*  ---Modals Hapus Modul---  */}
        {showModalHapus ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-5 px-10">
                        <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">Hapus Modul</p>
                        <p className="flex justify-center items-center text-xs text-black py-2">Anda yakin ingin menghapus modul ini?</p>
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi text={'Batal'} variant='red' onClick={() => setShowModalHapus(false)} />
                            <ButtonAksi text={'Hapus'} variant='success' onClick={() =>  handleDelete()} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        {/*  ---Modals Hapus Modul---  */}

        <div className="flex items-center justify-center text-sm">
            {alert && (
                <div
                    className={`fixed bottom-4 text-${
                        alert.type === "success" ? "green" : "red"
                    }-500 bg-${
                        alert.type === "success" ? "green" : "red"
                    }-100 p-2 rounded-lg border border-${
                        alert.type === "success" ? "green" : "red"
                    }-500 shadow-md`}
                >
                    {alert.message}
                </div>
            )}
        </div>
        </> 
    )
}

export default AdminModul;