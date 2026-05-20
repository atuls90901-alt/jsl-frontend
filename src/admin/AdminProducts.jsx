import { useEffect, useState } from "react";

import {
  FaEdit,
  FaTrash,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
{/* fetch product*/}
function AdminProducts() {

  const [products, setProducts] =
    useState([]);

  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 6;

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

    }
  };

  { /* PAGINATION*/}
  const lastProductIndex =
    currentPage * productsPerPage;

  const firstProductIndex =
    lastProductIndex -
    productsPerPage;

  const currentProducts =
    products.slice(
      firstProductIndex,
      lastProductIndex
    );

  const totalPages =
    Math.ceil(
      products.length /
      productsPerPage
    );

  return (

    <div className="w-full px-2 sm:px-4">

      {/* TOP HEADER */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
        mb-6
      "
      >

        <div>

          <h1
            className="
            text-2xl
            sm:text-3xl
            font-bold
            text-gray-800
          "
          >
            Products
          </h1>

          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Manage all products easily
          </p>

        </div>

        <button
          className="
          w-full
          sm:w-auto
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-3
          rounded-2xl
          shadow-lg
          transition
        "
        >
          Add Product
        </button>

      </div>

      {/* PRODUCT GRID */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3
        gap-4
      "
      >

        {currentProducts.map((item) => (

          <div
            key={item.id}
            className="
            bg-white
            rounded-2xl
            overflow-hidden
            border
            border-gray-100
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-300
          "
          >

            {/* IMAGE */}

            <div className="relative">

              <img
                src={item.thumbnail}
                alt={item.title}
                className="
                w-full
                h-48
                sm:h-44
                object-cover
              "
              />

              <span
                className="
                absolute
                top-3
                left-3
                bg-white/90
                px-3
                py-1
                rounded-full
                text-[10px]
                font-semibold
                shadow
              "
              >
                {item.category}
              </span>

            </div>

            {/* CONTENT */}

            <div className="p-4">

              <h2
                className="
                text-base
                sm:text-lg
                font-bold
                text-gray-800
                line-clamp-1
              "
              >
                {item.title}
              </h2>

              <p
                className="
                text-gray-500
                text-sm
                mt-2
                line-clamp-2
              "
              >
                {item.description}
              </p>

              {/* RATING */}

              <div className="flex items-center gap-2 mt-3">

                <FaStar className="text-yellow-400 text-sm" />

                <span className="text-sm text-gray-600">
                  {item.rating}
                </span>

              </div>

              {/* PRICE + ACTIONS */}

              <div
                className="
                flex
                items-center
                justify-between
                mt-5
                gap-2
              "
              >

                <p
                  className="
                  text-lg
                  sm:text-xl
                  font-bold
                  text-blue-600
                "
                >
                  ${item.price}
                </p>

                <div className="flex items-center gap-2">

                  <button
                    className="
                    bg-blue-50
                    hover:bg-blue-600
                    hover:text-white
                    p-2.5
                    rounded-xl
                    transition
                  "
                  >
                    <FaEdit className="text-sm" />
                  </button>

                  <button
                    className="
                    bg-red-50
                    hover:bg-red-600
                    hover:text-white
                    p-2.5
                    rounded-xl
                    transition
                  "
                  >
                    <FaTrash className="text-sm" />
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* PAGINATION */}

      <div
        className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-2
        mt-10
      "
      >

        {/* PREV Button */}

        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(
              currentPage - 1
            )
          }
          className="
          flex
          items-center
          gap-2
          px-3
          sm:px-4
          py-2
          rounded-xl
          bg-white
          shadow
          hover:bg-blue-600
          hover:text-white
          transition
          disabled:opacity-50
        "
        >

          <FaChevronLeft />

          <span className="hidden sm:block">
            Prev
          </span>

        </button>

        {/* PAGE NUMBERS */}

        {[...Array(totalPages)].map(
          (_, index) => (

            <button
              key={index}
              onClick={() =>
                setCurrentPage(
                  index + 1
                )
              }
              className={`
              
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-xl
              text-sm
              font-semibold
              transition

              ${
                currentPage ===
                index + 1

                  ? "bg-blue-600 text-white"

                  : "bg-white hover:bg-blue-100"
              }
              
              `}
            >

              {index + 1}

            </button>

          )
        )}

        {/* NEXT Button */}

        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            setCurrentPage(
              currentPage + 1
            )
          }
          className="
          flex
          items-center
          gap-2
          px-3
          sm:px-4
          py-2
          rounded-xl
          bg-white
          shadow
          hover:bg-blue-600
          hover:text-white
          transition
          disabled:opacity-50
        "
        >

          <span className="hidden sm:block">
            Next
          </span>

          <FaChevronRight />

        </button>

      </div>

    </div>
  );
}

export default AdminProducts;