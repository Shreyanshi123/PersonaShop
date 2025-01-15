import React from 'react';
import Navbar from '../components/Navbar.js';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-lg text-center font-bold text-deep-purple">About Us</h1>
        <hr />
        <p className="lead text-center text-deep-plum max-w-screen-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
        </p>

        <h2 className="text-md text-center py-4 font-bold text-deep-purple">Our Products</h2>
        <div className="grid grid-cols-4 gap-4 m-3">
          {/* Product 1 */}
          <div className="bg-light-lavender rounded-md shadow-md">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Men's Clothing"
            />
            <div className="card-body p-4">
              <h5 className="card-title text-center text-deep-purple text-md font-bold">Men's Clothing</h5>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-light-lavender rounded-md shadow-md">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Women's Clothing"
            />
            <div className="card-body p-4">
              <h5 className="card-title text-center text-deep-purple text-md font-bold">Women's Clothing</h5>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-light-lavender rounded-md shadow-md">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Jewelry"
            />
            <div className="card-body p-4">
              <h5 className="card-title text-center text-deep-purple text-md font-bold">Jewelry</h5>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-light-lavender rounded-md shadow-md">
            <img
              className="w-full h-40 object-cover rounded-t-md"
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Electronics"
            />
            <div className="card-body p-4">
              <h5 className="card-title text-center font-bold text-deep-purple text-md">Electronics</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
