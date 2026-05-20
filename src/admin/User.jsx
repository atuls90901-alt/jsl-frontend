import {
    FaUserCircle,
    FaEdit,
    FaTrash,
    FaUsers,
} from "react-icons/fa";

function User() {

    const users = [

        {
            id: 1,
            name: "Atul",
            email: "admin@gmail.com",
            role: "Admin",
            status: "Active",
        },

        {
            id: 2,
            name: "Robin",
            email: "robin@gmail.com",
            role: "User",
            status: "Active",
        },

        {
            id: 3,
            name: "Aman",
            email: "aman@gmail.com",
            role: "User",
            status: "Active",
        },

        {
            id: 4,
            name: "Rahul",
            email: "rahul@gmail.com",
            role: "User",
            status: "Active",
        },

    ];

    return (

        <div className="w-full">


            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Users
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage all users details
                    </p>

                </div>

                <button
                    className="
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
                    Add User
                </button>

            </div>



            <div
                className="
        bg-white
        rounded-3xl
        p-6
        shadow-sm
        border
        border-gray-100
        mb-8
        flex
        items-center
        justify-between
      "
            >

                <div>

                    <p className="text-gray-500">
                        Total Users
                    </p>

                    <h2 className="text-4xl font-bold mt-2">
                        {users.length}
                    </h2>

                </div>

                <div
                    className="
          bg-blue-100
          text-blue-600
          p-5
          rounded-2xl
          text-3xl
        "
                >
                    <FaUsers />
                </div>

            </div>



            <div
                className="
        bg-white
        rounded-3xl
        shadow-sm
        border
        border-gray-100
        overflow-x-auto
      "
            >

                <table className="w-full min-w-[700px]">

                    <thead>

                        <tr className="bg-gray-50 border-b">

                            <th className="text-left p-5 font-semibold">
                                User
                            </th>

                            <th className="text-left p-5 font-semibold">
                                Email
                            </th>

                            <th className="text-left p-5 font-semibold">
                                Role
                            </th>

                            <th className="text-left p-5 font-semibold">
                                Status
                            </th>

                            <th className="text-left p-5 font-semibold">
                                Actions
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {users.map((user) => (

                            <tr
                                key={user.id}
                                className="
                border-b
                hover:bg-gray-50
                transition
              "
                            >


                                <td className="p-5">

                                    <div className="flex items-center gap-4">

                                        <div
                                            className="
                      text-4xl
                      text-blue-600
                    "
                                        >
                                            <FaUserCircle />
                                        </div>

                                        <div>

                                            <h3 className="font-semibold text-gray-800">
                                                {user.name}
                                            </h3>

                                        </div>

                                    </div>

                                </td>



                                <td className="p-5 text-gray-600">
                                    {user.email}
                                </td>



                                <td className="p-5">

                                    <span
                                        className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium

                    ${user.role === "Admin"
                                                ? "bg-purple-100 text-purple-600"

                                                : "bg-blue-100 text-blue-600"
                                            }
                  `}
                                    >
                                        {user.role}
                                    </span>

                                </td>


                                
                                <td className="p-5">

                                    <span
                                        className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium

                    ${user.status === "Active"
                                                ? "bg-green-100 text-green-600"

                                                : user.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-600"

                                                    : "bg-red-100 text-red-600"
                                            }
                  `}
                                    >
                                        {user.status}
                                    </span>

                                </td>



                                <td className="p-5">

                                    <div className="flex items-center gap-3">

                                        <button
                                            className="
                      bg-blue-50
                      hover:bg-blue-600
                      hover:text-white
                      p-3
                      rounded-xl
                      transition
                    "
                                        >
                                            <FaEdit />
                                        </button>

                                        <button
                                            className="
                      bg-red-50
                      hover:bg-red-600
                      hover:text-white
                      p-3
                      rounded-xl
                      transition
                    "
                                        >
                                            <FaTrash />
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default User;