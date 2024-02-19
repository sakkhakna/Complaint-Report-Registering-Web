import { Link } from "react-router-dom";
import { useState } from "react";
import { signInUser } from "../../services/user.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Logo.png";

function SignIn() {
  const [inputDate, setInputData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    signInUser(inputDate);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 md:p-0">
      <form
        onSubmit={onSubmit}
        className="w-full md:w-[500px] bg-white p-10 flex flex-col gap-4"
      >
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Logo" width={100} />
          <h1 className="text-2xl md:text-4xl font-bold">Sign In</h1>
        </div>
        <div className="flex flex-col gap-4">
          <label>Email</label>
          <input
            className="p-2 rounded-lg border border-gray-300"
            type="email"
            placeholder="example@email.com"
            id="email"
            onChange={onChange}
            required
          />
        </div>
        <div className="flex flex-col gap-4 relative">
          <label htmlFor="password">Password</label>
          <input
            className="p-2 rounded-lg border border-gray-300"
            type={showPassword ? "text" : "password"}
            placeholder={showPassword ? "Password" : "********"}
            id="password"
            onChange={onChange}
            required
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="absolute top-[53px] right-2"
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                className="absolute top-[53px] right-2"
              />
            )}
          </button>
        </div>
        <div className="text-right">
          <a href="#" className="text-gray-400">
            Forget Password
          </a>
        </div>
        <button
          type="submit"
          className="bg-[#227F4B] w-full text-white font-bold p-2 rounded-lg"
        >
          Sign In
        </button>
        <p className="text-center">
          Don't Have Account?{" "}
          <Link to="/sign-up" className="text-gray-400">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
