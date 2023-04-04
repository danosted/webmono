"use client"
import { useEffect, useState } from "react";
import AddMoniesForm from "./AddMoniesForm";
import MoniesList from "./MoniesList";
import Money from "@/models/money";
import { ObjectId } from "mongodb";

type MoniesManagerProps = {
  addCallback: (money: Money) => Promise<void>;
  getList: () => Promise<Array<Money>>;
  deleteCallback: (id: string) => Promise<void>;
}

const MoniesManager = ({ addCallback, getList, deleteCallback }: MoniesManagerProps) => {

  const [moniesList, setMoniesList] = useState<Array<Money>>([]);

  useEffect(() => {
    getLocalAsync();

  }, []);

  const getLocalAsync = async () => {
    const collections = await getList();
    setMoniesList(collections)
  }
  const addLocalAsync = async (money: Money) => {
    await addCallback(money);
    await getLocalAsync();
  }
  const deleteLocalAsync = async (name: string) => {
    await deleteCallback(name);
    await getLocalAsync();
  }
  return <>
    <AddMoniesForm callback={addLocalAsync} payeeList={[{ name: "testname", _id: new ObjectId("testid") }]} />
    <MoniesList currentlist={moniesList} deleteCallback={deleteLocalAsync} />
  </>
}

export default MoniesManager;