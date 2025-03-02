import React from 'react';

function UserProof() {
  const posts = [
    {
      id: 1,
      title: 'Tanah kapling mbah kung',
      content: 'coordinates',
    },
    {
      id: 2,
      title: 'Tanah kapling mbok darmi',
      content: 'coordinates',
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-2">LandProof</h2>
      {posts.map((post) => (
        <div key={post.id} className="border-b py-2">
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default UserProof;
