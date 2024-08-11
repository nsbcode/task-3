import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [removedList, setRemovedList] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUserData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (getUserId) => {
    const updatedData = userData.filter((user) => user.id !== getUserId);
    const removedData = userData.filter((user) => user.id === getUserId);

    setUserData(updatedData);
    setRemovedList(removedList.concat(removedData).sort((a, b) => a.id - b.id));
  };

  const handleUndo = (getUserId) => {
    console.log(getUserId);
    
    removedList.map((data, index) => {
      if (data.id === getUserId) {
        const addData = userData.splice(getUserId, 0, data);
        setUserData(userData.concat(addData).sort((a, b) => a.id - b.id));
        const removeData = removedList.filter((data) => data.id !== getUserId);
        setRemovedList(removeData)
      }
    });

    console.log(removedList)
  };
  // console.log(userData);
  

  return (
    <UserList
      userData={userData}
      handleUndo={handleUndo}
      handleDelete={handleDelete}
      removedList={removedList}
    />
  );
};

export default App;
