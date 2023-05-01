import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

import { getUserEmail, logout } from "./../util/util";

const apiEndpoint =
  "https://f1ny7sbemc.execute-api.ap-east-1.amazonaws.com/default/profilepic";
const xApiKey = "sgDpwB06kc66FNE58qFRO7DId1M682sP7I8gT7Bq";

const Profile = () => {
  const [modifiedDateTime, setModifiedDateTime] = useState("");
  const [imgData, setImgData] = useState(null);

  useEffect(() => {
    fetch(apiEndpoint + "?email=" + getUserEmail(), {
      mode: "cors",
      method: "GET",
      headers: { "x-api-key": xApiKey },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setImgData("data:image/gif;base64,"+res.base64ProfilePic);
        setModifiedDateTime(res.LastModified);
      });
  }, []);

  const route = useNavigate();
  const handleLogout = () => {
    googleLogout();
    logout();
    route("/login");
  };

  return (
    <div>
      <h4 style={{ marginBottom: 0 }}>User ID: {getUserEmail()}</h4>
      <img className="playerProfilePic_home_tile" src={imgData} alt="" />
      <h4 style={{ marginBottom: 0 }}>currentDateTime: {Date.now()}</h4>
      <h4 style={{ marginBottom: 0 }}>modifiedDateTime: {modifiedDateTime}</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
