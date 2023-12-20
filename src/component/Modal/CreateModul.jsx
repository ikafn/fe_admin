import React, { useEffect, useState }  from "react";
import { icon_tambah } from "../../assets";
import axios from "axios";
import ButtonAksi from "../ButtonAksi";
import Button from "../Button";

const CreateModul = () => {
    const [showModalTambah, setShowModalTambah] = useState(false);

    const [chapter_id, setChapter_id] = useState('');
    const [name, setName] = useState('');
    const [video, setVideo] = useState('');
    const [duration, setDuration] = useState('');

    const [idChapter, setIdChapter] = useState([])

    const [error, setError] = useState(null);

    // CREATE NEW MODULES 
    const handleCreate = async () => {
        if (!chapter_id  || !name ) {
            setError("Please complete all fields");
            setTimeout(() => setError(null), 5000);
            return
        }
        try {
          const payload = {
            chapter_id,
            name,
            video,
            duration
          }
          await axios.post('https://befinalprojectbinar-production.up.railway.app/api/admin/modules', payload, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })

        setShowModalTambah(false);
        window.location.reload();    
        } catch(err) {
          console.log(err);
        } 
    }

    // GET CHAPTER ID 
    const getChapterId = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/chapters', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setIdChapter(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getChapterId()
    }, [])


    return (
    <>
        <Button
            variant='darkBlue'
            onClick={() => setShowModalTambah(true)}
            img={icon_tambah}
        />

        {/*  ---Modals Tambah Modul---  */}
        {showModalTambah ? (
            <>
            <div className="justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                                <label htmlFor="idChapter" className="text-gray-800  font-bold leading-tight tracking-normal">Nama Chapter</label>
                                <select className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border"
                                onClick={(e) => setChapter_id(e.target.value)}>
                                    <option hidden>Pilih Chapter</option>
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
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="video" className="text-gray-800  font-bold leading-tight tracking-normal">Link Video Modul</label>
                                <input 
                                    type="text"
                                    id="video" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    onChange={(e) => setVideo(e.target.value)} />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="duration" className="text-gray-800  font-bold leading-tight tracking-normal">Durasi</label>
                                <input 
                                    type="number"
                                    id="duration" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Number" 
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
                <div className="flex items-center justify-center mx-40">
                    {error && (
                    <div className="text-red-500 bg-red-100 p-2 text-xs rounded-xl absolute bottom-0 mb-4">
                        {error}
                    </div>
                    )}
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}

        {/*  ---Modals Tambah Modul---  */}
    </>

  )
};

  
export default CreateModul;
