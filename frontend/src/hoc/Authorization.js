import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

function Authorisation(props) {
  let token = readCookie("token");
  if (!token) {
    token = null;
  }

  const [authTokens, setAuthTokens] = useState(token);
  const setTokens = (data) => {
    if (data) {
      createCookie("token", data, 365);
      console.log("create");
    } else {
      eraseCookie("token");
    }
    setAuthTokens(data);
  };

  const history = useHistory();
  // disconnect user every time he is not authenticated with a correct token
  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err?.response?.status === 401) {
        eraseCookie("token");
      }
      return err;
    }
  );

  return (
    <AuthContext.Provider
      value={{ authTokens, setAuthToken: (data) => setTokens(data) }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else {
    var expires = "";
  }
  console.log(name + "=" + value + expires + "; path=/");
  document.cookie = name + "=" + value + expires + "; path=/";
}

export function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}
export default Authorisation;
