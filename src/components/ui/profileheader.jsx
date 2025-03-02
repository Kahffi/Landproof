import React from 'react';

function ProfileHeader({ username }) {
  return (
    <div className="text-center mb-6">
      <img
        src="profile-pic-url.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold">{username}</h1>
    </div>
  );
}
export default ProfileHeader;
