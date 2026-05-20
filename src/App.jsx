import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";

import {
  useAuth,
} from "./context/AuthContext";

// PUBLIC PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

// ADMIN PAGES
import Dashboard from "./admin/Dashboard";
import DashboardHome from "./admin/DashboardHome";
import AdminProducts from "./admin/AdminProducts";
import Orders from "./admin/Orders";
import User from "./admin/User";

import Footer from "./components/Footer";

function AppContent() {

  const location =
    useLocation();

  const {
    user,
    logout,
  } = useAuth();

  // CHECK ADMIN PAGE
  const isAdminPage =
    location.pathname.startsWith(
      "/admin"
    );

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* HEADER */}

      {!isAdminPage ? (

        <header className="bg-white shadow sticky top-0 z-50">

          <div
            className="
            max-w-7xl
            mx-auto
            px-4
            py-4
            flex
            flex-col
            md:flex-row
            md:justify-between
            md:items-center
            gap-4
          "
          >

            {/* LOGO */}
            <h1 className="text-3xl font-bold text-blue-600">
              ShopEase
            </h1>

            {/* NAVBAR */}
            <nav
              className="
              flex
              flex-wrap
              gap-5
              text-lg
              font-medium
            "
            >

              <Link
                to="/"
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="hover:text-blue-600 transition"
              >
                Products
              </Link>

              <Link
                to="/contact"
                className="hover:text-blue-600 transition"
              >
                Contact
              </Link>

              {/* IF USER NOT LOGIN */}
              {!user ? (

                <>
                  <Link
                    to="/login"
                    className="hover:text-blue-600 transition"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="hover:text-blue-600 transition"
                  >
                    Register
                  </Link>
                </>

              ) : (

                <>
                  {/* ADMIN ONLY */}
                  {user?.role ===
                    "admin" && (

                    <Link
                      to="/admin"
                      className="hover:text-blue-600 transition"
                    >
                      Dashboard
                    </Link>

                  )}

                  {/* LOGOUT */}
                  <button
                    onClick={() => {

                      logout();

                      window.location.href =
                        "/login";

                    }}
                    className="text-red-500 hover:text-red-600"
                  >
                    Logout
                  </button>
                </>
              )}

            </nav>

          </div>

        </header>

      ) : (

        // ADMIN HEADER
        <header
          className="
          bg-gray-900
          text-white
          px-4
          md:px-6
          py-4
          flex
          justify-between
          items-center
          shadow
        "
        >

          <h1 className="text-2xl md:text-3xl font-bold">
            Admin Dashboard
          </h1>

          <div className="flex items-center gap-4">

            <Link
              to="/"
              className="
              bg-white
              text-gray-900
              px-4
              py-2
              rounded-xl
              hover:bg-gray-200
              transition
              font-medium
            "
            >
              Home
            </Link>

            <button
              onClick={() => {

                logout();

                window.location.href =
                  "/login";

              }}
              className="
              bg-red-500
              hover:bg-red-600
              px-4
              py-2
              rounded-xl
              transition
            "
            >
              Logout
            </button>

          </div>

        </header>

      )}

      {/* MAIN */}

      <main className="flex-1 w-full">

        <Routes>

          {/* PUBLIC ROUTES */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Product />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* ADMIN PROTECTED ROUTE */}

          <Route
            path="/admin"
            element={
              user?.role ===
              "admin" ? (

                <Dashboard />

              ) : (

                <Navigate
                  to="/login"
                />

              )
            }
          >

            {/* DASHBOARD HOME */}
            <Route
              index
              element={
                <DashboardHome />
              }
            />

            {/* PRODUCTS */}
            <Route
              path="products"
              element={
                <AdminProducts />
              }
            />

            {/* ORDERS */}
            <Route
              path="orders"
              element={<Orders />}
            />

            {/* USERS */}
            <Route
              path="users"
              element={<User />}
            />

          </Route>

        </Routes>

      </main>

      {/* FOOTER */}

      {!isAdminPage && (
        <Footer />
      )}

    </div>
  );
}

function App() {

  return (

    <BrowserRouter>

      <AppContent />

    </BrowserRouter>

  );
}

export default App;