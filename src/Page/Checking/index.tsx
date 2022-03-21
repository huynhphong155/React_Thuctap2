import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import RenderUI from "../../HOC/RenderUI";

const Checking = () => {
  const handleAddObject = async (e: any) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  return (
    <RenderUI>
      <div>DoiSoatVe</div>
      <button onClick={handleAddObject}>add object</button>
    </RenderUI>
  );
};

export default Checking;
