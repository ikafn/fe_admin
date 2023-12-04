import { useState } from "react";
import { logo } from "../assets";

const SidebarAdmin = () => {
    const [showModalKeluar, setShowModalKeluar] = useState(false);
    
    return (
      <>
        <aside className="fixed bg-[#6148FF] sidebar min-h-screen w-10 md:w-11 lg:w-16 overflow-hidden border-r hover:w-36 lg:hover:w-56 hover:bg-[#6148FF] hover:shadow-xl">
            <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                <div>
                    <div className=" flex items-center w-max px-6 pl-8 lg:pl-12">
                        <img src={logo} className="w-20 lg:w-32" alt="" />
                    </div>
                    <div className="mt-4 space-y-2 tracking-wide">
                        <div className=" min-w-max ">
                            <a href="/admin" className="relative flex items-center space-x-4  p-3 lg:px-6 text-white focus:bg-[#489CFF] hover:bg-[#489CFF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                                <span className="">Dashboard</span>
                            </a>
                            <a href="/admin/courses" className="relative flex items-center space-x-4 mt-4 p-3 lg:px-6 text-white focus:bg-[#489CFF] hover:bg-[#489CFF]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>

                                <span className="">Kelola Kelas</span>
                            </a>
                            <a href="/admin/chapters" className="relative flex items-center space-x-4 mt-4 p-3 lg:px-6 text-white focus:bg-[#489CFF] hover:bg-[#489CFF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                <span className="">Kelola Chapter</span>
                            </a>
                            <a href="/admin/modules" className="relative flex items-center space-x-4 mt-4 p-3 lg:px-6 text-white focus:bg-[#489CFF] hover:bg-[#489CFF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                </svg>
                                <span className="">Kelola Modul</span>
                            </a>
                            <a href="#" role="button" onClick={() => setShowModalKeluar(true)} className="relative flex items-center space-x-4 mt-4 p-3 lg:px-6 text-white focus:bg-[#489CFF] hover:bg-[#489CFF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                                <span className="">Keluar</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>


        {/*  ---Modals Logout---  */}
        {showModalKeluar ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-5 px-10">
                        {/*header*/}
                        <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">
                            Keluar
                        </p>

                        {/*body*/}
                        <p className="flex justify-center items-center text-xs text-black py-2">
                            Anda yakin ingin keluar dari halaman ini?
                        </p>

                        {/*footer*/}
                        <div className="flex items-center justify-center p-2 mb-2">
                        <button
                            type="button"
                            className="bg-[#73CA5C] text-white active:bg-green-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-green-200 mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={() => setShowModalKeluar(false)}>
                            Batal
                        </button>
                        <button
                            type="button"
                            className="bg-red-600 text-white active:bg-red-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-red-400 mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={()=> window.location.href='/'}>
                            Keluar
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        {/*  ---Modals Logout---  */}

      </>
    );
  };
  
  export default SidebarAdmin;
  