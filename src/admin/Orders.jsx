import {
  FaShoppingBag,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";

function Orders() {

  const orders = [
    {
      id: "#1001",
      customer: "Atul",
      product: "LED Light",
      amount: "₹2,500",
      status: "Delivered",
    },
    {
      id: "#1002",
      customer: "Rahul",
      product: "Wall Panel",
      amount: "₹4,200",
      status: "Pending",
    },
    {
      id: "#1003",
      customer: "Aman",
      product: "Ceiling Lamp",
      amount: "₹3,100",
      status: "Cancelled",
    },
    {
      id: "#1004",
      customer: "Karan",
      product: "Table Light",
      amount: "₹1,800",
      status: "Delivered",
    },
    {
      id: "#1005",
      customer: "Rohit",
      product: "Modern Bulb",
      amount: "₹950",
      status: "Pending",
    },
  ];

  return (
    <div className="w-full">

     
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-gray-800">
            Orders
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all customer orders
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-300">
          View Reports
        </button>

      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">

       
        <div className="bg-white rounded-3xl p-6 shadow hover:shadow-2xl transition">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Total Orders
              </p>

              <h2 className="text-4xl font-bold mt-3">
                220
              </h2>

            </div>

            <div className="bg-blue-100 p-4 rounded-2xl">

              <FaShoppingBag className="text-3xl text-blue-600" />

            </div>

          </div>

        </div>

        
        <div className="bg-white rounded-3xl p-6 shadow hover:shadow-2xl transition">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Delivered
              </p>

              <h2 className="text-4xl font-bold mt-3">
                180
              </h2>

            </div>

            <div className="bg-green-100 p-4 rounded-2xl">

              <FaCheckCircle className="text-3xl text-green-600" />

            </div>

          </div>

        </div>

        
        <div className="bg-white rounded-3xl p-6 shadow hover:shadow-2xl transition">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Pending
              </p>

              <h2 className="text-4xl font-bold mt-3">
                40
              </h2>

            </div>

            <div className="bg-yellow-100 p-4 rounded-2xl">

              <FaClock className="text-3xl text-yellow-600" />

            </div>

          </div>

        </div>

      </div>

    
      <div className="bg-white rounded-3xl shadow p-6 overflow-x-auto">

        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              Recent Orders
            </h2>

            <p className="text-gray-500 mt-1">
              Latest orders overview
            </p>

          </div>

          <input
            type="text"
            placeholder="Search Orders..."
            className="border border-gray-300 px-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        
        <table className="w-full min-w-[750px]">

          <thead>

            <tr className="bg-gray-100 text-gray-700">

              <th className="p-4 text-left rounded-l-2xl">
                Order ID
              </th>

              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left rounded-r-2xl">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((item, index) => (

              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-4 font-semibold">
                  {item.id}
                </td>

                <td className="p-4">
                  {item.customer}
                </td>

                <td className="p-4">
                  {item.product}
                </td>

                <td className="p-4 font-semibold text-blue-600">
                  {item.amount}
                </td>

                <td className="p-4">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit
                      
                    ${
                      item.status === "Delivered"
                        ? "bg-green-100 text-green-600"

                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"

                        : "bg-red-100 text-red-600"
                    }
                    
                    `}
                  >

                    {
                      item.status === "Delivered" ? (
                        <FaCheckCircle />
                      ) : item.status === "Pending" ? (
                        <FaClock />
                      ) : (
                        <FaTimesCircle />
                      )
                    }

                    {item.status}

                  </span>

                </td>

                <td className="p-4">

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Orders;