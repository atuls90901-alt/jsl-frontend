import {
  FaUsers,
  FaShoppingCart,
  FaBoxOpen,
  FaRupeeSign,
} from "react-icons/fa";

function DashboardHome() {

  const orders = [
    {
      id: 1,
      customer: "Atul",
      product: "LED Light",
      status: "Delivered",
    },

    {
      id: 2,
      customer: "Rahul",
      product: "Wall Panel",
      status: "Pending",
    },

    {
      id: 3,
      customer: "Aman",
      product: "Ceiling Lamp",
      status: "Delivered",
    },

    {
      id: 4,
      customer: "Karan",
      product: "Table Light",
      status: "Cancelled",
    },
  ];

  return (

    <div className="w-full">

      {/* TOP TEXT */}

      <div className="mb-8">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Welcome Admin
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
          Here is your dashboard overview.
        </p>

      </div>

      {/* CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* PRODUCTS */}

        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow hover:shadow-2xl transition duration-300">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 text-sm sm:text-base">
                Total Products
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
                120
              </h2>

            </div>

            <div className="bg-blue-100 p-4 rounded-2xl">

              <FaBoxOpen className="text-2xl sm:text-3xl text-blue-600" />

            </div>

          </div>

        </div>

        {/* USERS */}

        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow hover:shadow-2xl transition duration-300">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 text-sm sm:text-base">
                Total Users
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
                50
              </h2>

            </div>

            <div className="bg-green-100 p-4 rounded-2xl">

              <FaUsers className="text-2xl sm:text-3xl text-green-600" />

            </div>

          </div>

        </div>

        {/* ORDERS */}

        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow hover:shadow-2xl transition duration-300">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 text-sm sm:text-base">
                Orders
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
                220
              </h2>

            </div>

            <div className="bg-yellow-100 p-4 rounded-2xl">

              <FaShoppingCart className="text-2xl sm:text-3xl text-yellow-600" />

            </div>

          </div>

        </div>

        {/* REVENUE */}

        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow hover:shadow-2xl transition duration-300">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 text-sm sm:text-base">
                Revenue
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
                ₹75K
              </h2>

            </div>

            <div className="bg-red-100 p-4 rounded-2xl">

              <FaRupeeSign className="text-2xl sm:text-3xl text-red-600" />

            </div>

          </div>

        </div>

      </div>

      {/* RECENT ORDERS */}

      <div className="bg-white rounded-3xl shadow mt-10 p-4 sm:p-6 overflow-x-auto">

        {/* HEADER */}

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">

          <div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Recent Orders
            </h2>

            <p className="text-gray-500 mt-1 text-sm sm:text-base">
              Latest customer orders
            </p>

          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl transition w-full sm:w-auto">

            View All

          </button>

        </div>

        {/* TABLE */}

        <table className="w-full min-w-[600px]">

          <thead>

            <tr className="bg-gray-100">

              <th className="p-4 text-left rounded-l-xl">
                ID
              </th>

              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left rounded-r-xl">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition duration-200"
              >

                <td className="p-4 font-semibold">
                  #{item.id}
                </td>

                <td className="p-4">
                  {item.customer}
                </td>

                <td className="p-4">
                  {item.product}
                </td>

                <td className="p-4">

                  <span
                    className={`

                    px-4 py-2 rounded-full text-sm font-semibold

                    ${
                      item.status === "Delivered"
                        ? "bg-green-100 text-green-600"

                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"

                        : "bg-red-100 text-red-600"
                    }

                    `}
                  >

                    {item.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DashboardHome;