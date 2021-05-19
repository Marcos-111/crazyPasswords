import React, { useState } from "react";
import Axios from 'axios';

function Register() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post("https://localhost/3000/register", {
            username: usernameReg,
            password: passwordReg,

        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
            <div className="hidden lg:block font-rale text-5xl font-light p-10 pb-2 text-center">
                <h1>Crazy Passwords</h1>
            </div>
            <section className="flex flex-col md:p-24 md: pt-12 md:flex-row h-screen items-center">

                <div className="grid grid-cols-1 md:grid-cols-1">
                    <div className="hidden lg:block font-rale text-3xl font-light p-8 pb-12 text-center">
                        <h1>Trusted by them, because it's crazy, because it's yours</h1>
                    </div>
                    <div className="pb-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:w-48" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Juan_Schiaretti_%28cropped%29.jpg" width="448" height="299" alt="Man looking at item at a store" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Cordoba's Governor</div>
                                <span className="block mt-1 text-lg leading-tight font-medium text-black hover:underline cursor-pointer">Juan Schiaretti</span>
                                <p className="mt-2 text-gray-500">I completely trust them, as a governor, it is my duty to provide security and prosperity to my citizens, and no password manager does it better. Thank you crazyPasswords.</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:w-48" src="https://images-ext-1.discordapp.net/external/CHuya98xNEndoJa_1GW42gdyZdnS3fUxgXLKz9BD_s4/https/www.cadena3.com/admin/playerswf/fotos/ARCHI_469847.jpg" width="448" height="299" alt="Man looking at item at a store" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Argentine Champion
</div>
                                <span className="block mt-1 text-lg leading-tight font-medium text-black hover:underline cursor-pointer">Oscar Ruggeri</span>
                                <p className="mt-2 text-gray-500">Crazypasswords changed my life. I used to be in drugs, problems at the wheel, since I won the world cup I always had troubles with my security but now I easily can get things done!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                    <div className="w-full h-100">

                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Sign Up </h1>

                        <section className="mt-6">
                            <div>
                                <label className="block text-gray-700">Username</label>
                                <input type="text"
                                    onChange={(e) => {
                                        setUsernameReg(e.target.value);
                                    }} required type="text" placeholder="Enter an username" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="text"
                                    onChange={(e) => {
                                        setPasswordReg(e.target.value);
                                    }}
                                    type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Repeat Password</label>
                                <input type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                            </div>

                            <button onClick={register} type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Sign Up</button>
                        </section>

                        <div className="my-6 border-gray-300 w-full">

                            <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                <div className="flex items-center justify-center">
                                    <span className="ml-4">
                                        Sign up                                        with
            Google</span>
                                </div>
                            </button>

                        </div>


                        <p className="text-sm text-gray-500 mt-12">&copy; 2021 CrazyPasswords - All Rights Reserved.</p>
                    </div>
                </div>

            </section>
        </div>

    );
}

export default Register;