import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaStar,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";

export default function Home() {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    try {

      const res = await fetch(
        "https://dummyjson.com/products"
      );

      const data = await res.json();

      setProducts(data.products.slice(0, 8));

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  if (loading) {

    return (

      <div className="flex items-center justify-center min-h-screen bg-gray-100">

        <h1 className="text-3xl font-bold text-blue-600 animate-pulse">

          Loading...

        </h1>

      </div>
    );
  }

  return (

    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-[#131921] to-[#232f3e] text-white py-20 px-4">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">

            Welcome To ShopEase

          </h1>

          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">

            Discover premium products with low prices and amazing offers.

          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg transition duration-300"
          >

            Shop Now

          </Link>

        </div>

      </section>

      {/* PRODUCTS */}

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold text-gray-800">

              Featured Products

            </h2>

            <p className="text-gray-500 mt-1">

              Best selling products for you

            </p>

          </div>

          <Link
            to="/products"
            className="text-blue-600 font-semibold hover:underline"
          >

            View All

          </Link>

        </div>

        {/* PRODUCT GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {products.map((item) => (

            <div
              key={item.id}
              className="

              bg-white

              rounded-2xl

              border border-gray-200

              hover:shadow-2xl

              transition duration-300

              overflow-hidden

              group

              relative

              "
            >

              {/* DISCOUNT BADGE */}

              <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">

                SALE

              </div>

              {/* WISHLIST */}

              <button
                className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow hover:bg-red-100 transition"
              >

                <FaHeart className="text-red-500 text-sm" />

              </button>

              {/* IMAGE */}

              <div className="bg-gray-100 overflow-hidden">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-contain p-4 group-hover:scale-105 transition duration-300"
                />

              </div>

              {/* CONTENT */}

              <div className="p-5">

                {/* CATEGORY */}

                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">

                  {item.category}

                </p>

                {/* TITLE */}

                <h2 className="text-lg font-bold text-gray-800 mt-2 line-clamp-2 min-h-[56px]">

                  {item.title}

                </h2>

                {/* RATING */}

                <div className="flex items-center gap-2 mt-3">

                  <div className="flex items-center text-yellow-400">

                    <FaStar />

                    <span className="ml-1 text-sm font-semibold text-gray-700">

                      {item.rating}

                    </span>

                  </div>

                  <span className="text-gray-400 text-sm">

                    (120 Reviews)

                  </span>

                </div>

                {/* DESCRIPTION */}

                <p className="text-gray-500 text-sm mt-3 line-clamp-2">

                  {item.description}

                </p>

                {/* PRICE */}

                <div className="flex items-center gap-3 mt-4">

                  <span className="text-2xl font-extrabold text-gray-900">

                    ${item.price}

                  </span>

                  <span className="text-gray-400 line-through">

                    ${(item.price + 20).toFixed(0)}

                  </span>

                </div>

                {/* BUTTONS */}

                <div className="flex gap-3 mt-5">

                  <button
                    className="

                    flex-1

                    bg-yellow-400

                    hover:bg-yellow-500

                    text-black

                    font-semibold

                    py-3

                    rounded-xl

                    transition

                    "
                  >

                    Buy Now

                  </button>

                  <button
                    className="

                    bg-blue-600

                    hover:bg-blue-700

                    text-white

                    p-3

                    rounded-xl

                    transition

                    "
                  >

                    <FaShoppingCart />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}