import React, { useEffect, useState } from "react";
import "./style.css";

const UserList = ({ userData, handleDelete, removedList, handleUndo}) => {

  return (
    <div className="container">
      <div className="wrapper">
        <ul>
          <h1>user  data</h1>
          {userData.map((data) => (
            <div className="flex__group" key={data.id}>
              <li>
                {data.id}. {data.name}
              </li>
              <button onClick={() => handleDelete(data.id)}>Delete</button>
            </div>
          ))}
        </ul>
        <ul>
          <h1>deleted data</h1>
          {removedList.map((data, index) => (
            <div className="flex__group">
            <li>{data.id}. {data.name}</li>
            <button onClick={() => handleUndo(data.id)}>Undo</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
