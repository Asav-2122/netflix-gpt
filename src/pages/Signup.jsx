import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  return (
    <div
      className="bg-no-repeat bg-cover h-screen"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-16 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          Sign Up
        </h1>


        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        // onClick={handleButtonClick}
        >
          Sign Up
        </button>
        <Link to={'/login'}>
          <p className="py-4 cursor-pointer">

            Already registered? Sign In Now.
          </p>
        </Link>
      </form>
    </div>
  )
}

export default Signup