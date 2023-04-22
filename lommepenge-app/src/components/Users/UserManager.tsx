"use client"
import User from "@/models/user";
import { ObjectId, WithId } from "mongodb";
import { useEffect, useState } from "react";
import AddUserForm from "./AddUser";
import BaseEntryList from "./BaseEntryList";

type ReceiverManagerProps = {
  addUserCallback: (name: string) => Promise<void>;
  getReceiverList: () => Promise<Array<WithId<User>>>;
  deleteUserCallback: (id: ObjectId | string) => Promise<void>;
}

const UserManager = ({ addUserCallback, getReceiverList, deleteUserCallback }: ReceiverManagerProps) => {

  const [userList, setUserList] = useState<Array<WithId<User>>>([]);

  useEffect(() => {
    getUserLocalAsync();

  }, []);

  const getUserLocalAsync = async () => {
    const recivers = await getReceiverList();
    setUserList(recivers)
  }
  const addUserLocalAsync = async (name: string) => {
    await addUserCallback(name);
    await getUserLocalAsync();
  }
  const removeUserLocalAsync = async (id: ObjectId | string) => {
    await deleteUserCallback(id);
    await getUserLocalAsync();
  }
  return <>
    <AddUserForm callback={addUserLocalAsync} />
    <BaseEntryList currentlist={userList} deleteCallback={removeUserLocalAsync} />
  </>
}

export default UserManager;