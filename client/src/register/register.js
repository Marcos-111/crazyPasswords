import React from "react";

function Register() {
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
                                <img className="h-48 w-full object-cover md:w-48" src="https://d35hsl9am8s2ta.cloudfront.net/public/images/2020/09/16014105610-Negro-Alvarez-773x458.jpg" width="448" height="299" alt="Man looking at item at a store" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Film actor</div>
                                <span className="block mt-1 text-lg leading-tight font-medium text-black hover:underline cursor-pointer">El Negro Alvarez</span>
                                <p className="mt-2 text-gray-500">When I heard about crazy passwords I was worried first, but I can't memorize all those passwords, you know. I don't even know my ID number.</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:w-48" src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTa8DctT2_gLvYDysCZEsx2UJO9xrHRZn950e6zJfStmPF1RC8QY-5cEX7aRRfZ" width="448" height="299" alt="Man looking at item at a store" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Argentine cartoonist
</div>
                                <span className="block mt-1 text-lg leading-tight font-medium text-black hover:underline cursor-pointer">El Negro Fontanarosa</span>
                                <p className="mt-2 text-gray-500">Since I'm crazy, I mean since I'm using crazy passwords, my security has been bosted as it never was, thank you CrazyPasswords.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                    <div className="w-full h-100">

                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                        <form className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                            </div>

                            <div className="text-right mt-2">
                                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                            </div>

                            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
                        </form>

                        <div className="my-6 border-gray-300 w-full">

                            <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                <div className="flex items-center justify-center">
                                    <span className="ml-4">
                                        Log in
                                        with
            Google</span>
                                </div>
                            </button>
                        </div>
                        <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</a></p>

                        <p className="text-sm text-gray-500 mt-12">&copy; 2021 CrazyPasswords - All Rights Reserved.</p>
                    </div>
                </div>

            </section>
        </div>

    );
}

export default Register;
