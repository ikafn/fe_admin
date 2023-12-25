import React, { useEffect, useRef, useState } from "react";
import { ButtonAksi, Card, CreateChapter, HeaderAdmin, SidebarAdmin } from "../component";
import axios from "axios";

const AdminChapter = () => {
    const [showModalUbah, setShowModalUbah] = useState(false);
    const [showModalHapus, setShowModalHapus] = useState(false);
    const [chapters, setChapters] = useState([]);
    const [chapterData, setChapterData] = useState();
    const [counts, setCounts] = useState([]);

    const course_idRef = useRef('')
    const nameRef = useRef('')

    const [alert, setAlert] = useState(null);

    // GET LIST CHAPTER 
    const getListChapters = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/chapters', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setChapters(data.data.data);
            console.log(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }

    // UPDATE CHAPTER 
    const handleUpdate = async () => {
        try {
            const payloadUpdate = {
                course_id: course_idRef.current.value,
                name: nameRef.current.value
            }
            const res = await axios.put(`https://befinalprojectbinar-production.up.railway.app/api/admin/chapters/${chapterData.id}`, payloadUpdate, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            setAlert({ type: "success", message: "Chapter updated successfully" });
            setTimeout(() => setAlert(null), 1000);

            console.log("Data berhasil diupdate:", res.data);
            setShowModalUbah(false);
            getListChapters()
        } catch(err) {
            setAlert({ type: "error", message: `Chapter added failed: ${err.response.data.message}` });
            setTimeout(() => setAlert(null), 1000);
            console.log(err);
        } 
    }

    // DELETE CHAPTER 
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`https://befinalprojectbinar-production.up.railway.app/api/admin/chapters/${chapterData.id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setAlert({ type: "success", message: "Chapter deleted successfully" });
            setTimeout(() => setAlert(null), 1000);

            console.log("Data berhasil dihapus:", res.data);
            setShowModalHapus(false)
            getListChapters()
        } catch(err) {
            setAlert({ type: "error", message: `Chapter failed to delete: ${err.response.data.message}` });
            setTimeout(() => setAlert(null), 1000);
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
    };

    const capitalizeFirstLetter = (str) => {
        var words = str.split(" ");
        for (var i = 0; i < words.length; i++) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    };

    const searchData = async (searchTerm) => {
        try {
          const response = await axios.get(`https://befinalprojectbinar-production.up.railway.app/api/admin/courses?name=${capitalizeFirstLetter(searchTerm)}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          setChapters(response.data.data);
          console.log('Search Results:', response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getListChapters(),
        getCounts();
    }, [])

    return (
        <>
        <HeaderAdmin searchData={searchData}/>
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
                    <p className="text-[0.625rem] lg:text-sm font-bold">Kelola Chapter</p>
                </div>

                <div className="flex items-center p-2">
                    <CreateChapter />
                    {/* <Button
                        variant='white'
                        onClick={() => setShowModalFilter(true)}
                        img={icon_filter}
                    />
                    <button 
                        type="button"
                        className="flex items-center justify-center p-1 w-5 h-4 lg:w-10 lg:h-7 bg-white font-semibold my-[1.13rem] rounded-3xl">
                        <img src={icon_search} /> 
                    </button> */}
                </div>
            </div>

            {/* <TableChapter /> */}
            <div className="overflow-x-auto min-w-screen">
                <table className="table w-full items-center bg-transparent border-collapse ">
                    <thead className="bg-[#EBF3FC] text-[0.625rem] lg:text-xs  whitespace-nowrap font-semibold text-left">
                        <tr >
                            <th className="p-6 py-2">Nama Kelas</th>
                            <th className="p-6 py-2">Nama Chapter</th>
                            <th className="p-6 py-2">Aksi</th>
                        </tr>
                    </thead>

                    <tbody className="border-t-0 px-4 text-[0.5rem] lg:text-[0.625rem] font-bold whitespace-nowrap p-4 text-left">
                        {chapters.map((chapter, index) => (
                            <tr key={index}>
                                <td className="p-6 py-2">{chapter.course.name}</td>
                                <td className="p-6 py-2">{chapter.name}</td>
                                <td className="flex font-bold whitespace-nowrap p-6 py-2">
                                    <ButtonAksi text={'Ubah'} variant='success' onClick={() => {setShowModalUbah(true); setChapterData(chapter)}} />
                                    <ButtonAksi text={'Hapus'} variant='red' onClick={() => {setShowModalHapus(true); setChapterData(chapter)}} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/*  ---Tabel Chapter---  */}
        </div>

        {/*  ---Modals Ubah Chapter---  */}
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
                        <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold py-2">Ubah Chapter</p>
                        <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                            <div className="flex-auto p-1">
                                <label htmlFor="course_id" className="text-gray-800  font-bold leading-tight tracking-normal">ID Kelas</label>
                                <input 
                                    type="text"
                                    id="course_id" 
                                    className="form-control text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    defaultValue={chapterData.course.id}
                                    ref={course_idRef}
                                    disabled
                                    />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Nama Chapter</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="form-control text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    defaultValue={chapterData.name}
                                    ref={nameRef}
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
        {/*  ---Modals Ubah Chapter---  */}

        {/*  ---Modals Hapus Chapter---  */}
        {showModalHapus ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-5 px-10">
                        <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">
                            Hapus Chapter
                        </p>
                        <p className="flex justify-center items-center text-xs text-black py-2">
                            Anda yakin ingin menghapus chapter ini?
                        </p>
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi text={'Batal'} variant='red' onClick={() => setShowModalHapus(false)} />
                            <ButtonAksi text={'Hapus'} variant='success' onClick={() => handleDelete()} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        {/*  ---Modals Hapus Chapter---  */}

        <div className="flex items-center justify-center text-sm">
            {alert && (
                <div
                    className={`fixed bottom-4 text-${
                        alert.type === "success" ? "green" : "red"
                    }-500 bg-${
                        alert.type === "success" ? "green" : "red"
                    }-100 p-2 rounded-xl`}
                >
                    {alert.message}
                </div>
            )}
        </div>
        </> 
    )
}

export default AdminChapter;