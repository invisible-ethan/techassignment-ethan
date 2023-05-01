import React, { useState } from "react";
import { getUserGivenName, getUserFamilyName } from "./../util/util";

const ProfilePic = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [imgData, setImgData] = useState(null);

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

  return (
    <div>
      <h3 style={{ marginBottom: 0 }}>
        Hi {getUserGivenName() + " " + getUserFamilyName()}
      </h3>
      <h4 style={{ marginBottom: 0 }}>Please upload your profile picture</h4>
      <div>
        <input id="profilePic" type="file" onChange={onChangePicture} />
      </div>
      <div>
        <img className="playerProfilePic_home_tile" src={imgData} alt="" />
      </div>
    </div>
  );
};

export default ProfilePic;
