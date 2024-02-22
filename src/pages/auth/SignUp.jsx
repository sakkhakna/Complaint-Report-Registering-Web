import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { signUpUser } from "../../services/user.api";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    // firstName: "",
    // lastName: "",
    Name: "",
    // gender: "",
    // schoolName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = signUpUser(inputData);
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
        {/* <div className="flex gap-4">
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
        </div> */}
        <div className="flex flex-col gap-4">
          <label htmlFor="Name">Username</label>
          <input
            id="Name"
            onChange={onChange}
            type="text"
            placeholder="Username"
            className="border rounded-lg border-gray-300 p-2 w-full"
          />
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
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            onChange={onChange}
            type="email"
            placeholder="example@Email.com"
            className="p-2 rounded-lg border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label>Password</label>
          <div className="relative">
            <input
              id="Password"
              onChange={onChange}
              className="p-2 rounded-lg border border-gray-300 w-full"
              type={showPassword ? "text" : "password"}
              placeholder={showPassword ? "Password" : "********"}
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="absolute top-[13px] right-2"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  className="absolute top-[13px] right-2"
                />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative">
            <input
              id="ConfirmPassword"
              onChange={onChange}
              className="p-2 rounded-lg border border-gray-300 w-full"
              type={showPassword ? "text" : "password"}
              placeholder={showPassword ? "Confirm Password" : "********"}
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="absolute top-[13px] right-2"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  className="absolute top-[13px] right-2"
                />
              )}
            </button>
          </div>
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
