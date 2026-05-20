import { useEffect, useState } from "react";

import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

export default function Product() {

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

      setProducts(data.products);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  

  if (loading) {

    return (

      <div className="flex items-center justify-center min-h-screen bg-gray-100">

        <h1 className="text-4xl font-bold text-blue-600 animate-pulse">

          Loading Products...

        </h1>

      </div>
    );
  }

  return (

    <div className="bg-gray-100 min-h-screen">

      

      <div className="bg-gradient-to-r from-[#131921] via-[#232F3E] to-[#37475A] text-white py-16 px-4">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-extrabold">

            Premium Collection

          </h1>

          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">

            Discover new products with modern
            design and low pricing.

          </p>

        </div>

      </div>

      

      <div className="max-w-7xl mx-auto px-4 py-12">

        

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10">

          <div>

            <h2 className="text-3xl font-bold text-gray-800">

              Latest Collection

            </h2>

            <p className="text-gray-500 mt-1">

              Explore trending products

            </p>

          </div>

          <button
            className="

            bg-blue-600 hover:bg-blue-700

            text-white

            px-6 py-3

            rounded-2xl

            shadow-lg

            transition duration-300

            "
          >

            Explore More

          </button>

        </div>

       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.map((item) => (

            <div
              key={item.id}
              className="

              group

              bg-white

              rounded-[28px]

              overflow-hidden

              border border-gray-200

              hover:border-blue-300

              hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]

              hover:-translate-y-2

              transition-all duration-500

              relative

              "
            >

             

              <div className="absolute top-4 left-4 z-20 flex gap-2">

                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">

                  SALE

                </span>

                <span className="bg-black/80 text-white text-xs px-3 py-1 rounded-full">

                  TRENDING

                </span>

              </div>

              

              <button
                className="

                absolute top-4 right-4 z-20

                w-11 h-11

                rounded-full

                bg-white/90

                shadow-lg

                flex items-center justify-center

                hover:bg-red-50

                transition

                "
              >

                <FaHeart className="text-red-500" />

              </button>

              

              <div
                className="

                relative

                h-72

                bg-gradient-to-b from-gray-50 to-gray-100

                overflow-hidden

                flex items-center justify-center

                "
              >

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="

                  w-full h-full

                  object-contain

                  p-6

                  group-hover:scale-110

                  transition duration-700

                  "
                />

              </div>

             

              <div className="p-6">

                

                <p
                  className="

                  text-xs

                  uppercase

                  tracking-[3px]

                  text-blue-600

                  font-bold

                  "
                >

                  {item.category}

                </p>

                

                <h2
                  className="

                  text-xl

                  font-bold

                  text-gray-800

                  mt-3

                  leading-8

                  line-clamp-2

                  min-h-[64px]

                  "
                >

                  {item.title}

                </h2>

               

                <p
                  className="

                  text-gray-500

                  text-sm

                  mt-3

                  leading-6

                  line-clamp-2

                  "
                >

                  {item.description}

                </p>

                

                <div className="flex items-center justify-between mt-5">

                  <div className="flex items-center gap-1 text-yellow-400">

                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <span className="text-sm text-gray-500 ml-1">

                      ({item.rating})

                    </span>

                  </div>

                  <span className="text-sm font-semibold text-green-600">

                    In Stock

                  </span>

                </div>

               

                <div className="flex items-end gap-3 mt-6">

                  <h3 className="text-4xl font-extrabold text-gray-900">

                    ${item.price}

                  </h3>

                  <span className="text-lg text-gray-400 line-through">

                    ${(item.price + 35).toFixed(0)}

                  </span>

                </div>

                

                <div className="flex gap-3 mt-7">

                  <button
                    className="

                    flex-1

                    bg-gradient-to-r from-blue-600 to-indigo-600

                    hover:from-blue-700 hover:to-indigo-700

                    text-white

                    font-bold

                    py-3.5

                    rounded-2xl

                    transition-all duration-300

                    shadow-lg

                    "
                  >

                    Buy Now

                  </button>

                  <button
                    className="

                    w-14

                    flex items-center justify-center

                    rounded-2xl

                    bg-gray-100

                    hover:bg-blue-600

                    hover:text-white

                    transition-all duration-300

                    text-xl

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