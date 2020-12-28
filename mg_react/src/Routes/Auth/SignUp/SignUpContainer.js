import React from "react";
import api from "../../../api";
import useInput from "../../../Hooks/useInput";
import SignUpPresenter from "./SignUpPresenter";

export default () => {
  const firstName = useInput("");
  const lastName = useInput("");
  const username = useInput("");
  const password = useInput("");

  const handleSubmit = async () => {
    try {
      const { status } = await api.createAccount({
        first_name: firstName.value,
        last_name: lastName.value,
        username: username.value,
        password: password.value,
      });
      console.log(status);
      if (status === 201) {
        alert("가입을 축하드립니다 로그인 해주세요");
      }
    } catch {
      alert("이미 존재하는 회원입니다");
    }
  };
  return (
    <SignUpPresenter
      firstName={firstName}
      lastName={lastName}
      username={username}
      password={password}
      handleSubmit={handleSubmit}
    />
  );
};
