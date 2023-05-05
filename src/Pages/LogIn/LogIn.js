import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [sendPasswordResetEmail, sending, err] =
    useSendPasswordResetEmail(auth);
    const [token] = useToken(user || gUser);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let signInError;
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    signInError = (
      <p>
        <small className="text-red-600">Error: {error?.message || gError?.message}</small>
      </p>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {err.message}</p>
      </div>
    );
  }
  if (sending) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    navigate("/");
  };
  const handleForgetPassword = async () => {
    console.log(email);
    if(email){
      await sendPasswordResetEmail(email);
      toast('Password reset email send! Please check your email.');
    } else {
      toast('Please Enter Your Email Address.');
    }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl text-primary font-bold text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email must be required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Enter valid email",
                  },
                })}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password required",
                  },
                  minLength: {
                    value: 8,
                    message: "Must be 8 character or longer",
                  },
                })}
              />
              <label className="label text-red-600">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}

            <input
              className="btn w-full btn-primary max-w-xs mt-5"
              type="submit"
              value="Login"
            />
            <p>
              <small>
                New to Street Smartz?{" "}
                <Link to="/signup" className="text-secondary">
                  Create an account
                </Link>
              </small>
            </p>
            <p>
              <small>
                Forget password?{" "}
                <button
                  onClick={handleForgetPassword}
                  className="text-secondary"
                >
                  Reset Password
                </button>
              </small>
            </p>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary btn-outline"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
