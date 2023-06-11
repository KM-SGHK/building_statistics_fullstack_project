import React from "react";
import ErrorMessageSnackBar from "../components/ErrorMessageSnackBar";
import { useSelector } from "react-redux";
import LoginFields from "../components/login/Fields";

export default function LoginForm() {
  const loginError = useSelector((state) => state.auth.error);
  let logoURL =
    "https://i0.wp.com/varadise.ai/wp-content/uploads/2022/03/Varadise-600x300-1.png?fit=600%2C300&ssl=1";

  return (
    <>
      <ErrorMessageSnackBar error={loginError} />
      <header className="App-header">
        <img src={logoURL} className="App-logo" alt="logo" />
        <LoginFields />
      </header>
    </>
  );
}
