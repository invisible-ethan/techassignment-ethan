import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUserGivenName,
  getUserFamilyName,
  getUserEmail,
} from "./../util/util";

// To be added into config file
const apiEndpoint =
  "https://f1ny7sbemc.execute-api.ap-east-1.amazonaws.com/default/profilepic";
const xApiKey = "sgDpwB06kc66FNE58qFRO7DId1M682sP7I8gT7Bq";

const ProfilePic = () => {
  const route = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [imgData, setImgData] = useState(null);

  // Handle image file change and show preview.
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setProfilePic(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // upload the image to S3 and go to profile page
  const upload = () => {
    let body = {
      email: getUserEmail(),
      profilepic: imgData,
    };

    fetch(apiEndpoint, {
      mode: "cors",
      method: "PUT",
      headers: { "x-api-key": xApiKey },
      body: JSON.stringify(body),
    }).then(() => {
      route("/profile");
    });
  };

  return (
    <div>
      <h3 style={{ marginBottom: 0 }}>
        Hi {getUserGivenName() + " " + getUserFamilyName()}
      </h3>
      <h4 style={{ marginBottom: 0 }}>Please upload your profile picture</h4>
      <div>
        <input id="profilePic" type="file" accept="image/*" onChange={onChangePicture} />
        <button
          onClick={upload}
          style={{ display: imgData ? "block" : "none" }}
        >
          Upload
        </button>
      </div>
      <div>
        <img className="playerProfilePic_home_tile" src={imgData} alt="" />
      </div>
    </div>
  );
};

export default ProfilePic;
