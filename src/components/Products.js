import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/index.js";
import toast from "react-hot-toast";  // Import toast for success message

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();  // Initialize dispatch

  // Function to add product to cart
  const addProductToCart = (product) => {
    dispatch(addCart(product));  // Dispatch action to add item to cart
    toast.success("Added to cart");  // Show success toast
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setTrendingProducts(data.slice(0, 8)); // Get first 8 products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gradient-to-br from-light-lavender via-muted-purple to-deep-plum min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-purple-palette rounded-lg overflow-hidden shadow-md-purple mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-plum via-muted-purple to-light-lavender opacity-90"></div>
        <div className="relative z-10 text-center py-20 text-white">
          <h1 className="text-5xl font-extrabold mb-4">Discover the Latest Trends</h1>
          <p className="text-lg mb-6">
            Shop from a wide range of categories at unbeatable prices.
          </p>
          <Link
            to="/products"
            className="bg-white text-deep-plum hover:text-white hover:bg-deep-purple px-6 py-3 rounded-lg font-semibold shadow-md-purple"
          >
            Shop Now
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Featured Categories */}
      <section className="mb-12 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Featured Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Men's Clothing", "Women's Clothing", "Jewelry", "Electronics"].map(
            (category, index) => (
              <Link
                to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                className="bg-light-lavender bg-opacity-80 hover:bg-light-lavender text-deep-purple font-medium text-center py-10 rounded-lg shadow-md-purple transition"
              >
                {category}
              </Link>
            )
          )}
        </div>
      </section>

      {/* Trending Products */}
      <section className="mb-12 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Trending Products
        </h2>
        {loading ? (
          <div className="text-center text-white">Loading trending products...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md-purple rounded-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain p-4"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-deep-plum">
                    {product.title.substring(0, 20)}...
                  </h3>
                  <p className="text-muted-purple mb-4">${product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="text-white mx-5 bg-deep-plum hover:bg-black py-2 px-4 rounded-md shadow-md-purple transition"
                  >
                    View Details
                  </Link>
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addProductToCart(product)}
                    className="mt-4 mx-5 bg-deep-plum text-white px-4 py-2 rounded-lg hover:bg-black transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-deep-plum py-10 rounded-lg text-center text-white px-4">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">
          Sign up for our newsletter to get the latest deals and updates.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-full md:w-1/3 text-gray-800"
          />
          <button
            type="submit"
            className="bg-white text-deep-plum hover:bg-muted-purple px-6 py-2 rounded-md font-semibold shadow-md-purple transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
