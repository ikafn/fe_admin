import { useState } from "react";
import { mainlogo } from "../assets";
import { ViewGridIcon, BookOpenIcon, DocumentIcon, DocumentDuplicateIcon, LogoutIcon } from "@heroicons/react/outline"
import { NavLink, useNavigate } from "react-router-dom";
import ButtonAksi from "./ButtonAksi";

const SidebarAdmin = () => {
    const [showModalKeluar, setShowModalKeluar] = useState(false);

    const navigate = useNavigate();

    const isDashboard = location.pathname === "/admin";
    const isCourses = location.pathname === "/admin/courses";
    const isChapters = location.pathname === "/admin/chapters";
    const isModules = location.pathname === "/admin/modules";

    const handleLogout = () => {
        localStorage.removeItem('token');
        setShowModalKeluar(false)
        navigate('/')
    };

    return (
    <>
        <aside className="fixed bg-[#6148FF] sidebar min-h-screen w-10 md:w-11 lg:w-16 overflow-hidden border-r hover:w-36 lg:hover:w-56 hover:bg-[#6148FF] hover:shadow-xl">
            <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                <div>
                    <div className=" space-y-2 tracking-wide text-[0.625rem] lg:text-sm font-semibold">
                        <div className=" min-w-max ">
                            <div className="relative flex justify-center space-x-6 p-6 lg:px-16 ">
                                <img src={mainlogo} className="w-12 lg:w-20" alt="" />
                            </div>
                            <NavLink to="/admin" className={`relative flex items-center space-x-4 p-4 lg:px-6 text-white hover:bg-[#489CFF] ${isDashboard ? 'bg-[#489CFF]' : 'bg-none'}`}>
                                <ViewGridIcon className="w-4 h-4 lg:w-6 lg:h-6"/>
                                <span>Dashboard</span>
                            </NavLink>
                            <NavLink to="/admin/courses" className={`relative flex items-center space-x-4 p-4 lg:px-6 text-white hover:bg-[#489CFF] ${isCourses ? 'bg-[#489CFF]' : 'bg-none'}`}>
                                <BookOpenIcon className="w-4 h-4 lg:w-6 lg:h-6"/>
                                <span>Kelola Kelas</span>
                            </NavLink>
                            <NavLink to="/admin/chapters" className={`relative flex items-center space-x-4 p-4 lg:px-6 text-white hover:bg-[#489CFF] ${isChapters ? 'bg-[#489CFF]' : 'bg-none'}`}>
                                <DocumentIcon className="w-4 h-4 lg:w-6 lg:h-6"/>
                                <span>Kelola Chapter</span>
                            </NavLink>
                            <NavLink to="/admin/modules" className={`relative flex items-center space-x-4 p-4 lg:px-6 text-white hover:bg-[#489CFF] ${isModules ? 'bg-[#489CFF]' : 'bg-none'}`}>
                                <DocumentDuplicateIcon className="w-4 h-4 lg:w-6 lg:h-6"/>
                                <span>Kelola Modul</span>
                            </NavLink>
                            <button className="relative flex items-center space-x-4 w-full p-4 lg:px-6 text-white focus:bg-[#489CFF] hover:bg-[#489CFF]"
                            onClick={() => setShowModalKeluar(true)} >
                                <LogoutIcon  className="w-4 h-4 lg:w-6 lg:h-6"/>
                                <span>Keluar</span>
                            </button>
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
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-5 px-10">
                        <p className="flex justify-center items-center text-xs text-[#6148FF] font-bold py-2">
                            Keluar
                        </p>
                        <p className="flex justify-center items-center text-xs text-black py-2">
                            Anda yakin ingin keluar dari halaman ini?
                        </p>
                        <div className="flex items-center justify-center p-2 mb-2">
                            <ButtonAksi
                                text={'Batal'}
                                variant='success'
                                onClick={() => setShowModalKeluar(false)}
                            />
                            <ButtonAksi
                                text={'Keluar'}
                                variant='red'
                                onClick={() => handleLogout()}
                            />
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
  