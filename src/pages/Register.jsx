import {
  useState,
  useContext,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Register() {

  const { register } =
    useContext(AuthContext);

  const navigate =
    useNavigate();

  const [
    username,
    setUsername,
  ] = useState("");

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        await register(
          username,
          email,
          password
        );

        navigate("/login");

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

       
        <div className="hidden lg:flex bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-10 flex-col justify-center">

          <h1 className="text-5xl font-bold leading-tight">
            Create Account 🚀
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Join ShopEase and start exploring
            premium products with amazing offers.
          </p>

          <img
            src="https://illustrations.popsy.co/white/work-from-home.svg"
            alt="register"
            className="mt-10 w-full max-w-md"
          />

        </div>

       
        <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">

         
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold text-blue-600">
              ShopEase
            </h1>

            <p className="text-gray-500 mt-2">
              Register your account
            </p>

          </div>


          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            
            <div>

              <label className="block text-sm font-semibold mb-2">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter username"
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) =>
                  setUsername(
                    e.target.value
                  )
                }
                required
              />

            </div>

            
            <div>

              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-semibold transition duration-300"
            >

              {loading
                ? "Creating Account..."
                : "Register"}

            </button>

          </form>

          
          <p className="text-center text-gray-500 mt-6">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;