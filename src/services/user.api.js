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

export const SignUpUser = (inputData) => {
  axios
    .post("http://localhost:5023/api/Account/sign-up", inputData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export const signInUser = (inputData) => {
  axios
    .post("http://localhost:5023/api/Account/sign-in", inputData)
    .then((response) => {
      Cookies.set("token", response.data.token, { expires: 7, secure: true });
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};
