import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./auth.css";
import {useDispatch} from "react-redux";
import {loginAction} from "../../redux/slices/auth.slice";
import HomePageData from "../../data/home.page";
const LoginContainer = () => {
  const [body, setBody] = useState({});
  useEffect(() => {}, []);
  let dispatch = useDispatch()
  const login = () => {
   dispatch(loginAction({admin:body}))
  };
  return (
    <div className={"form-wrapper"}>
      <div className={"login-form"}>
        <Input
          placeholder={HomePageData.emailHint}
          type={"email"}
          onChange={(e) => {
            setBody({ ...body, email: e.target.value });
          }}
          value={body?.email || ""}
        />
        <Input
          value={body?.password || ""}
          placeholder="Enter password"
          type={"password"}
          onChange={(e) => {
            setBody({ ...body, password: e.target.value });
          }}
        />
        <Button type={"primary"} onClick={login}>Login</Button>
      </div>
    </div>
  );
};
export default LoginContainer;
