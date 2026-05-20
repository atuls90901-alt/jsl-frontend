import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useState } from "react";

function Sidebar() {

  const location = useLocation();

  const [open, setOpen] =
    useState(false);

  const menus = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaTachometerAlt />,
    },

    {
      name: "Products",
      path: "/admin/products",
      icon: <FaBoxOpen />,
    },

    {
      name: "Orders",
      path: "/admin/orders",
      icon: <FaShoppingCart />,
    },

    {
      name: "Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },

  

    {
      name: "Settings",
      path: "/admin/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <>
      {/* MOBILE HEADER */}

      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 flex items-center gap-4 z-50 shadow-lg">

        {/* HAMBURGER */}

        <button
          onClick={() =>
            setOpen(!open)
          }
          className="text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* TITLE */}

        <h1 className="text-2xl font-bold">
          Admin Panel
        </h1>

      </div>

      {/* OVERLAY */}

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() =>
            setOpen(false)
          }
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`

        fixed md:sticky

        top-0 left-0

        z-50

        w-72

        h-screen

        bg-gradient-to-b from-gray-900 to-gray-800

        text-white

        p-6

        flex flex-col

        shadow-2xl

        transition-transform duration-300

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }

        `}
      >

        {/* LOGO */}

        <div className="flex items-center justify-between mb-10">

          <h1 className="text-3xl font-bold tracking-wide">

            ShopEase

          </h1>

          {/* CLOSE BUTTON */}

          <button
            className="md:hidden text-2xl"
            onClick={() =>
              setOpen(false)
            }
          >
            <FaTimes />
          </button>

        </div>

        {/* NAVIGATION */}

        <nav className="flex flex-col gap-3">

          {menus.map((item, index) => (

            <Link
              key={index}
              to={item.path}
              onClick={() =>
                setOpen(false)
              }
              className={`

              flex items-center gap-4

              px-5 py-4

              rounded-2xl

              transition-all duration-300

              text-lg font-medium

              ${
                location.pathname ===
                item.path
                  ? "bg-blue-600 shadow-lg"

                  : "hover:bg-gray-700"
              }

              `}
            >

              <span className="text-xl">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </Link>

          ))}

        </nav>

      

       

      </aside>
    </>
  );
}

export default Sidebar;