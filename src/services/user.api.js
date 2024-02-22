import axios from "axios";
import Cookies from "js-cookie";

export const testApi = async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export const signUpUser = async (inputData) => {
  axios
    .post("http://localhost:5023/api/Account/sign-up", inputData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export const signInUser = async (inputData) => {
  return axios
    .post("http://localhost:5023/api/Account/sign-in", inputData)
    .then((response) => {
      console.log(response.data);
      Cookies.set("token", response.data.token, { expires: 7, secure: true });
      return response.data.flag;
    })
    .catch((error) => {
      console.log(error);
      if (error.response) {
        console.log(error.response.data);
        return error.response.data.flag;
      } else {
        console.log("Error", error.message);
      }
    });
};
