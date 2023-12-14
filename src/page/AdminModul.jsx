import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonAksi, Card, HeaderAdmin, SidebarAdmin, TableModul } from "../component";
import { icon_filter } from "../assets";
import { icon_search } from "../assets";
import { icon_tambah } from "../assets";
import axios from "axios";
import CreateModul from "../component/Modal/CreateModul";
import { createPortal } from "react-dom";


const AdminModul = () => {
    const [showModalTambah, setShowModalTambah] = useState(false);
    const [showModalFilter, setShowModalFilter] = useState(false);
    const [showModalUbah, setShowModalUbah] = useState(false);
    const [showModalHapus, setShowModalHapus] = useState(false);

    const [modules, setModules] = useState([]);
    const [modulesData, setModulesData] = useState([]);
    const [chapter_id, setChapter_id] = useState('');
    const [name, setName] = useState('');
    const [video, setVideo] = useState('');
    const [duration, setDuration] = useState('');
    const [counts, setCounts] = useState([]);



    // GET ALL MODULES 
    const getListModules = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/modules');
            setModules(data.data.data);
            console.log(data.data.data)
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getListModules();
    }, [])

    // CREATE NEW MODULES 
    const handleCreate = async () => {
        try {
          const payload = {
            chapter_id,
            name,
            video,
            duration
          }
          const res = await axios.post('https://befinalprojectbinar-production.up.railway.app/api/admin/modules', payload)

        setShowModalTambah(false);
        getListModules();
    
        } catch(err) {
          console.log(err);
        } 
    }


    


    // GET CHAPTER ID 
    const [idChapter, setIdChapter] = useState('')
    const getChapterId = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/chapters');
            setIdChapter(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getChapterId();
    }, [])

    // const [modulesDetail, setModulesDetail] = useState([])
    // // GET MODULES DETAIL 
    // const getModulesDetail = async () => {
    //     try {
    //         const data = await axios.get(`https://befinalprojectbinar-production.up.railway.app/api/modules/${modulesData.id}`);
    //         setModulesDetail(data.data.data);
    //         console.log(data.data.data)
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }
    // useEffect(() => {
    //     getModulesDetail();
    // }, [])


    const chapter_idRef = useRef('')
    const nameRef = useRef('')
    const videoRef = useRef('')
    const durationRef = useRef('')

    // UPDATE MODULE 
    const handleUpdate = async () => {
        try {
          const payloadUpdate = {
            chapter_id : chapter_idRef.current.value,
            name: nameRef.current.value,
            video: videoRef.current.value,
            duration: durationRef.current.value
          }
          await axios.put(`https://befinalprojectbinar-production.up.railway.app/api/admin/modules/${modulesData.id}`, payloadUpdate)

        // console.log(namaRef.current.value)
        setShowModalUbah(false);
        getListModules()
        } catch(err) {
          console.log(err);
        } 
    }

    // DELETE MODULE 
    const handleDelete = async () => {
        try {
            await axios.delete(`https://befinalprojectbinar-production.up.railway.app/api/admin/modules/${modulesData.id}`);
            setShowModalHapus(false)
            getListModules()
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
            console.log(data.data.data)
            setCounts(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
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
                    variant="lightBlue" 
                />
                <Card
                    totalUser= {counts.total_course}
                    countClassUser= "Active Class"
                    variant="success" 
                />
                <Card
                    totalUser= {counts.total_premium_course}
                    countClassUser= "Premium Class"
                    variant="darkBlue" 
                />
            </div>
            {/*  ---Card Count Class and User---  */}

            {/*  ---Tabel Modul---  */}
            <div className="flex justify-between">
                <div className="flex items-center">
                    <p className="text-[0.625rem] lg:text-sm font-bold">
                        Kelola Modul
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

            {/* <TableModul /> */}

            <div className="overflow-x-auto min-w-screen">
                <table className="table w-full items-center bg-transparent border-collapse ">
                    <thead className="bg-[#EBF3FC] text-[0.625rem] lg:text-xs  whitespace-nowrap font-semibold text-left">
                        <tr >
                            <th className="p-6 py-2">
                                Nama Chapter
                            </th>
                            <th className="p-6 py-2">
                                Nama Modul
                            </th>
                            <th className="p-6 py-2">
                                Durasi
                            </th>
                            <th className="p-6 py-2">
                                Aksi
                            </th>
                        </tr>
                    </thead>

                    <tbody className="border-t-0 px-4 text-[0.5rem] lg:text-[0.625rem] font-bold whitespace-nowrap p-4 text-left">
                        {modules.map((module) => ( 
                            <tr key={module.id}>
                                <td className="p-6 py-2">
                                    {module.chapter.name}
                                </td>
                                <td className="p-6 py-2">
                                    {module.name}
                                </td>
                                <td className="p-6 py-2">
                                    {module.duration}
                                </td>
                                <td className="flex font-bold whitespace-nowrap p-6 py-2">
                                    <ButtonAksi
                                        text={'Ubah'}
                                        variant='darkBlue'
                                        onClick={() => {setShowModalUbah(true); setModulesData(module)}}
                                    />
                                    <ButtonAksi
                                        text={'Hapus'}
                                        variant='red'
                                        onClick={() => {setShowModalHapus(true); setModulesData(module)}}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/*  ---Tabel Modul---  */}
    
        </div>


        {/*  ---Modals Tambah Modul---  */}
        {showModalTambah ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-2  rounded-t">
                            <button
                                type="button"
                                className="ml-auto text-[#6148FF] text-lg  float-right leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModalTambah(false)}
                            >
                                x
                            </button>
                        </div>

                        <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold py-2">
                            Tambah Modul
                        </p>
                        <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">ID Chapter</label>
                                <select className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border"
                                onClick={(e) => setChapter_id(e.target.value)}>
                                    {idChapter.map((chapter, index) => ( 
                                        <option
                                            key={index}
                                            value={chapter.id}
                                            >
                                            {chapter.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Nama Modul</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    // value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Link Video Modul</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    // value={video}
                                    onChange={(e) => setVideo(e.target.value)} />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Durasi</label>
                                <input 
                                    type="number"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    // value={duration}
                                    onChange={(e) => setDuration(Number(e.target.value))} />
                            </div>
                            
                        </form>
                        
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi
                                text={'Batal'}
                                variant='red'
                                onClick={() => setShowModalTambah(false)}
                            />
                            <ButtonAksi
                                text={'Simpan'}
                                variant='success'
                                onClick={() => handleCreate()}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}

        {/*  ---Modals Tambah Modul---  */}

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
                            Filter Modul
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
          
            
        {/*  ---Modals Ubah Modul---  */}
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

                        {/* body*/}
                        <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold py-2">
                            Ubah Modul
                        </p>
                        <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">ID Chapter</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    ref={chapter_idRef}
                                    defaultValue={modulesData.chapter.id}
                                    onClick={(e) => setChapter_id(e.target.value)}
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
                                    onChange={(e) => setName(e.target.value)}
                                    />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Link Video Modul</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    ref={videoRef}
                                    defaultValue={modulesData.video}
                                    onChange={(e) => setVideo(e.target.value)}
                                    />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Durasi</label>
                                <input 
                                    type="number"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    ref={durationRef}
                                    defaultValue={modulesData.duration}
                                    onChange={(e) => setDuration(Number(e.target.value))}
                                    />
                            </div>
                        </form>
                        
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi
                                text={'Batal'}
                                variant='red'
                                onClick={() => setShowModalUbah(false)}
                            />
                            <ButtonAksi
                                text={'Simpan'}
                                variant='success'
                                onClick={() => handleUpdate()}
                            />
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
                {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-5 px-10">
                        {/*header*/}
                        <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">
                            Hapus Modul
                        </p>

                        {/*body*/}
                        <p className="flex justify-center items-center text-xs text-black py-2">
                            Anda yakin ingin menghapus modul ini?
                        </p>

                        {/*footer*/}
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi
                                text={'Batal'}
                                variant='red'
                                onClick={() => setShowModalHapus(false)}
                            />
                            <ButtonAksi
                                text={'Hapus'}
                                variant='success'
                                onClick={() =>  handleDelete()}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        {/*  ---Modals Hapus Modul---  */}


        </> 
    )
}

export default AdminModul;