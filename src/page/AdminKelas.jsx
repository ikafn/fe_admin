import React, { useEffect, useState } from "react"
import { Button, ButtonAksi, Card, HeaderAdmin, SidebarAdmin, TableCourses } from "../component";
import { icon_filter } from "../assets";
import { icon_search } from "../assets";
import { icon_tambah } from "../assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AdminKelas = () => {
    const [showModalTambah, setShowModalTambah] = useState(false);
    const [showModalFilter, setShowModalFilter] = useState(false);
    const [showModalUbah, setShowModalUbah] = useState(false);
    const [showModalHapus, setShowModalHapus] = useState(false);

    const [code, setCode] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [level, setLevel] = useState('');
    const [name, setName] = useState('');
    const [facilitator, setFacilitator] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [telegram_group, setTelegram_group] = useState('');
    const [introduction_video, setIntroduction_video] = useState('');
    const [description, setDescription] = useState('');
    const [on_boarding, setOn_boarding] = useState('');

    const [courses, setCourses] = useState([]);
    const [coursesData, setCoursesData] = useState([]);
    const [coursesDetail, setCoursesDetail] = useState([]);

    // GET ALL COURSES 
    const getListCourses = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/courses');
            // console.log(data.data.data)
            setCourses(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getListCourses();
    }, [])


    // GET DETAIL COURSSE 
    const getDetailCourses = async () => {
        try {
            const data = await axios.get(`https://befinalprojectbinar-production.up.railway.app/api/courses/${([coursesData.id])}`);
            console.log(data.data.data)
            setCoursesDetail(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getDetailCourses();
    }, [])


    // CREATE NEW COURSES 
    const onSubmit = async () => {
        try {
            const payload = {
                code,
                category_id,
                level,
                name,
                facilitator,
                type,
                price,
                telegram_group,
                introduction_video,
                description,
                on_boarding
            }
        
            const res = await axios.post('https://befinalprojectbinar-production.up.railway.app/api/admin/courses', payload)
        
            setShowModalTambah(false);
            getListCourses();
        
    
        } catch(err) {
          console.log(err);
        } 
    }

    // GET CATEGORY 
    const [idCategory, setIdCategory] = useState('')
    const getCategoryId = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/categories');
            setIdCategory(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCategoryId();
    }, [])

    // DELETE COURSE 
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`https://befinalprojectbinar-production.up.railway.app/api/admin/courses/${coursesData.id}`);
            setShowModalHapus(false)
            getListCourses()
        } catch(err) {
            console.log(err)
        }
    }


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

            {/*  ---Tabel Kelas---  */}
            <div className="flex justify-between">
                <div className="flex items-center">
                    <p className="text-[0.625rem] lg:text-sm font-bold">
                        Kelola Kelas
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

            {/* <TableCourses /> */}

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
                                <td className="p-6 py-2">
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
                                        variant='darkBlue'
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
        

        {/*  ---Modals Tambah Kelas---  */}
        {showModalTambah ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-2  rounded-t">
                            <button
                                type="button"
                                className="ml-auto text-[#6148FF] text-lg  float-right leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModalTambah(false)}
                            >
                                x
                            </button>
                        </div>

                        {/*body*/}
                        <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold ">
                            Tambah Kelas
                        </p>
                        <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Kode Kelas</label>
                                <input 
                                    type="text"
                                    id="code" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}/>
                            </div>
                            <div className="flex p-1 gap-2">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Kategori Kelas</label>
                                    <select className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" onClick={(e) => setCategory_id(e.target.value)}>
                                        {idCategory.map((categories, index) => ( 
                                            <option
                                                key={index}
                                                value={categories.id}>
                                                {categories.category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Level</label>
                                    <select className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border"
                                    value={level}
                                    onClick={(e) => setLevel(e.target.value)}>
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Fasilitator</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    value={facilitator}
                                    onChange={(e) => setFacilitator(e.target.value)} />
                            </div>
                            <div className="flex p-1 gap-2">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Tipe Kelas</label>
                                    <select className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border"
                                    value={type}
                                    onClick={(e) => setType(e.target.value)} >
                                        <option>Free</option>
                                        <option>Premium</option>
                                    </select>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Harga</label>
                                    <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-2  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Link Grup Telegram</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Link" 
                                    value={telegram_group}
                                    onChange={(e) => setTelegram_group(e.target.value)} />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Link Video</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Link" 
                                    value={introduction_video}
                                    onChange={(e) => setIntroduction_video(e.target.value)} />
                            </div>
                            <div className=" p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Deskripsi Kelas</label>
                                <textarea 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-10 flex p-2 border-gray-300 rounded-lg border" 
                                    placeholder="Paragraph" 
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className=" p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Deskripsi On Boarding</label>
                                <textarea 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-10 flex p-2 border-gray-300 rounded-lg border" 
                                    placeholder="Paragraph" 
                                    value={on_boarding}
                                    onChange={(e) => setOn_boarding(e.target.value)} />
                            </div>
                            
                        </form>
                        
                        {/*footer*/}
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi
                                text={'Batal'}
                                variant='red'
                                onClick={() => setShowModalTambah(false)}
                            />
                            <ButtonAksi
                                text={'Simpan'}
                                variant='success'
                                onClick={onSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        {/*  ---Modals Tambah Kelas---  */}

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
                                Filter Kelas
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

                                <div>
                                    <p className="flex text-black font-semibold py-2">
                                        Tipe Kelas
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
                                            Gratis
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
                                            Premium
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <p className="flex text-black font-semibold py-2">
                                        Level
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
                                            Beginner
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
                                            Intermediate
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
                                            Advanced
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

        {/*  ---Modals Ubah Kelas---  */}
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

                        {/*body*/}
                        <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold py-2">
                            Ubah Kelas
                        </p>
                        <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Kode Kelas</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    defaultValue={coursesData.code}/>
                            </div>
                            <div className="flex p-1 gap-2">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Kategori Kelas</label>
                                    <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    defaultValue={coursesData.category.category}/>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Level</label>
                                    <select className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" defaultValue={coursesData.level}>
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
                                    defaultValue={coursesData.name}/>
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Fasilitator</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text"
                                    defaultValue={coursesData.facilitator} />
                            </div>
                            <div className="flex p-1 gap-2">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Tipe Kelas</label>
                                    <select className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" defaultValue={coursesData.type}>
                                        <option>Free</option>
                                        <option>Premium</option>
                                    </select>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Harga</label>
                                    <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-2  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    defaultValue={coursesData.price}/>
                                </div>
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Link Grup Telegram</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Link" 
                                    defaultValue={coursesData.telegram_group}/>
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Link Video</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Link" 
                                    defaultValue={coursesData.introduction_video}/>
                            </div>
                            <div className=" p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Deskripsi Kelas</label>
                                <textarea 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-10 flex p-2 border-gray-300 rounded-lg border" 
                                    placeholder="Paragraph" 
                                    defaultValue={coursesData.description}/>
                            </div>
                            <div className=" p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Deskripsi On Boarding</label>
                                <textarea 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-10 flex p-2 border-gray-300 rounded-lg border" 
                                    placeholder="Paragraph" 
                                    defaultValue={coursesData.on_boarding}/>
                            </div>
                            
                        </form>
                        
                        {/*footer*/}
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi
                                text={'Batal'}
                                variant='red'
                                onClick={() => setShowModalUbah(false)}
                            />
                            <ButtonAksi
                                text={'Simpan'}
                                variant='success'
                                onClick={() => setShowModalUbah(false)}
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
                {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-5 px-10">
                        {/*header*/}
                        <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">
                            Hapus Kelas
                        </p>

                        {/*body*/}
                        <p className="flex justify-center items-center text-xs text-black py-2">
                            Anda yakin ingin menghapus kelas ini?
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