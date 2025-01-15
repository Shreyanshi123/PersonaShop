import React from "react";
import { Plus,Minus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action/index.js";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="flex flex-col items-center justify-center py-10 bg-light-lavender min-h-[50vh]">
        <h4 className="text-2xl font-semibold text-deep-plum mb-6">
          Your Cart is Empty
        </h4>
        <Link
          to="/"
          className="px-6 py-3 bg-deep-purple text-white font-medium rounded-lg shadow-md-purple hover:bg-deep-plum transition-all"
        >
          <i className="fa fa-arrow-left mr-2"></i> Continue Shopping
        </Link>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-full bg-purple-palette">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-light-lavender shadow-md-purple rounded-lg p-6">
              <h5 className="text-xl font-bold text-deep-plum mb-6">Item List</h5>
              {state.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-md shadow-md-purple mr-4"
                    />
                    <div>
                      <p className="text-lg font-medium text-deep-plum">{item.title}</p>
                      <p className="text-black">{item.qty} x ${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="w-10 px-3 py-1 bg-deep-plum text-white rounded-lg shadow-md-purple hover:bg-deep-purple transition"
                      onClick={() => removeItem(item)}
                    > 
                      <Minus className="w-4 h-4 text-white" />
                    </button>
                    <p className="text-lg font-semibold">{item.qty}</p>
                    <button
                      className="w-10  px-3 py-1 bg-deep-plum text-white rounded-lg shadow-md-purple hover:bg-deep-purple transition"
                      onClick={() => addItem(item)}
                    >
                     <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-light-lavender lavendar shadow-md-purple rounded-lg p-6">
              <h5 className="text-xl font-bold text-deep-plum mb-6">Order Summary</h5>
              <ul className="space-y-4">
                <li className="flex justify-between text-deep-purple text-lg">
                  <span>Products ({totalItems})</span>
                  <span>${subtotal.toFixed(2)}</span>
                </li>
                <li className="flex justify-between text-deep-purple text-lg">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </li>
                <li className="flex justify-between text-deep-purple text-lg font-semibold">
                  <span>Total Amount</span>
                  <span>${(subtotal + shipping).toFixed(2)}</span>
                </li>
              </ul>
              <Link
                to="/checkout"
                className="block text-center mt-6 px-6 py-3 bg-deep-purple text-white font-medium rounded-lg shadow-md-purple hover:bg-deep-plum transition-all"
              >
                Go to Checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <div className="bg-purple-palette min-h-screen">
        <h1 className="text-center text-3xl font-bold text-deep-plum py-8">
          Cart
        </h1>
        <hr className="border-deep-purple w-3/4 mx-auto" />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Cart;
