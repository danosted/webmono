"use client"
import { useCallback, useEffect, useState } from "react";
import AddMoniesForm from "./AddMoniesForm";
import MoniesList from "./MoniesList";
import Money from "@/models/money";
import { ObjectId, WithId } from "mongodb";
import BaseEntryList from "../Users/BaseEntryList";

type MoniesManagerProps = {
  addCallback: (money: Money) => Promise<void>;
  getList: () => Promise<Array<WithId<Money>>>;
  deleteCallback: (id: ObjectId | string) => Promise<void>;
}

const MoniesManager = ({ addCallback, getList, deleteCallback }: MoniesManagerProps) => {

  const [moniesList, setMoniesList] = useState<Array<WithId<Money>>>([]);

  const getLocalAsync = useCallback(async () => {
    const collections = await getList();
    setMoniesList(collections)
  }, [getList]);
  const addLocalAsync = async (money: Money) => {
    await addCallback(money);
    await getLocalAsync();
  }
  const deleteLocalAsync = async (id: ObjectId | string) => {
    await deleteCallback(id);
    await getLocalAsync();
  }

  useEffect(() => {
    getLocalAsync();

  }, [getLocalAsync]);
  return <>
    <AddMoniesForm callback={addLocalAsync} />
    <BaseEntryList currentlist={moniesList} deleteCallback={deleteLocalAsync} />
  </>
}

export default MoniesManager;