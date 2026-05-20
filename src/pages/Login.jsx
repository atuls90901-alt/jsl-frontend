import {
  useState,
  useContext,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  AuthContext,
} from "../context/AuthContext";

function Login() {

  const { login } =
    useContext(AuthContext);

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const navigate =
    useNavigate();

  
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const data =
          await login(
            email,
            password
          );

       
        if (
          data.user.role ===
          "admin"
        ) {

          navigate(
            "/admin"
          );

        } else {

          navigate("/");

        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT */}
        <div className="hidden lg:flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 flex-col justify-center">

          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back 
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Login to access your dashboard
          </p>

        </div>

        
        <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">

          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold text-blue-600">
              ShopEase
            </h1>

            <p className="text-gray-500 mt-2">
              Login to continue
            </p>

          </div>

          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-5"
          >

            
            <div>

              <label className="block text-sm font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 p-4 rounded-xl"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
              />

            </div>

           
            <div>

              <label className="block text-sm font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 p-4 rounded-xl"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-semibold"
            >

              {loading
                ? "Logging in..."
                : "Login"}

            </button>

          </form>

          <p className="text-center text-gray-500 mt-6">

            Don’t have an account?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;