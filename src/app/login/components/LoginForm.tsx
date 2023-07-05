"use client";

import useSWRMutation from 'swr/mutation'
import React, { useEffect, useState } from "react";
import fetchLogin from '@/app/hook/fetchLogin';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const {push} = useRouter()
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  const {trigger, data} = useSWRMutation("/api/login", fetchLogin)
  useEffect(() => {
if (data) {
    console.log(data)
    if (data.status === 200) {
      push('/admin')
    }
}
  }, [data, push])
  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trigger({email: inputEmail, password: inputPassword})
  }
  return (
    <>
      <form onSubmit={(e) => {handlerSubmit(e)}}>
        <div>
          <label htmlFor="">email</label>
          <input onChange={(e) => {setInputEmail(e.target.value)}} type="text" name="mail" id="mail" />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input onChange={(e) => {setInputPassword(e.target.value)}} type="password" name="password" id="password" />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
