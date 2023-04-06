import React from 'react';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div className="profile">
      <div className="profile-image">{children}</div>
      <h2 onClick={() => handleName(fullName)}>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
    </div>
  );
};

export default Profile;
