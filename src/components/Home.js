import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "../product.json";
import { useNavigate } from "react-router-dom";

import Header from "./Header";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const product = async () => {
    const SportsProducts = products.filter((product) =>
      product.category.includes("sports")
    );
    setData(SportsProducts);
  };

  useEffect(() => {
    product();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const categoryProducts = (category) => {
    const categoryProduct = products.find((product) =>
      product.category.includes(category)
    );
    return categoryProduct;
  };

  const affordableProduct = products.find((product) => {
    const price = parseInt(product.price.replace(/,/g, ""), 10);
    return price < 500;
  });

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <>
      <Header />

      <div className="box-row flex flex-wrap gap-y-5 justify-between my-5 mx-8 mt-[-20vw] sm:mt-[-10vw] lg:mt-[-5vw]">
        {affordableProduct && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] h-1/3 z-[1] rounded-sm">
            <h2 className="font-bold text-xl">Deals Under $500</h2>
            <div className="max-w-full h-56">
              <img
                src={affordableProduct.img}
                alt={affordableProduct.tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() => handleProductClick(affordableProduct)}
              />
            </div>
            <button
              className="flex text-[16px] justify-start text-[#009999] font-medium w-1/3"
              onClick={() => handleCategoryClick("affordable")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("stationary") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Stationary</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("stationary").img}
                alt={categoryProducts("stationary").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() =>
                  handleProductClick(categoryProducts("stationary"))
                }
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("stationary")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("pcs") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Deals in PCs</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("pcs").img}
                alt={categoryProducts("pcs").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() => handleProductClick(categoryProducts("pcs"))}
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("pcs")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("fashion") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Fashion Mart</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("fashion").img}
                alt={categoryProducts("fashion").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() => handleProductClick(categoryProducts("fashion"))}
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("fashion")}
            >
              Shop More
            </button>
          </div>
        )}
      </div>

      <div className="box-row flex flex-wrap gap-y-5 justify-between my-5 mx-8">
        {categoryProducts("latestdevice") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Latest Devices</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("latestdevice").img}
                alt={categoryProducts("latestdevice").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() =>
                  handleProductClick(categoryProducts("latestdevice"))
                }
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("latestdevice")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("petfood") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Pet Food</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("petfood").img}
                alt={categoryProducts("petfood").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() => handleProductClick(categoryProducts("petfood"))}
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("petfood")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("appliances") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Appliances</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("appliances").img}
                alt={categoryProducts("appliances").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() =>
                  handleProductClick(categoryProducts("appliances"))
                }
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("appliances")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("grooming") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Grooming Products</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("grooming").img}
                alt={categoryProducts("grooming").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() => handleProductClick(categoryProducts("grooming"))}
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("grooming")}
            >
              Shop More
            </button>
          </div>
        )}
      </div>

      <h2 className="font-bold text-2xl my-8 mx-8 text-[#009999]">
        Best Deals in Sports
      </h2>
      <div className="my-5 mx-8 bg-white">
        <Slider {...settings}>
          {data.map((product) => (
            <div key={product.id} className="flex justify-center sm:bg-white">
              <div
                className="flex flex-col items-center gap-2 py-4 px-5 bg-white w-full sm:w-[70%]  sm:bg-white rounded-sm h-1/3 z-[1]"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.img}
                  alt={product.tittle}
                  className="object-contain w-full h-48 cursor-pointer"
                />
               
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="box-row flex flex-wrap gap-y-5 justify-between my-5 mx-8 ">
      {categoryProducts("pcs") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Gaming PCs</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("pcs").img}
                alt={categoryProducts("pcs").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() =>
                  handleProductClick(categoryProducts("pcs"))
                }
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("pcs")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("monitors") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Gaming Monitors</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("monitors").img}
                alt={categoryProducts("monitors").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() =>
                  handleProductClick(categoryProducts("monitors"))
                }
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("monitors")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("consoles") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Gaming Consoles</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("consoles").img}
                alt={categoryProducts("consoles").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() => handleProductClick(categoryProducts("consoles"))}
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("consoles")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("chairs") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Gaming Chairs</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("chairs").img}
                alt={categoryProducts("chairs").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() => handleProductClick(categoryProducts("chairs"))}
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("chairs")}
            >
              Shop More
            </button>
          </div>
        )}
      </div>

      <div className="box-row flex flex-wrap gap-y-5 justify-between my-5 mx-8">
        {categoryProducts("headphones") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Headpones</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("headphones").img}
                alt={categoryProducts("headphones").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() =>
                  handleProductClick(categoryProducts("headphones"))
                }
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("headphones")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("petfood") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Pet Food</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("petfood").img}
                alt={categoryProducts("petfood").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() => handleProductClick(categoryProducts("petfood"))}
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("petfood")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("appliances") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Appliances</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("appliances").img}
                alt={categoryProducts("appliances").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() =>
                  handleProductClick(categoryProducts("appliances"))
                }
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("appliances")}
            >
              Shop More
            </button>
          </div>
        )}

        {categoryProducts("grooming") && (
          <div className="flex flex-col gap-2 py-4 px-5 bg-white w-full sm:w-[48%] lg:w-[24%] rounded-sm h-1/3 z-[1]">
            <h3 className="font-bold text-xl">Grooming Products</h3>
            <div className="max-w-full h-56">
              <img
                src={categoryProducts("grooming").img}
                alt={categoryProducts("grooming").tittle}
                className="object-contain w-full h-48 cursor-pointer"
                onClick={() => handleProductClick(categoryProducts("grooming"))}
              />
            </div>
            <button
              className="flex justify-start w-1/3 text-[16px] text-[#009999] font-medium"
              onClick={() => handleCategoryClick("grooming")}
            >
              Shop More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
