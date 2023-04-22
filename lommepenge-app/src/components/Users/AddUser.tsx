"use client"
import { UserPostBody } from "@/app/api/users/route";
import { FormEvent, useState } from "react";

type AddUserFormProps = {
  callback: (name: string) => Promise<void>
}

const AddUserForm = () => {

  const [name, setName] = useState("");

  const addToCol = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userPostBody : UserPostBody = {
      user: {
        name: name
      }
    };
    await fetch('api/users',{
      method: 'POST',
      body: JSON.stringify(userPostBody)
    });
    setName("");
  }
  return <form onSubmit={addToCol}>
    <label>
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
}

export default AddUserForm;