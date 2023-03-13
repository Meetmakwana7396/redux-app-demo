import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllUser } from "../store/slices/UserSlice";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="btn btn-danger" onClick={() => dispatch(removeAllUser())}>
        Delete All User
      </div>
    </div>
  );
};

export default DeleteAllUsers;
