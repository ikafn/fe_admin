import React, { useEffect, useState }  from "react";
import { icon_tambah } from "../../assets";
import axios from "axios";
import ButtonAksi from "../ButtonAksi";
import Button from "../Button";

const CreateChapter = () => {
    const [showModalTambah, setShowModalTambah] = useState(false);
    const [course_id, setCourse_id] = useState('');
    const [name, setName] = useState('');
    const [idCourse, setIdCourse] = useState([]);

    // CREATE NEW CHAPTER 
    const handleCreate = async () => {
        try {
            const payload = {
                course_id,
                name
            }
            await axios.post('https://befinalprojectbinar-production.up.railway.app/api/admin/chapters', payload)

            setShowModalTambah(false);
            window.location.reload();
        } catch(err) {
            console.log(err);
        } 
    }

    // GET COURSE ID 
    const getCourseId = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/courses');
            setIdCourse(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCourseId()
    }, [])

    
    return (
    <>
        <Button
            variant='darkBlue'
            onClick={() => setShowModalTambah(true)}
            img={icon_tambah}
        />

        {/*  ---Modals Tambah Chapter---  */}
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
                            Tambah Chapter
                        </p>
                        <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                            <div className="flex-auto p-1">
                                <label htmlFor="idCourse" className="text-gray-800  font-bold leading-tight tracking-normal">Nama Kelas</label>
                                <select className="form-select text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3 border-gray-300 rounded-lg border"  
                                onChange={(e) => setCourse_id(e.target.value)} >
                                    <option hidden>Pilih Kelas</option>
                                    {idCourse.map((course, index) => ( 
                                        <option 
                                            value={course.id} 
                                            key={index} >
                                                {course.name}
                                        </option>
                                    ))}
                                </select> 
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Nama Chapter</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text"
                                    onChange={(e) => setName(e.target.value)}/>
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
        {/*  ---Modals Tambah Chapter---  */}
    </>
  )
};

  
export default CreateChapter;
