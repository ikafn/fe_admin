import { logo } from "../assets";

const SidebarAdmin = () => {
    return (
      <>
        <aside class="fixed bg-[#6148FF] sidebar min-h-screen w-[4rem] overflow-hidden border-r hover:w-56 hover:bg-[#6148FF] hover:shadow-xl">
            <div class="flex h-screen flex-col justify-between pt-2 pb-6">
                <div>
                    <div class=" flex items-center w-max px-6 pl-12">
                        <img src={logo} class="w-32" alt="" />
                    </div>
                    <div class="mt-4 space-y-2 tracking-wide">
                        <div className=" min-w-max">
                            <a href="/admin/dashboard" class="relative flex items-center space-x-4  py-3 px-6 text-white focus:bg-[#489CFF] hover:bg-[#489CFF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                                <span class="font-medium">Dashboard</span>
                            </a>
                            <a href="/admin/kelas" class="relative flex items-center space-x-4 mt-4 py-3 px-6 text-white focus:bg-[#489CFF] hover:bg-[#489CFF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                <span class="font-medium">Kelola Kelas</span>
                            </a>
                            <a href="/admin/modul" class="relative flex items-center space-x-4 mt-4 py-3 px-6 text-white focus:bg-[#489CFF] hover:bg-[#489CFF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                </svg>
                                <span class="font-medium">Kelola Modul</span>
                            </a>
                            <a href="#" class="relative flex items-center space-x-4 mt-4 py-3 px-6 text-white focus:bg-[#489CFF] hover:bg-[#489CFF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                                <span class="font-medium">Keluar</span>
                            </a>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </aside>


        {/* <aside className ="fixed -mt-24 bg-[#6148FF] text-white w-72 min-h-screen">
            <div className="flex flex-col items-center">
                <img src={logo} className="w-32" alt="logo" />
                <a href="/admin/dashboard" className="block w-full px-8 py-4 font-bold cursor-pointer focus:bg-[#489CFF] hover:bg-[#489CFF] hover:text-white ">
                    Dashboard
                </a>
                <a href="/admin/kelas" className="block w-full px-8 py-4 font-bold cursor-pointer focus:bg-[#489CFF] hover:bg-[#489CFF] hover:text-white">
                    Kelola Kelas
                </a>
                <a href="/admin/modul" className="block w-full px-8 py-4 font-bold cursor-pointer focus:bg-[#489CFF] hover:bg-[#489CFF] hover:text-white">
                    Kelola Modul
                </a>
                <a href="#" className="block w-full px-8 py-4 font-bold cursor-pointer focus:bg-[#489CFF] hover:bg-[#489CFF] hover:text-white ">
                    Keluar
                </a>
            </div>
        </aside> */}
      </>
      
    );
  };
  
  export default SidebarAdmin;
  