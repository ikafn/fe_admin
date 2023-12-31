import { useEffect, useState }  from "react";
import { icon_tambah } from "../../assets";
import axios from "axios";
import ButtonAksi from "../ButtonAksi";
import Button from "../Button";

const CreateCourse = () => {
    const [showModalTambah, setShowModalTambah] = useState(false);

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

    const [idCategory, setIdCategory] = useState('')

    const [alert, setAlert] = useState(null);

    const handleTypeChange = (e) => {
        const selectedType = e.target.value;
        setType(selectedType);
    
        if (selectedType === 'Free') {
          setPrice('0');
        } else {
          setPrice('');
        }
    };

    // CREATE NEW COURSES 
    const handleCreate = async () => {
        if (!code || !category_id || !level || !name || !type ||!price ) {
            setAlert({ type: "error", message: "Please complete all fields" });
            setTimeout(() => setAlert(null), 1000);
            return
        }
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
            const res = await axios.post('https://befinalprojectbinar-production.up.railway.app/api/admin/courses', payload, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setAlert({ type: "success", message: "Course added successfully" });

            console.log("Data berhasil ditambah:", res.data.data);
            setShowModalTambah(false);
            window.location.reload();

        } catch(err) {
            setAlert({ type: "error", message: `Course added failed: ${err.response.data.message}` });
            setTimeout(() => setAlert(null), 1000);
            console.log(err);
        } 
    }

    // GET CATEGORY ID
    const getCategoryId = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/categories', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setIdCategory(data.data.data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCategoryId();
    }, [])

    return (
    <>
        <Button
            variant='darkBlue'
            onClick={() => setShowModalTambah(true)}
            img={icon_tambah}
        />

        {/*  ---Modals Tambah Kelas---  */}
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
                        <p className="flex justify-center items-center text-[0.625rem] lg:text-xs text-[#6148FF] font-bold ">
                            Tambah Kelas
                        </p>
                        <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                            <div className="flex-auto p-1">
                                <label htmlFor="code" className="text-gray-800  font-bold leading-tight tracking-normal">Kode Kelas</label>
                                <input 
                                    type="text"
                                    id="code" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    onChange={(e) => setCode(e.target.value)}/>
                            </div>
                            <div className="flex p-1 gap-2">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="idCategory" className="text-gray-800  font-bold leading-tight tracking-normal">Kategori Kelas</label>
                                    <select 
                                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                        onChange={(e) => setCategory_id(e.target.value)} 
                                    >
                                        <option hidden>Pilih Kategori Kelas</option>
                                        {idCategory.map((categories, index) => ( 
                                            <option
                                                key={index}
                                                value={categories.id}>
                                                {categories.category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="level" className="text-gray-800  font-bold leading-tight tracking-normal">Level</label>
                                    <select 
                                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                        onChange={(e) => setLevel(e.target.value)} 
                                    >
                                        <option hidden>Pilih Level</option>
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
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="facilitator" className="text-gray-800  font-bold leading-tight tracking-normal">Fasilitator</label>
                                <input 
                                    type="text"
                                    id="facilitator" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" 
                                    onChange={(e) => setFacilitator(e.target.value)} />
                            </div>
                            <div className="flex p-1 gap-2">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="type" className="text-gray-800 font-bold leading-tight tracking-normal">Tipe Kelas</label>
                                    <select
                                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3 border-gray-300 rounded-lg border"
                                        onChange={handleTypeChange}
                                    >
                                        <option hidden>Pilih Tipe Kelas</option>
                                        <option>Free</option>
                                        <option>Premium</option>
                                    </select>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="price" className="text-gray-800 font-bold leading-tight tracking-normal">Harga</label>
                                    <input
                                        type="text"
                                        id="price"
                                        disabled={type === 'Free'} // Disable input if type is 'Free'
                                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-2 border-gray-300 rounded-lg border"
                                        placeholder="0"
                                        onChange={(e) => setPrice(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="telegram_group" className="text-gray-800  font-bold leading-tight tracking-normal">Link Grup Telegram</label>
                                <input 
                                    type="text"
                                    id="telegram_group" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Link" 
                                    onChange={(e) => setTelegram_group(e.target.value)} />
                            </div>
                            <div className="flex-auto p-1">
                                <label htmlFor="introduction_video" className="text-gray-800  font-bold leading-tight tracking-normal">Link Video</label>
                                <input 
                                    type="text"
                                    id="introduction_video" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Link" 
                                    onChange={(e) => setIntroduction_video(e.target.value)} />
                            </div>
                            <div className=" p-1">
                                <label htmlFor="description" className="text-gray-800  font-bold leading-tight tracking-normal">Deskripsi Kelas</label>
                                <textarea 
                                    type="text"
                                    id="description" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-10 flex p-2 border-gray-300 rounded-lg border" 
                                    placeholder="Paragraph" 
                                    onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className=" p-1">
                                <label htmlFor="on_boarding" className="text-gray-800  font-bold leading-tight tracking-normal">Deskripsi On Boarding</label>
                                <textarea 
                                    type="text"
                                    id="on_boarding" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-10 flex p-2 border-gray-300 rounded-lg border" 
                                    placeholder="Paragraph" 
                                    onChange={(e) => setOn_boarding(e.target.value)} />
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
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm">
                    {alert && (
                        <div
                            className={`text-${
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
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        {/*  ---Modals Tambah Kelas---  */}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm">
            {alert && (
                <div
                    className={`text-${
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
};

  
export default CreateCourse;
