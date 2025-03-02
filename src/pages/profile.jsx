import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import ProfileHeader from '../components/ui/profileheader';
import UserInfo from '../components/ui/UserInfo';
import UserProof from '../components/ui/userProof';
import { Button } from '../components/ui/button';
import { FaShareAlt } from 'react-icons/fa';
import { MdStorage } from 'react-icons/md';

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log('No such document!');
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return <div>Kalem we...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {userData && (
        <>
          <ProfileHeader username={userData.username} />
          <div className="flex justify-center gap-5 mb-6">
            <Button className="flex items-center" variant="primary">
              <MdStorage className="mr-2" />
              Storage
            </Button>
            <Button className="flex items-center" variant="success">
              <FaShareAlt className="mr-2" />
              Sharing
            </Button>
          </div>
          <UserInfo email={userData.email} />
          <UserProof />
          {/* <Settings /> */}
        </>
      )}
    </div>
  );
}

export default ProfilePage;
