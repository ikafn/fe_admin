import React, { useState } from "react"
import { logo } from "../assets"

const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <>
        <div className="grid grid-cols-3">
            {/*  Sidebar  */}
            <div>
                <aside className ="bg-[#6148FF] text-white  min-h-screen flex justify-center">
                    <div className="flex items-center w-40">
                        <img src={logo} alt="logo" />

                    </div>   
                </aside>
            </div>
            {/*  Sidebar  */}

            {/*  Form Login  */}
            <div className="bg-white col-span-2 flex flex-col justify-center">
                <div className="container">
                    <div className="text-center text-xl font-bold text-[#6148FF] mb-2">
                        <p>Login </p>
                    </div>
                    <div className="m-auto flex flex-col items-center">
                        <form action="" className=" w-6/12 ">
                            <div className="mb-6 ">
                                <label for="idAdmin" className="block mb-2 text-sm text-black">ID Admin</label>
                                <input 
                                    type="text" 
                                    name="idAdmin" 
                                    id="idAdmin" 
                                    placeholder="ID Admin" 
                                    className="w-full h-12 px-3 py-2 rounded-xl text-sm text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label for="password" className="text-sm text-black">Password</label>
                                    <a href="#!" className="text-sm text-[#6148FF] focus:outline-none focus:text-indigo-500 hover:text-indigo-500">Lupa Kata Sandi?</a>
                                </div>

                                <div className="relative w-full mt-2 rounded-md shadow-sm">  
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        name="password" 
                                        id="password" 
                                        className="w-full h-12 px-3 py-2 rounded-xl text-sm text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" 
                                        placeholder="Masukkan Password" />
                                    <div className=" absolute inset-y-0 right-0 flex items-center pr-3">
                                        <button 
                                            type="button" 
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                                            onClick={() => setShowPassword(!showPassword)} > 
                                            {showPassword ? (
                                                <svg x-show="!show" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg>                                            
                                            ) : (
                                                <svg x-show="show" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg> 
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6 ">
                                    <button 
                                        type="button" 
                                        className="flex justify-center items-center w-full h-12 px-3 py-4 text-white bg-[#6148FF] hover:bg-[#181196] rounded-xl"
                                        onClick={()=> window.location.href='/admin/dashboard'} >
                                        Masuk   
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*  Form Login  */}
        </div>
        </>
    )
}

export default AdminLogin;