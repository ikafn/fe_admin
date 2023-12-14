import React, { useState } from "react"
import { logo } from "../assets"
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline"
import axios from "axios";

const AdminLogin = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState(null);

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!id  || !password) {
            setError("Please complete all fields");
            setTimeout(() => setError(null), 5000);
            return
          }

        try {
            const admin = await axios.post('https://befinalprojectbinar-production.up.railway.app/api/admin/login', {
                id,
                password
            })

            localStorage.setItem('token', admin.data.data.accessToken)
            navigate('/admin')


        } catch(error) {
            console.error(error.response.data.message);
            setError(error.response.data.message)
            setTimeout(() => setError(null), 5000);
        }
    }


    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const admin = await axios.post('https://befinalprojectbinar-production.up.railway.app/api/admin/login', {
    //             id,
    //             password
    //         })

    //         localStorage.setItem('token', admin.data.data.accessToken)
    //         navigate('/admin')
    //     } catch(error) {
    //         console.log(error.response.data.message);
    //     }
    // }
    


    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3 h-screen ">
            {/*  Sidebar  */}
            <aside className ="hidden lg:flex bg-[#6148FF] items-center justify-center">
                <div className="flex items-center w-44">
                    <img src={logo} alt="logo" />

                </div>   
            </aside>
            {/*  Sidebar  */}

            {/*  Form Login  */}
            <div className="flex flex-col col-span-2 justify-center bg-white">
                <div className="container">
                    <div className="text-center text-xl font-bold text-[#6148FF] mb-2">
                        <p>Login </p>
                    </div>
                    <div className="m-auto flex flex-col items-center">
                        <form action="" className=" w-6/12 ">
                            <div className="mb-6 ">
                                <label htmlFor="id" className="block mb-2 text-sm text-black">ID Admin</label>
                                <input 
                                    type="text" 
                                    name="id" 
                                    id="id" 
                                    placeholder="ID Admin" 
                                    required
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    className="form-input w-full h-12 px-3 py-2 rounded-xl text-sm text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-black">Password</label>
                                    {/* <a href="#!" className="text-sm text-[#6148FF] focus:outline-none focus:text-indigo-500 hover:text-indigo-500">Lupa Kata Sandi?</a> */}
                                </div>

                                <div className="relative w-full mt-2 rounded-md shadow-sm">  
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        name="password" 
                                        id="password" 
                                        placeholder="Masukkan Password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-input w-full h-12 px-3 py-2 rounded-xl text-sm text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    <div className=" absolute inset-y-0 right-0 flex items-center pr-3">
                                        <button 
                                            type="button" 
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                                            onClick={() => setShowPassword(!showPassword)} > 
                                            {showPassword ? (
                                                <EyeOffIcon className="w-6 h-6 text-gray-500"/>                                         
                                            ) : (
                                                <EyeIcon className="w-6 h-6 text-gray-500"/>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            
                                <div className="mt-6 ">
                                    <button 
                                        type="submit" 
                                        className="flex justify-center items-center w-full h-12 px-3 py-4 text-white bg-[#6148FF] hover:bg-[#181196] rounded-xl"
                                        onClick={handleSubmit} >
                                        Masuk   
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mx-40">
                                {error && (
                                <div className="text-red-500 bg-red-100 p-2 rounded-xl absolute bottom-0 mb-4">
                                    {error}
                                </div>
                                )}
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