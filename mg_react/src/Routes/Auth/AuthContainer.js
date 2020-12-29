import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../api";
import useInput from "../../Hooks/useInput";
import { userLogin } from "../../redux/usersSlice";
import AuthPresenter from "./AuthPresenter";

export default () => {
  const dispatch = useDispatch();
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const password = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");

  const handleSignIn = () => {
    dispatch(
      userLogin({
        username: username.value,
        password: password.value,
      })
    );
  };

  const handleSignUp = async () => {
    try {
      const { status } = await api.createAccount({
        first_name: firstName.value,
        last_name: lastName.value,
        username: username.value,
        password: password.value,
      });

      if (status === 201) {
        alert("가입을 축하드립니다 로그인 해주세요");
        setTimeout(() => setAction("logIn"), 2000);
      }
    } catch {
      alert("이미 존재하는 회원입니다");
    }
  };

  return (
    <AuthPresenter
      firstName={firstName}
      lastName={lastName}
      username={username}
      password={password}
      handleSignIn={handleSignIn}
      handleSignUp={handleSignUp}
      setAction={setAction}
      action={action}
    />
  );
};
