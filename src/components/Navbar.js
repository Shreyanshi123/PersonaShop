// src/components/Navbar.js

import React, { useState, useEffect } from "react";
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null); // Local user state
  const cart = useState([]); // Example cart state (you can update this logic)
  const isAdmin = false; // Set admin status if needed
  const navigate = useNavigate();

  // Check user status from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear the user from localStorage
    navigate("/"); // Redirect to homepage after logging out
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-light-lavender via-muted-purple to-deep-plum shadow-lg z-40 transition-all duration-300 border-b border-soft-purple-shadow">
        <div className="flex flex-wrap justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center space-x-2 text-deep-purple hover:text-black"
          >
            TrendSphere
          </Link>
          <nav className="flex flex-wrap items-center gap-5">
            <Link
              to="/"
              className="font-bold hover:text-black active:text-peach transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="font-bold hover:text-black active:text-peach transition duration-300"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="font-bold hover:text-black active:text-peach transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-bold hover:text-black active:text-peach transition duration-300"
            >
              Contact
            </Link>
            
              <Link
                to="/cart"
                className="font-bold relative group hover:text-muted-purple active:text-peach transition duration-300"
              >
                <ShoppingCart
                  className="inline-block mr-1 group-hover:text-black"
                  size={20}
                />
                <span className="hidden sm:inline hover:text-black">Cart</span>
                {cart.length > 0 && (
                  <span className="font-bold absolute -top-2 -left-2 bg-muted-purple text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-black transition duration-300">
                    {cart.length}
                  </span>
                )}
              </Link>
            
            {isAdmin && (
              <Link
                to="/secret-dashboard"
                className="bg-deep-plum hover:bg-black text-white px-3 py-1 rounded-md font-medium transition duration-300 flex items-center"
              >
                <Lock className="inline-block mr-1" size={15} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-deep-purple hover:bg-black text-white py-2 px-4 rounded-md flex items-center transition duration-300"
              >
                <LogOut size={15} />
                <span className="hidden sm:inline mr-1">Log Out</span>
              </button>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="bg-deep-purple hover:bg-black text-white py-2 px-4 rounded-md flex items-center transition duration-300"
                >
                  <UserPlus className="mr-2" size={15} />
                  <span className="hidden sm:inline mr-1">Sign up</span>
                </Link>
                <Link
                  to="/login"
                  className="bg-deep-purple hover:bg-black text-white py-2 px-4 rounded-md flex items-center transition duration-300"
                >
                  <LogIn className="mr-2" size={15} />
                  <span className="hidden sm:inline mr-1">Sign In</span>
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
