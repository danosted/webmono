"use client"
import User from "@/models/user";
import { ObjectId, WithId } from "mongodb";
import { useCallback, useEffect, useState } from "react";
import AddUserForm from "./AddUser";
import BaseEntryList from "./BaseEntryList";

type ReceiverManagerProps = {
  addUserCallback: (name: string) => Promise<void>;
  getReceiverList: () => Promise<Array<WithId<User>>>;
  deleteUserCallback: (id: ObjectId | string) => Promise<void>;
}

const UserManager = ({ addUserCallback, getReceiverList, deleteUserCallback }: ReceiverManagerProps) => {

  const [userList, setUserList] = useState<Array<WithId<User>>>([]);

  const getUserLocalAsync = useCallback(async () => {
    const recivers = await getReceiverList();
    setUserList(recivers)
  }, [getReceiverList]);
  const addUserLocalAsync = async (name: string) => {
    await addUserCallback(name);
    await getUserLocalAsync();
  }
  const removeUserLocalAsync = async (id: ObjectId | string) => {
    await deleteUserCallback(id);
    await getUserLocalAsync();
  }

  useEffect(() => {
    getUserLocalAsync();

  }, [getUserLocalAsync]);

  return <>
    <AddUserForm callback={addUserLocalAsync} />
    <BaseEntryList currentlist={userList} deleteCallback={removeUserLocalAsync} />
  </>
}

export default UserManager;