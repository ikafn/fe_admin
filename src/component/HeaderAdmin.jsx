import { bx_search } from "../assets"

const HeaderAdmin = () => {
  return (
    <>
    <nav className="fixed min-w-full flex bg-[#EBF3FC] h-20 justify-between items-center">
      <h1 className="text-[#6148FF] font-bold text-xl ml-32">Hi, Admin!</h1>

      <div className="flex flex-row-reverse mr-[5rem]">
        <div className="flex w-70 h-12 bg-white font-semibold my-[1.13rem] rounded-2xl py-3 px-6">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Cari"
              className="block w-full h-full  text-gray-900 "
            />
            <button
              type="button"
              className="flex items-center justify-center w-[2.375rem] h-[2.375rem] bg-[#6148FF] rounded-[0.625rem]">
                <img src= {bx_search} />

            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default HeaderAdmin;
