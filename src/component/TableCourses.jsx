import React, { useEffect, useState }  from "react";
import ButtonAksi from "./ButtonAksi";
import axios from "axios";

const TableCourses = () => {
    const [showModalUbah, setShowModalUbah] = useState(false);
    const [showModalHapus, setShowModalHapus] = useState(false);

    const [courses, setCourses] = useState([]);
    const getListCourses = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/courses');
            // console.log(data)
            setCourses(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getListCourses();
    }, [])

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await fetch('https://befinalprojectbinar-production.up.railway.app/api/admin/courses');
    //     const { data } = await response.json();
    //     setCourses(data);
    //   };
    //   fetchData();
    // });


    return (
      <>
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
                                    onClick={() => setShowModalUbah(true)}
                                />
                                <ButtonAksi
                                    text={'Hapus'}
                                    variant='red'
                                    onClick={() => setShowModalHapus(true)}
                                />
                            </td>
                        </tr>

                    ))}
                
                </tbody>

            </table>
        </div>

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
                                <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Kode Kelas</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex p-1 gap-2">
                                <div className="flex flex-col w-1/2">
                                    <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Kategori Kelas</label>
                                    <select class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border">
                                        <option>UI/UX Design</option>
                                        <option>Web Development</option>
                                        <option>Android Development</option>
                                        <option>Data Science</option>
                                        <option>Business Intelligence</option>
                                    </select>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Level</label>
                                    <select class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border">
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advanced</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex-auto p-1">
                                <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Nama Kelas</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex-auto p-1">
                                <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Fasilitator</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex p-1 gap-2">
                                <div className="flex flex-col w-1/2">
                                    <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Tipe Kelas</label>
                                    <select class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border">
                                        <option>Gratis</option>
                                        <option>Premium</option>
                                    </select>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Harga</label>
                                    <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-2  border-gray-300 rounded-lg border" 
                                    placeholder="Text" />
                                </div>
                            </div>
                            <div className="flex-auto p-1">
                                <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Link Grup Telegram</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Link" />
                            </div>
                            <div className="flex-auto p-1">
                                <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Link Video</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Link" />
                            </div>
                            <div className=" p-1">
                                <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Deskripsi Kelas</label>
                                <textarea 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-10 flex p-2 border-gray-300 rounded-lg border" 
                                    placeholder="Paragraph" />
                            </div>
                            <div className=" p-1">
                                <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Deskripsi On Boarding</label>
                                <textarea 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-10 flex p-2 border-gray-300 rounded-lg border" 
                                    placeholder="Paragraph" />
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
                                text={'Simpan'}
                                variant='success'
                                onClick={() => setShowModalHapus(false)}
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
  };
  
    
  export default TableCourses;



