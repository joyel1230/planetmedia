import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { postLogin } from "../../api/apiCall";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/user";
import Loading from "../loading/Loading";
import Button from "../micros/Button";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const Form: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await schema.validate({ username, password }, { abortEarly: false });
      setErrors({});
      const data = {
        username,
        password,
      };
      setLoading(true);
      const response = await postLogin(data);
      setLoading(false);
      console.log(response);
      if (response?.status !== 200) {
        setErr(response?.data.error);
      } else {
        dispatch(loginUser(response?.data?.jwt_token));
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach((err: yup.ValidationError) => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };
  return (
    <div className="w-80 mt-20">
      {loading && <Loading />}
      <h1 className="text-2xl font-medium font-serif mb-10">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-10">
          <label className="text-xs">USERNAME</label>
          <input
            type="text"
            className="bg-transparent border-b border-current focus:outline-none text-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
          />
          <span className="text-yellow-200 text-xs">{errors["username"]}</span>
        </div>
        <div className="flex flex-col mb-10">
          <label className="text-xs">PASSWORD</label>
          <input
            type="password"
            className="bg-transparent border-b border-current focus:outline-none text-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
          <span className="text-yellow-200 text-xs">{errors["password"]}</span>
        </div>
        <Button title="Login" />
      </form>
      <div className="text-xs text-center sm:text-left mt-4 flex gap-2 justify-center">
        <span>LOGIN</span> <span>OR</span>{" "}
        <Link to={"/shop"} className="font-semibold underline">
          SHOP
        </Link>
      </div>
      <span className="text-yellow-200 text-xs">{err}</span>
    </div>
  );
};

export default Form;
