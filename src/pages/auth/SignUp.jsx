import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    schoolName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen flex justify-center items-center p-4 md:p-0">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[500px] bg-white flex flex-col p-10 gap-4"
      >
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Logo" width={100} />
          <h1 className="text-2xl md:text-4xl font-bold">Sign Up</h1>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              onChange={onChange}
              type="text"
              placeholder="First Name"
              className="border rounded-lg border-gray-300 p-2 w-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              onChange={onChange}
              type="text"
              placeholder="Last Name"
              className="border rounded-lg border-gray-300 p-2 w-full"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="gender">Gender</label>
            <input
              id="gender"
              onChange={onChange}
              type="text"
              placeholder="Gender"
              className="border rounded-lg border-gray-300 p-2 w-full"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="schoolName">School Name</label>
            <input
              id="schoolName"
              onChange={onChange}
              type="text"
              placeholder="School Name"
              className="border rounded-lg border-gray-300 p-2 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={onChange}
            type="email"
            placeholder="example@email.com"
            className="p-2 rounded-lg border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-4 relative">
          <label>Password</label>
          <input
            className="p-2 rounded-lg border border-gray-300"
            type={showPassword ? "text" : "password"}
            placeholder={showPassword ? "Password" : "********"}
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
        <div className="flex flex-col gap-4 relative">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            className="p-2 rounded-lg border border-gray-300"
            type={showPassword ? "text" : "password"}
            placeholder={showPassword ? "Confirm Password" : "********"}
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
        <button
          type="submit"
          className="bg-[#227F4B] w-full text-white font-bold p-2 rounded-lg "
        >
          Sign Up
        </button>
        <p className="text-center">
          Already have account?{" "}
          <Link to="/sign-in" className="text-gray-400">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
