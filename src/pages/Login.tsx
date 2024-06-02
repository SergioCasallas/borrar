import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import axios from "axios";

import DefaultLayout from "@/layouts/default";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlerSubmit = async () => {
    const users = await axios({
      method: "post",
      baseURL: "https://d69k0l9b-3000.use2.devtunnels.ms/auth/login",
      body: {
        email: "paola@gmail.com",
        password: "1234",
      },
    });

    console.log(users);
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col justify-around">
        <Avatar
          className="w-64 h-64 text-tiny mx-auto my-5"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <Input
          className="my-5"
          label="Email"
          placeholder="Enter your email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="my-5"
          label="password"
          placeholder="Enter your password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className="mx-auto my-5"
          color="primary"
          onClick={() => {
            handlerSubmit();
          }}
        >
          Button
        </Button>
      </div>
    </DefaultLayout>
  );
}
