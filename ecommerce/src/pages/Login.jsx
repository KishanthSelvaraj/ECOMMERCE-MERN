import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const login = async () => {
    try {
      console.log("login", formData);
      const response = await fetch("https://ecommerce-mern-w5oy.onrender.com/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        notifySuccess("Login successful!");
        setTimeout(() => {
          window.location.replace('/');
        }, 1500);
      } else {
        notifyError(responseData.errors);
      }
    } catch (error) {
      console.error("Login error:", error);
      notifyError("An error occurred during login. Please try again.");
    }
  };

  const signup = async () => {
    try {
      console.log("signup", formData);
      const response = await fetch("https://ecommerce-mern-w5oy.onrender.com/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        notifySuccess("Signup successful!");
        setTimeout(() => {
          window.location.replace('/');
        }, 1500);
      } else {
        notifyError(responseData.errors);
      }
    } catch (error) {
      console.error("Signup error:", error);
      notifyError("An error occurred during signup. Please try again.");
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" && (
            <input
              value={formData.username}
              onChange={changeHandler}
              name="username"
              type="text"
              placeholder="Your Name"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
          )}
          <input
            value={formData.email}
            onChange={changeHandler}
            type="email"
            name="email"
            placeholder="Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            value={formData.password}
            onChange={changeHandler}
            type="password"
            name="password"
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="btn_dark_rounded my-5 w-full !rounded-md"
        >
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className="text-black font-bold">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-secondary underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-black font-bold">
            Create an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-secondary underline cursor-pointer"
            >
              Click Here
            </span>
          </p>
        )}
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
