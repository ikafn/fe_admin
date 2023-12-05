import React, { useState }  from "react";
import ButtonAksi from "./ButtonAksi";

const TableChapter = () => {
    const [showModalUbah, setShowModalUbah] = useState(false);
    const [showModalHapus, setShowModalHapus] = useState(false);

    return (
      <>
        <div className="overflow-x-auto min-w-screen">
            <table className="table w-full items-center bg-transparent border-collapse ">
                <thead className="bg-[#EBF3FC] text-[0.625rem] lg:text-xs  whitespace-nowrap font-semibold text-left">
                    <tr >
                        <th className="p-6 py-2">
                            ID Kelas
                        </th>
                        <th className="p-6 py-2">
                            Nama Chapter
                        </th>
                        <th className="p-6 py-2">
                            Aksi
                        </th>
                    </tr>
                </thead>

                <tbody className="border-t-0 px-4 text-[0.5rem] lg:text-[0.625rem] font-bold whitespace-nowrap p-4 text-left">
                    <tr>
                        <td className="p-6 py-2">
                            5ec9d2c2-d8ca-44b2-9691-148ee1abba34
                        </td>
                        <td className="p-6 py-2">
                            Chapter 1 - Pendahuluan
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
                    <tr>
                        <td className="p-6 py-2 ">
                            5ec9d2c2-d8ca-44b2-9691-148ee1abba34
                        </td>
                        <td className="p-6 py-2 ">
                            Chapter 2 - Memulai Desain
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
                </tbody>

            </table>
        </div>


        {/*  ---Modals Ubah Chapter---  */}
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
                            Ubah Chapter
                        </p>
                        <form className="items-center justify-between w-[21rem] lg:w-[36rem] px-4 lg:px-12 text-[0.625rem] ">
                            <div className="flex-auto p-1">
                                <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">ID Kelas</label>
                                <select class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border">
                                    <option>5ec9d2c2-d8ca-44b2-9691-148ee1abba34</option>
                                    <option>5ec9d2c2-d8ca-44b2-9691-148ee1abba34</option>
                                    <option>5ec9d2c2-d8ca-44b2-9691-148ee1abba34</option>
                                </select>
                            </div>
                            <div className="flex-auto p-1">
                                <label for="name" className="text-gray-800  font-bold leading-tight tracking-normal">Nama Chapter</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-6 flex items-center pl-3  border-gray-300 rounded-lg border" 
                                    placeholder="Text" />
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
        {/*  ---Modals Ubah Chapter---  */}


        {/*  ---Modals Hapus Chapter---  */}
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
                            Anda yakin ingin menghapus chapter ini?
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
        {/*  ---Modals Hapus Chapter---  */}


      </>
    )
  };
  
    
  export default TableChapter;



