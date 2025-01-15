import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-light-lavender via-muted-purple to-deep-plum text-light-lavender">
      {/* Title */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center text-deep-purple">
        <h2 className="mt-6 text-3xl font-extrabold">Sign In to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white bg-opacity-90 py-8 px-6 shadow-lg rounded-lg sm:px-10 border border-soft-purple-shadow">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-deep-plum"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail
                    className="h-5 w-5 text-muted-purple"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail( e.target.value )
                  }
                  required
                  className="block w-full px-3 py-2 pl-10 bg-light-purple bg-opacity-10 border border-muted-purple rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-deep-plum focus:border-deep-plum sm:text-sm"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-deep-plum"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock
                    className="h-5 w-5 text-muted-purple"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword( e.target.value )
                  }
                  required
                  className="block w-full px-3 py-2 pl-10 bg-light-purple bg-opacity-10 border border-muted-purple rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-deep-plum focus:border-deep-plum sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deep-plum hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-plum transition duration-150 ease-in-out"
            >
              <LogIn className="mr-2 h-5 w-5" aria-hidden="true" />
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-deep-plum">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-medium text-muted-purple hover:text-deep-plum transition"
            >
             Sign Up Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
