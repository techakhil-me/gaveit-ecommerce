import React, { useContext, useEffect } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../Cartcontext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { Cart, dispatch } = useContext(CartContext);
  useEffect(() => {
    dispatch({ type: "LoadCart" });
  }, []);

  
  return (
    <div className="container mx-auto py-5 space-y-2">
      <p className="text-3xl font-bold leading-9 text-gray-800">
        Shopping Cart
      </p>
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="col-span-full lg:col-span-8 space-y-4">
          {Cart.map((product, i) => (
            <CartItem
              asin={product.id}
              title={product.title}
              img={product.img}
              rating={product.rating}
              total_reviews={product.total_reviews}
              current_price={product.current_price}
              before_price={product.before_price}
            />
          ))}
        </div>
        <div className="col-span-full lg:col-span-4 inline-flex flex-col space-y-6 items-center justify-center bg-white shadow rounded-lg p-5">
          <div className="flex flex-col space-y-2 items-start justify-start">
            <div className="inline-flex space-x-11 items-start justify-between w-full">
              <p className="text-lg font-medium leading-7 text-gray-700">
                Subtotal (2 items)
              </p>
              <p className="text-lg font-bold leading-7 text-gray-700">
                Rs 245.34
              </p>
            </div>
            <div className="inline-flex space-x-11 items-start justify-between w-full">
              <p className="text-lg font-medium leading-7 text-gray-700">
                Shipping
              </p>
              <p className="text-lg font-bold leading-7 text-gray-700">
                Rs 245.34
              </p>
            </div>
            <div className="inline-flex space-x-11 items-start justify-between w-full">
              <p className="text-xl font-medium leading-7 text-gray-700">
                Cart Total
              </p>
              <p className="text-xl font-bold leading-7 text-gray-900">
                Rs 245.34
              </p>
            </div>
          </div>
          <p className="text-lg font-medium leading-7 text-center">
            Your order is eligible for FREE Delivery. Select this option at
            checkout. Details
          </p>
          <Link to="/order" className="inline-flex space-x-2 items-center justify-between w-full px-6 py-3 bg-yellow-500 rounded-lg">
            <p className="text-lg font-medium leading-7 text-gray-800">
              Checkout
            </p>
            <p className="text-lg font-medium leading-7 text-gray-800">
              Rs 1233.44
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
