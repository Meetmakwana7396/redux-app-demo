import React from "react";
import { fakeUserData } from "../api";
import DeleteAllUser from "./DeleteAllUser";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/UserSlice";
import * as Bi from "react-icons/bi";

const UserDetails = () => {
  const dispatch = useDispatch();

  //Adding user in Store's Array
  const addNewUser = (payload) => {
    dispatch(addUser(payload)); //This will Dispatch Action addUser with the Payload Data
  };

  //Displaying Store Array
  const data = useSelector((state) => {
    return state.users;
  });

  console.log(data);
  return (
    <>
      <div className="container p-4">
        <div className="d-flex justify-content-between">
          <h3>List of User Details</h3>
          <div
            className="btn btn-success"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New Users
          </div>
        </div>
        <div>
          {data.length == 0 ? (
            <img src="empty.png" alt="" srcset="" />
          ) : (
            data.map((d, i) => (
              <div className="user" key={i}>
                <span>{d}</span>
                <Bi.BiTrash
                  size={30}
                  cursor="pointer"
                  onClick={() => dispatch(removeUser(i))}
                />
              </div>
            ))
          )}
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <DeleteAllUser />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
