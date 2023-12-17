import React, { useEffect, useRef, useState } from "react"
import { ButtonAksi, Card, CreateCourse, FilterCourse, HeaderAdmin, SidebarAdmin } from "../component";
import { icon_search } from "../assets";
import axios from "axios";

const AdminKelas = () => {
    const [showModalUbah, setShowModalUbah] = useState(false);
    const [showModalHapus, setShowModalHapus] = useState(false);

    const codeRef = useRef('')
    const category_idRef = useRef('')
    const levelRef = useRef('')
    const nameRef = useRef('')
    const facilitatorRef = useRef('')
    const typeRef = useRef('')
    const priceRef = useRef('')
    const telegram_groupRef = useRef('')
    const introduction_videoRef = useRef('')
    const descriptionRef = useRef('')
    const on_boardingRef = useRef('')

    const [courses, setCourses] = useState([]);
    const [coursesData, setCoursesData] = useState([]);
    const [counts, setCounts] = useState([]);


    // GET ALL COURSES 
    const getListCourses = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/courses');
            setCourses(data.data.data);
            console.log(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }

    // UPDATE CHAPTER 
    const handleUpdate = async (e) => {
        try {
            const payloadUpdate = {
                code: codeRef.current.value,
                category_id: category_idRef.current.value,
                level: levelRef.current.value,
                name: nameRef.current.value,
                facilitator: facilitatorRef.current.value,
                type: typeRef.current.value,
                price: priceRef.current.value,
                telegram_group: telegram_groupRef.current.value,
                introduction_video: introduction_videoRef.current.value,
                description: descriptionRef.current.value,
                on_boarding: on_boardingRef.current.value
            }
          await axios.put(`https://befinalprojectbinar-production.up.railway.app/api/admin/courses/${coursesData.id}`, payloadUpdate)

        setShowModalUbah(false);
        getListCourses();
        getCounts();
        } catch(err) {
          console.log(err);
        } 
    }

    // DELETE COURSE 
    const handleDelete = async () => {
        try {
            await axios.delete(`https://befinalprojectbinar-production.up.railway.app/api/admin/courses/${coursesData.id}`);
            setShowModalHapus(false)
            getListCourses();
            getCounts();
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
        getListCourses(),
        getCounts()
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
            {/*  ---Card Count Class and User--- */}

            <div className="flex justify-between p-2">
                <div className="flex items-center">
                    <p className="text-[0.625rem] lg:text-sm font-bold">
                        Kelola Kelas
                    </p>
                </div>

                <div className="flex items-center">
                    <CreateCourse />
                    <FilterCourse />

                    <button 
                        type="button"
                        className="flex items-center justify-center p-1 w-5 h-4 lg:w-10 lg:h-7 bg-white font-semibold my-[1.13rem] rounded-3xl">
                        <img src={icon_search} /> 
                    </button> 
                </div>
            </div>

            {/*  ---Tabel Kelas---  */}
            <div className="overflow-x-auto min-w-screen">
                <table className="table w-full items-center bg-transparent border-collapse ">
                    <thead className="bg-[#EBF3FC] lg:py-3 text-[0.625rem] lg:text-xs  whitespace-nowrap font-semibold text-left">
                        <tr>
                            <th className="p-6 py-2">
                                Kode Kelas
                            </th>
                            <th className="p-6 py-2">
                                Kategori
                            </th>
                            <th className="p-6 py-2">
                                Nama Kelas
                            </th>
                            <th className="p-6 py-2">
                                Tipe Kelas
                            </th>
                            <th className="p-6 py-2">
                                Level
                            </th>
                            <th className="p-6 py-2">
                                Harga Kelas
                            </th>
                            <th className="p-6 py-2">
                                Aksi
                            </th>
                        </tr>
                    </thead>

                    <tbody className="border-t-0 px-4 text-[0.5rem] lg:text-[0.625rem] font-bold whitespace-nowrap p-4 text-left">
                        {courses.map((course) => ( 
                            <tr key={course.id}>
                                <td className="p-6 py-2 text-[#4E5566]">
                                    {course.code}
                                </td>
                                <td className="p-6 py-2 text-[#4E5566]">
                                    {course.category.category}
                                </td>
                                <td className="p-6 py-2">
                                    {course.name} 
                                </td>
                                <td className={`p-6 py-2 ${course.type === "Free" ? 'text-green-500' : 'text-[#3892ff]'}`}>
                                    {course.type}
                                </td>
                                <td className="p-6 py-2">
                                    {course.level}
                                </td>
                                <td className="p-6 py-2">
                                    {course.price}
                                </td>
                                <td className="flex font-bold whitespace-nowrap p-6 py-2">
                                    <ButtonAksi
                                        text={'Ubah'}
                                        variant='success'
                                        onClick={() => {setShowModalUbah(true); setCoursesData(course)}}
                                    />
                                    <ButtonAksi
                                        text={'Hapus'}
                                        variant='red'
                                        onClick={() => {setShowModalHapus(true); setCoursesData(course)}}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/*  ---Tabel Kelas---  */}
        </div>

        {/*  ---Modals Ubah Kelas---  */}
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
                            Ubah Kelas
                        </p>
                        <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                            <div className="flex-auto p-1">
                                <label htmlFor="code" className="text-gray-800  font-bold leading-tight tracking-normal">Kode Kelas</label>
                                <input 
                                    type="text"
                                    id="code" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    defaultValue={coursesData.code}
                                    ref={codeRef} />
                            </div>
                            <div className="flex p-1 gap-2">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="category_id" className="text-gray-800  font-bold leading-tight tracking-normal">ID Kategori</label>
                                    <input 
                                    type="text"
                                    id="category_id" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    defaultValue={coursesData.category.id}
                                    ref={category_idRef}
                                    disabled
                                    />
                                    
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="level" className="text-gray-800  font-bold leading-tight tracking-normal">Level</label>
                                    <select className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    defaultValue={coursesData.level}  ref={levelRef}>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advanced</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Nama Kelas</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    defaultValue={coursesData.name}
                                    ref={nameRef}/>
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="facilitator" className="text-gray-800  font-bold leading-tight tracking-normal">Fasilitator</label>
                                <input 
                                    type="text"
                                    id="facilitator" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text"
                                    defaultValue={coursesData.facilitator} 
                                    ref={facilitatorRef}/>
                            </div>
                            <div className="flex p-1 gap-2">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="type" className="text-gray-800  font-bold leading-tight tracking-normal">Tipe Kelas</label>
                                    <select className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    defaultValue={coursesData.type}  ref={typeRef}>
                                        <option>Free</option>
                                        <option>Premium</option>
                                    </select>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="price" className="text-gray-800  font-bold leading-tight tracking-normal">Harga</label>
                                    <input 
                                    type="text"
                                    id="price" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-2  border-gray-300 rounded-lg border" 
                                    placeholder="Text"
                                    defaultValue={coursesData.price}
                                    ref={priceRef}/>
                                </div>
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="telegram_grouo" className="text-gray-800  font-bold leading-tight tracking-normal">Link Grup Telegram</label>
                                <input 
                                    type="text"
                                    id="telegram_grouo" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Link" 
                                    defaultValue={coursesData.telegram_group}
                                    ref={telegram_groupRef}/>
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="introduction_video" className="text-gray-800  font-bold leading-tight tracking-normal">Link Video</label>
                                <input 
                                    type="text"
                                    id="introduction_video" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Link" 
                                    defaultValue={coursesData.introduction_video}
                                    ref={introduction_videoRef}/>
                            </div>
                            <div className=" p-1">
                                <label htmlFor="description" className="text-gray-800  font-bold leading-tight tracking-normal">Deskripsi Kelas</label>
                                <textarea 
                                    type="text"
                                    id="description" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-10 flex p-2 border-gray-300 rounded-lg border" 
                                    placeholder="Paragraph" 
                                    defaultValue={coursesData.description}
                                    ref={descriptionRef} />
                            </div>
                            <div className=" p-1">
                                <label htmlFor="on_boarding" className="text-gray-800  font-bold leading-tight tracking-normal">Deskripsi On Boarding</label>
                                <textarea 
                                    type="text"
                                    id="on_boarding" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-10 flex p-2 border-gray-300 rounded-lg border" 
                                    placeholder="Paragraph" 
                                    defaultValue={coursesData.on_boarding}
                                    ref={on_boardingRef} />
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
        {/*  ---Modals Ubah Kelas---  */}

        {/*  ---Modals Hapus Kelas---  */}
        {showModalHapus ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-5 px-10">
                        <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">
                            Hapus Kelas
                        </p>
                        <p className="flex justify-center items-center text-xs text-black py-2">
                            Anda yakin ingin menghapus kelas ini?
                        </p>
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi
                                text={'Batal'}
                                variant='red'
                                onClick={() => setShowModalHapus(false)}
                            />
                            <ButtonAksi
                                text={'Hapus'}
                                variant='success'
                                onClick={() => handleDelete()}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        {/*  ---Modals Hapus Kelas---  */}
        </> 
    )
}

export default AdminKelas;