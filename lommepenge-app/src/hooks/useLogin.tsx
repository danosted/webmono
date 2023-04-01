"use client"
import useMongoUserStore from "@/stores/AuthStore";
import { useState } from "react";

const LoginForm = () => {
    const addUser = useMongoUserStore((state) => state.loginMongo);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return <form onSubmit={(e) => addUser(userName, password)}>
      <label>
        Email:
        <input
          type="email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
}

export default LoginForm;