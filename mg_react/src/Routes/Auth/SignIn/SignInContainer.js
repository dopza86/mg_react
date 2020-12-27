import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import useInput from "../../../Hooks/useInput";
import { userLogin } from "../../../redux/usersSlice";
import SignInPresenter from "./SignInPresenter";

export default () => {
  const dispatch = useDispatch();
  const username = useInput("");
  const password = useInput("");

  const isFormValid = () => {
    if (username === "" || password === "") {
      toast.error("아이디와 비밀번호를 입력해주세요");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    console.log(password.value);
    dispatch(
      userLogin({
        username: username.value,
        password: password.value,
      })
    );
  };

  return (
    <SignInPresenter
      username={username}
      password={password}
      handleSubmit={handleSubmit}
    />
  );
};
