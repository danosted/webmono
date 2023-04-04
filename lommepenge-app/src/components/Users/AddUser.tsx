"use client"
import User from "@/models/user";
import useMongoUserStore from "@/stores/AuthStore";
import { Collection } from "mongodb";
import { FormEvent, useState } from "react";

type AddUserFormProps = {
  callback: (name: string) => Promise<void>
}

const AddUserForm = ({ callback }: AddUserFormProps) => {

  const [name, setName] = useState("");

  const addToCol = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await callback(name);
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