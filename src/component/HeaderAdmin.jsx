import { bx_search } from "../assets"

const HeaderAdmin = () => {
  return (
    <>
    <nav className=" min-w-full grid grid-cols-2 bg-[#EBF3FC] h-24 items-center">
      <h1 className="text-[#6148FF] font-bold text-xl ml-[22.750rem]">Hi, Admin!</h1>
      <div className="flex flex-row-reverse mr-[6rem]">
        <div className="flex w-70 h-14 bg-white font-semibold my-[1.13rem] rounded-2xl py-3 px-6">
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
