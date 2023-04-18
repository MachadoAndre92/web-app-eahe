import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Login() {

    const [errors, setErrors] = useState([]);

    //Set login state
    const [isLogin, setIsLogin] = useState(false);

    /**
     * Process login form submission
     * http://localhost:8000/api/login
     * headers: { 'Content-Type': 'application/json' }
     * Body: { email: '...', password: '...' }
     * 
     * @param {object} e 
     */
    const handleLogin = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        console.log(password, email);

        axios.post('http://localhost:8000/api/login', {
            email: email,
            password: password,
        }).then((res) => { 
            setErrors([]);
            //console.log(res);
            //save token to local storage
            localStorage.setItem('access_token', res.data.token);
            //console.log('token: ',res.data.token);

            setIsLogin(true);
        }).catch((err) => {
            setErrors(err?.response?.data?.errors);
            //console.log(errors);
        });
    };

    useEffect(() => {
        if(isLogin) {
            window.location.href = '/';
        }
    }, [isLogin]);


    return (
        <div className="grid h-screen place-items-center text-gray-500">
            <div className="bg-white shadow-lg p-10 w-[500px]">
                <h1 className="text-2xl font-bold mb-5">Login Account</h1>
                <form method="POST" onSubmit={handleLogin} className="grid grid-cols-1 gap-2">
                    <div className="grid grid-cols-1 gap-2">
                        <label 
                            htmlFor="email" 
                            className="text-sm font-semibold">
                            Email
                        </label> 
                    
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter your email..."
                            className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-gray-500" />

                        <span className="text-xs text-red-500">
                            {errors?.email}    
                        </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label 
                            htmlFor="password" 
                            className="text-sm font-semibold">
                            Password
                        </label> 
                    
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Enter your password..."
                            className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-gray-500" />
                        
                        <span className="text-xs text-red-500">
                            {errors?.password}
                        </span>
                    </div>
                    <button className="mt-5 bg-blue-700 text-white
                    py-2 text-center rounded-md hover:bg-blue-800 font-semibold">
                        Login
                    </button>
                    <span className="text-xs text-red-500">
                        {errors?.credentials}
                    </span>
                </form>

            </div>

        </div>
    );

}