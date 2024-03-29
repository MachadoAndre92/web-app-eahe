import axios from 'axios';
import { useState, useEffect } from 'react';

// Import the image you want to use
import backgroundImage from './img/imagem1.png'; // Replace with the actual path to your image

export default function Login() {
  const [errors, setErrors] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        console.log(password, email);

        axios.post('http://13.53.73.223/api/login', {
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
    if (isLogin) {
      window.location.href = '/';
    }
  }, [isLogin]);

  return (
    <div className="bg-white relative lg:py-20">
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <img
                src={backgroundImage}
                alt="Background"
                className="btn-"
              />
            </div>
          </div>
          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                Login to your account
              </p>
              <form onSubmit={handleLogin} className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute rounded-md">
                    Email
                  </p>
                  <input
                    id="email"
                    placeholder="Enter your email..."
                    type="text"
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                  <span className="text-xs text-red-500">
                            {errors?.email}    
                        </span>
                </div>
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute rounded-md">
                    Password
                  </p>
                  <input
                    id="password"
                    placeholder="Enter your password..."
                    type="password"
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                  <span className="text-xs text-red-500">
                            {errors?.password}
                        </span>
                </div>
                <div className="relative">
                  <button className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">
                    Login
                  </button>
                </div>
              </form>
              {errors.length > 0 && (
                <div className="text-xs text-red-500">
                  {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
