import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { setUserSession } from "./../util/util";

const apiEndpoint =
  "https://f1ny7sbemc.execute-api.ap-east-1.amazonaws.com/default/techassignment-ethan-member";
const xApiKey = "sgDpwB06kc66FNE58qFRO7DId1M682sP7I8gT7Bq";

const Login = (props) => {
  const route = useNavigate();
  const onGoggleLoginSuccess = (res) => {
    fetch(
      "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" +
        res.credential,
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        let body = {
          email: res.email,
          lastName: res.family_name,
          firstName: res.given_name,
        };
        fetch(apiEndpoint, {
          mode:"cors",
          method: "PUT",
          headers: { "x-api-key": xApiKey },
          body: JSON.stringify(body),
        }).then(() => {
          setUserSession(res);
          route("/profilepic");
        });
      });
  };
  const onGoggleLoginFailed = (res) => {
    console.log("Login failed");
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={onGoggleLoginSuccess}
        onError={onGoggleLoginFailed}
        useOneTap
      />
    </div>
  );
};

export default Login;
