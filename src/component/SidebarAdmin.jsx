import { logo } from "../assets";

const SidebarAdmin = () => {
    return (
      <>
        <aside className ="fixed -mt-24 bg-[#6148FF] text-white w-72 min-h-screen">
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
        </aside>
      </>
      
    );
  };
  
  export default SidebarAdmin;
  