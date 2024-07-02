import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, getCartSubtotal } =
    useContext(CartContext);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <div className="cart-page flex flex-col gap-2 w-full">
        {cartItems.length === 0 ? (
          <div className="text-3xl font-semibold p-8 bg-white w-full h-full shadow-lg rounded-sm">
            Your cart is empty.
          </div>
        ) : (
          <div className="bg-slate-50 w-full">
            <h2 className="text-4xl font-bold m-2 p-2 mb-7">Shopping cart</h2>
            <p className="mb-0 flex justify-end mr-10 text-lg text-gray-500">
              Price
            </p>
            <hr className="m-4 mt-0" />
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item flex flex-col lg:flex-row w-full h-auto lg:h-[200px]  pl-4 lg:pl-10 my-10"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full lg:w-[200px] object-contain sm:object-fill p-2"
                />
                <div className="w-full flex flex-col">
                  <h3 className="text-2xl font-medium">{item.tittle}</h3>
                  <p className="justify-end flex mr-10 mb-0">
                    <span className="bg-red-600 mr-2 px-3 rounded">{item.off}</span> ${item.price}
                  </p>
                  <h2 className="my-[8px] mx-0 text-green-700 font-medium">
                    In Stock
                  </h2>
                  <p className="justify-end flex mr-10 mb-0">
                    List Price : <span className="line-through">${item.listprice}</span>
                  </p>
                  <p className="text-gray-400">Eligible for FREE Shipping</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-600">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <hr className="m-2" />
            <div className="cart-total flex justify-end mr-10">
              <h3 className="text-[20px]">
                Subtotal: <span className="text-2xl font-semibold ml-2">${getCartSubtotal()}</span>
              </h3>
            </div>
          </div>
        )}
      </div>

      <div className="cart-total flex w-full lg:w-[20%] m-1 bg-white flex-col p-4 justify-center h-auto lg:h-52 items-center shadow-lg rounded-sm">
        <h3 className="text-lg mb-4">
          Subtotal({cartItems.length} item{cartItems.length > 1 && 's'}): <span className="text-[20px] font-semibold">${getCartSubtotal()}</span>
        </h3>
        <button className="outline-none border-none bg-[#ffd814] w-full p-2 mt-4 rounded cursor-pointer shadow-lg">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default Cart;
