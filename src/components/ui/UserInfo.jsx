import React from 'react';

function UserInfo({ email }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-2">User Information</h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> (123) 456-7890
      </p>
      <p>
        <strong>Location:</strong> Bantar gebang, IND
      </p>
    </div>
  );
}

export default UserInfo;
