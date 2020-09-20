import axios from "axios";
import { readCookie } from "../hoc/Authorization";

export const config = {
  API_URI:
    process.env.NODE_ENV === "production"
      ? "http://3.19.72.72:3001" // process.env.REACT_APP_API_URI
      : "http://127.0.0.1:3001",
};

export async function getAuth(path, onResponse) {
  try {
    const response = axios({
      url: `${config.API_URI}${path}`,
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        token: readCookie("token"),
      },
    });
    if (onResponse && onResponse[response.status]) {
      console.log("response", response.status);
      onResponse[response.status]();
    }
    return response;
  } catch (e) {
    if (onResponse && onResponse[e.response.status]) {
      onResponse[e.response.status]();
    }
    return e.response.status;
  }
}

export async function postNotAuth(path, data, onResponse) {
  try {
    const response = await axios({
      url: `${config.API_URI}${path}`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: data,
    });
    if (onResponse && onResponse[response.status]) {
      console.log("response", response.status);
      onResponse[response.status]();
    }
    return response;
  } catch (e) {
    if (onResponse && onResponse[e.response.status]) {
      onResponse[e.response.status]();
    }
    return e.response.status;
  }
}

export async function postAuth(path, data, onResponse) {
  try {
    const response = await axios({
      url: `${config.API_URI}${path}`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        token: readCookie("token"),
      },
      data: data,
    });
    if (onResponse && onResponse[response.status]) {
      console.log("response", response.status);
      onResponse[response.status]();
    }
    return response;
  } catch (e) {
    if (onResponse && onResponse[e.response.status]) {
      onResponse[e.response.status]();
    }
    return e.response.status;
  }
}

export async function putAuth(path, data, onResponse) {
  try {
    const response = await axios({
      url: `${config.API_URI}${path}`,
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        token: readCookie("token"),
      },
      data: data,
    });
    if (onResponse && onResponse[response.status]) {
      console.log("response", response.status);
      onResponse[response.status]();
    }
    return response;
  } catch (e) {
    if (onResponse && onResponse[e.response.status]) {
      onResponse[e.response.status]();
    }
    return e.response.status;
  }
}

export async function deleteAuth(path, data, onResponse) {
  try {
    const response = axios({
      url: `${config.API_URI}${path}`,
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        token: readCookie("token"),
      },
      data: data,
    });
    if (onResponse && onResponse[response.status]) {
      console.log("response", response.status);
      onResponse[response.status]();
    }
    return response;
  } catch (e) {
    if (onResponse && onResponse[e.response.status]) {
      onResponse[e.response.status]();
    }
    return e.response.status;
  }
}
