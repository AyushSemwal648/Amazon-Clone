import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../product.json";
import rating from "../assets/rating_img.png";
import circle from "../assets/circle_icon.png";
import location from "../assets/location_icon_dark.png";
import { CartContext } from "../CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((product) => product.id === id); // Assuming id in product.json is a string

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <div className="product-display min-h-full py-5 px-4 flex flex-col lg:flex-row bg-white">
        <div className="product-d-image flex flex-col lg:flex-row gap-4">
          <div className="product-icons flex flex-row lg:flex-col gap-4">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={product.img}
                alt={product.tittle}
                className="object-contain w-14 border rounded-xl p-1"
              />
            ))}
          </div>
          <div className="product-main-image">
            <img
              src={product.img}
              alt={product.tittle}
              className="object-contain w-full lg:w-[400px]"
            />
          </div>
        </div>
        <div className="product-d-details my-4 mx-0 lg:mx-8">
          <p className="product-title text-2xl">{product.tittle}</p>
          <p className="mt-1 text-[#007185] text-sm">{product.brand}</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                {product.rating} <img src={rating} className="h-5" />
              </div>
            </div>
            <h5 className="font-medium">{product.ratingtext}</h5>
            <hr />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4 my-4">
              <p className="text-xl text-[#c73500]">{product.off}</p>
              <h1 className="text-xl font-medium">${product.price}</h1>
            </div>
            <h5 className="font-normal text-[#565656]">
              List Price:{" "}
              <span className="line-through">${product.listprice}</span>
            </h5>
            <p>
              Get <b>Fast, Free Shipping</b> with{" "}
              <span className="text-[#007185]">Amazon Prime</span>
            </p>
            <p className="text-[#007185]">FREE Returns</p>
            <p className="text-[#007185]">
              Join Prime to buy this item at $22.99
            </p>
            <p>
              Available at a lower price from{" "}
              <span className="text-[#007185]">other sellers</span> that may not
              offer free Prime shipping.
            </p>
          </div>

          <div className="my-4">
            <p>
              Color: <b>Blue</b>
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Black", "White", "Red", "Off White"].map((color, index) => (
                <div
                  key={index}
                  className="flex items-center py-2 px-3 border border-solid border-[#cbcbcb] gap-2"
                >
                  <img src={product.img} alt="/" className="w-8" />
                  <p>{color}</p>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div>
            <h1 className="text-xl my-4">About this item</h1>
            <ol className="list-decimal ml-8">
              {[...Array(4)].map((_, index) => (
                <li key={index} className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  auctor hendrerit ante, a vehicula urna hendrerit sed. Quisque
                  volutpat justo condimentum, bibendum turpis at, faucibus diam.
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="product-d-purchase w-full lg:max-w-[280px] border border-solid border-[#c1c1c1] rounded-2xl p-5">
          <div className="flex justify-between items-center">
            <h3>Buy new:</h3> <img src={circle} alt="/" className="w-5" />
          </div>
          <h1 className="text-lg font-normal my-2">${product.price}</h1>
          <div className="my-4">
            <p>
              Get <b>Fast, Free Shipping</b> with{" "}
              <span className="text-[#007185]">Amazon Prime</span>
            </p>
            <p className="text-[#007185]">FREE Returns</p>
          </div>
          <div className="my-4">
            <p>
              <span className="text-[#007185]">FREE delivery</span>
              <b> Saturday</b>,{" "}
            </p>
            <p>
              <b>January 27</b> on orders shipped by Amazon over $35
            </p>
          </div>
          <div className="my-4">
            <p>
              Or fastest delivery <b>Tomorrow</b>, <b>January 23</b>. Order
              within <span className="text-[#007185]">10 hrs 56 mins</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={location} className="w-5" />
            <p className="text-[#007185]">
              Delivery to Laxmin Nagar, Delhi 19001
            </p>
          </div>
          <h2 className="my-4 text-green-700 font-medium">In Stock</h2>
          <select className="py-2 px-2 outline-none w-full rounded-md bg-[#efefef] border-[#c1c1c1]">
            {[...Array(3)].map((_, i) => (
              <option key={i} value={i + 1}>
                Quantity: {i + 1}
              </option>
            ))}
          </select>
          <button
            className="outline-none border-none bg-[#ffd814] w-full py-2 mt-4 rounded-full cursor-pointer"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button className="outline-none border-none bg-[#ffa41c] w-full py-2 mt-4 rounded-full cursor-pointer">
            Buy Now
          </button>
          <div className="grid grid-cols-2 gap-2 text-sm text-[#565656] mt-4">
            <p>Ships from</p>
            <p className="text-[#007185]">Amazon</p>
            <p>Sold by</p>
            <p className="text-[#007185]">{product.brand}</p>
            <p>Returns</p>
            <p className="text-[#007185]">
              Eligible for Return, Refund, or Replacement within 30 days of
              receipt
            </p>
            <p>Payment</p>
            <p className="text-[#007185]">Secure Transaction</p>
          </div>
          <hr className="my-4" />
          <button className="w-full py-2 px-4 rounded-md border border-solid border-[#000] text-start bg-white cursor-pointer">
            Add to List
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
