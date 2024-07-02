import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../product.json";
import rating from "../assets/rating_img.png";
import { CartContext } from '../CartContext';


const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);


  const categoryProducts =
    category === "affordable"
      ? products.filter((product) => {
          const price = parseInt(product.price.replace(/,/g, ""), 10);
          return price < 500;
        })
      : products.filter((product) => product.category.includes(category));

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  if (categoryProducts.length === 0)
    return <div>No products found in this category.</div>;

  return (
    <div className="category-products bg-white p-5">
      <h2 className="font-bold text-2xl mb-4">
        Products in {category === "affordable" ? "Deals Under $500" : category}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ">
        {categoryProducts.map((product) => (
          <div key={product.id} className="product-card border-2 border-solid border-[#dbdada] rounded">
            <img
              src={product.img}
              alt={product.tittle}
              className="object-contain w-full h-48 p-2 bg-gray-50"
              onClick={() => handleProductClick(product)}
            />
            <div className="p-2 pl-4">
              <h3 className="text-xl font-bold mb-2">{product.tittle}</h3>
              <div className="flex flex-col gap-[10px] mb-0">
                <div className="flex items-center gap-[10px]">
                  <div className="flex gap-2">
                    {product.rating} <img src={rating} className="h-5" />
                  </div>
                </div>
                <h5 className="font-medium mt-[-16px] mb-2">{product.ratingtext}</h5>
                
              </div>
              <div>
                <p className=" text-2xl font-semibold pl-1">${product.price}</p>
                <div className="flex items-center gap-[10px] my-[1px] mx-0">
                <p>List Price: {" "}
                <span className="line-through">$ {product.listprice}</span></p>
                <p className="text-[16px] text-[#c73500]">({product.off})</p>
                </div>
                <p>Save 5% more with Subscribe & Save</p>
                <button className="outline-none border-none bg-[#ffd814] w-1/2 py-10px px-0 my-[10px] rounded-[50px] cursor-pointer" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
