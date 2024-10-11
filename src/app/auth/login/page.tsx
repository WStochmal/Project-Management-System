"use client";

import { AuthProps } from "@/interfaces/auth-props";
import Button from "@/ui/Button/Button";
import Input from "@/ui/Input/Input";
import { useState } from "react";

const LoginPage = () => {
  const [auth, setAuth] = useState<AuthProps>({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(auth);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(name, value);

    if (!name || !value) return;

    setAuth({
      ...auth,
      [name]: value,
    });
  };

  return (
    <form action={handleSubmit}>
      <Input
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginPage;
